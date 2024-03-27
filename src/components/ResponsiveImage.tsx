/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { ResponsiveImageProps } from "./_types";

interface ResponsiveImageComponentProps extends React.HTMLAttributes<HTMLDivElement>, ResponsiveImageProps { }

import React, { useEffect, useRef } from 'react';

export default function ResponsiveImage({ imageUrls, alt, imageSize, blurDataUrl, loading = 'lazy', dropShadow = 1, addBlur, ...rest }: ResponsiveImageComponentProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && imageRef.current) {
          populatePictureTag();
          observer.disconnect();
        }
      });
    }, observerOptions);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []); // useEffect dependency array is intentionally left empty to ensure this setup runs once

  const populatePictureTag = () => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const pictureElement = imageElement.parentElement;
    if (!pictureElement) return;

    imageElement.addEventListener('load', cleanUpLoadImage.bind(null, imageElement, pictureElement));

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
    imageElement.src = imageUrls.medium.imageUrl_1x; // Load the real image
  };

  const appendToFilter = () => {
    if (dropShadow === 1) {
      return " drop-shadow(8px 8px 9px rgba(0, 0, 0, 0.2)) drop-shadow(2px 1px 4px rgba(0, 0, 0, 0.5))";
    }
    if (dropShadow === 2) {
      return " drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.5)) drop-shadow(11px 18px 15px rgba(0, 0, 0, 0.33))";
    } else {
      return '';
    }
  };

  const cleanUpLoadImage = (imageElement: HTMLImageElement, pictureElement: HTMLPictureElement) => {
    imageElement.style.filter = `blur(0px)${appendToFilter()}`;
    imageElement.style.opacity = '1';
    imageElement.setAttribute('alt', alt);
    imageElement.removeEventListener('load', cleanUpLoadImage.bind(null, imageElement, pictureElement));
    imageElement.style.removeProperty('background-image');
    imageElement.style.removeProperty('background-repeat');
    imageElement.style.removeProperty('background-size');
    (imageElement as HTMLImageElement | null) = null;
  };

  return (
    <picture {...rest} className={`image_frame${rest.className ? ` ${rest.className}` : ''}`}>
      <img
        ref={imageRef}
        className={`image_frame--image`}
        height={imageSize.h}
        width={imageSize.w}
        loading={loading}
        alt=''
        style={{
          backgroundImage: `url(${blurDataUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: 'auto',
          display: 'block',
          filter: 'blur(10px)',
        }}
      />
    </picture>
  );
};
