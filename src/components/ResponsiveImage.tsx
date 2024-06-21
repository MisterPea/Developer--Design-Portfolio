/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { ResponsiveImageProps } from "./_types";

interface ResponsiveImageComponentProps extends React.HTMLAttributes<HTMLDivElement>, ResponsiveImageProps { }

import React, { useEffect, useRef } from 'react';
import { requestIdleCallbackPolyfill, cancelIdleCallbackPolyfill } from '../components/_helpers/requestIdleCallbackPolyfill';

export default function ResponsiveImage({
  PlaceholderComponent,
  imageUrls,
  alt,
  imageSize,
  loading = 'lazy',
  dropShadow,
  addBlur,
  intersectDelay = 0,
  ...rest }: ResponsiveImageComponentProps) {

  const imageRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if ( !window.requestIdleCallback ) {
      requestIdleCallbackPolyfill();
    }
    
    if ( !window.cancelIdleCallback ) {
      cancelIdleCallbackPolyfill();
    }

    const callRequestIdleCallback = (callback: () => void) => {
      const idleCallbackId = requestIdleCallback(() => {
        callback();
        clearTimeout(fallbackTimeout);
      });
      const fallbackTimeout = setTimeout(() => {
        cancelIdleCallback(idleCallbackId);
        requestAnimationFrame(callback);
      }, 300);
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 10% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imageRef.current) {
          callRequestIdleCallback(populatePictureTag);
          observer.disconnect();
        }
      });
    }, observerOptions);

    // If `eager` bypass observer and load image
    if (loading === 'eager') {
      callRequestIdleCallback(populatePictureTag);
    }

    // If `lazy` implement observer
    if (loading === 'lazy' && imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []); // useEffect dependency array is intentionally left empty to ensure this setup runs once

  const populatePictureTag = () => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const pictureElement = imageElement.parentElement;
    if (!pictureElement) return;

    const placeholderElement = placeholderRef.current;
    if (!placeholderElement) return;

    imageElement.addEventListener('load', () => cleanUpLoadImage(imageElement, pictureElement, placeholderElement));

    const sourceSizes = [
      { size: 'large', minWidth: '1200px' },
      { size: 'medium', minWidth: '800px' },
      { size: 'small', minWidth: null },
    ];

    sourceSizes.forEach(({ size, minWidth }) => {
      const sourceElement = document.createElement('source');
      if (size === "large" || size === "medium" || size === "small") {
        const imageUrlSet = imageUrls[size];
        sourceElement.srcset = `${imageUrlSet.imageUrl_1x}, ${imageUrlSet.imageUrl_2x} 2x, ${imageUrlSet.imageUrl_3x} 3x`;
        if (minWidth) {
          sourceElement.media = `(min-width: ${minWidth})`;
        }
        pictureElement.insertBefore(sourceElement, imageElement);
      }
    });
    imageElement.src = imageUrls.medium.imageUrl_1x; // Load the default image
  };

  const appendToClass = (() => {
    if (dropShadow === 1) {
      return '-drop_shadow-1';
    }
    if (dropShadow === 2) {
      return '-drop_shadow-2';
    } else {
      return '-drop_shadow-0';
    }
  })();

  const removePlaceholder = (placeholder: HTMLDivElement) => {
    placeholder.remove();
  };

  const cleanUpLoadImage = (imageElement: HTMLImageElement, pictureElement: HTMLPictureElement, placeholderElement: HTMLDivElement) => {
    window.setTimeout(() => {
      imageElement.classList.add('--mounted');
      imageElement.classList.add(appendToClass);
      imageElement.setAttribute('alt', alt);
      imageElement.removeEventListener('load', () => cleanUpLoadImage(imageElement, pictureElement, placeholderElement));
      placeholderElement.classList.add('--load-complete');
      // remove placeholder div upon completion
      placeholderElement.addEventListener('transitionend', () => removePlaceholder(placeholderElement), { once: true });
      (imageElement as HTMLImageElement | null) = null;
    }, intersectDelay);
  };

  return (
    <picture {...rest} className={`image_frame${rest.className ? ` ${rest.className}` : ''}`}>
      <img
        ref={imageRef}
        className='image_frame--image'
        height={imageSize.h}
        width={imageSize.w}
        loading={loading}
        alt=''
      />
      <div ref={placeholderRef} className="image_frame--placeholder">
        {PlaceholderComponent && <PlaceholderComponent />}
      </div>
    </picture>
  );
};
