import ResponsiveImage from "./ResponsiveImage";
import Placeholder from "./SvgPlaceHolder";
import { ResponsiveImageProps } from "./_types";

export default function MobileCircuitDiagram({ variant, ...rest }: { variant: 'one' | 'two' | 'three' | 'four';[x: string]: any; }) {

  const circuitDesignConsiderationsOne: ResponsiveImageProps = {
    alt: "Design Considerations: Circuit picker screen - highlighting the various features of the screen.",
    dropShadow: 2,
    PlaceholderComponent: Placeholder.CircuitDiagramOne, 
    imageSize: {
      h: 2585,
      w: 1255
    },
    imageUrls: {
      small: {
        imageUrl_1x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-514.WEBP",
        imageUrl_2x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-771.WEBP",
        imageUrl_3x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-1166.WEBP"
      },
      medium: {
        imageUrl_1x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-287.WEBP",
        imageUrl_2x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-579.WEBP",
        imageUrl_3x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-861.WEBP"
      },
      large: {
        imageUrl_1x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-257.WEBP",
        imageUrl_2x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-514.WEBP",
        imageUrl_3x: "/sourceImages/CircuitPickerScreen.5c31af41-opt-771.WEBP"
      }
    }
  };
  const circuitDesignConsiderationsTwo: ResponsiveImageProps = {
    alt: "Design Considerations: Completed session - recap screen - highlighting the various features of the screen.",
    dropShadow: 2,
    PlaceholderComponent: Placeholder.CircuitDiagramTwo, 
    imageSize: {
      h: 2585,
      w: 1255
    },
    imageUrls: {
      small: {
        imageUrl_1x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-514.WEBP",
        imageUrl_2x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-771.WEBP",
        imageUrl_3x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-1166.WEBP"
      },
      medium: {
        imageUrl_1x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-287.WEBP",
        imageUrl_2x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-579.WEBP",
        imageUrl_3x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-861.WEBP"
      },
      large: {
        imageUrl_1x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-257.WEBP",
        imageUrl_2x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-514.WEBP",
        imageUrl_3x: "/sourceImages/CircuitOverviewResults.711b0d7d-opt-771.WEBP"
      }
    }
  };
  const circuitDesignConsiderationsThree: ResponsiveImageProps = {
    alt: "Design Considerations: Completed session - recap screen - highlighting the various features of the screen.",
    dropShadow: 2,
    PlaceholderComponent: Placeholder.CircuitDiagramThree, 
    imageSize: {
      h: 2585,
      w: 1255
    },
    imageUrls: {
      small: {
        imageUrl_1x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-514.WEBP",
        imageUrl_2x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-771.WEBP",
        imageUrl_3x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-1166.WEBP"
      },
      medium: {
        imageUrl_1x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-287.WEBP",
        imageUrl_2x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-579.WEBP",
        imageUrl_3x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-861.WEBP"
      },
      large: {
        imageUrl_1x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-257.WEBP",
        imageUrl_2x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-514.WEBP",
        imageUrl_3x: "/sourceImages/CircuitDetailedResults.ef534f30-opt-771.WEBP"
      }
    }
  };

  if (variant === 'one') {
    return (
      <figure {...rest} className={`circuit_diagram${rest.className ? ' ' + rest.className : ''}`}>
        <div className="circuit_diagram-one_label label_one">
          <div className="circuit_label centering">
            <p>Access to usage history</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-one_label label_two">
          <div className="circuit_label centering">
            <p>Easily view current Circuit&apos;s specs and tap to edit them</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-one_label label_three">
          <div className="circuit_label centering">
            <p>Access to preset and custom Circuits</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-one_label label_four">
          <div className="circuit_label centering">
            <p>Quickly add a custom Circuit</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-one_image_wrap">
          <ResponsiveImage
            alt={circuitDesignConsiderationsOne.alt}
            imageSize={circuitDesignConsiderationsOne.imageSize}
            imageUrls={circuitDesignConsiderationsOne.imageUrls}
            dropShadow={circuitDesignConsiderationsOne.dropShadow}
            PlaceholderComponent={circuitDesignConsiderationsOne.PlaceholderComponent}
          />
        </div>
      </figure>
    );
  }
  if (variant === 'two') {
    return (
      <figure {...rest} className={`circuit_diagram two${rest.className ? ' ' + rest.className : ''}`}>
        <div className="circuit_diagram-two_label label_one">
          <div className="circuit_label two centering">
            <p>Post recent activity to social media</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-two_image_wrap">
          <ResponsiveImage
            alt={circuitDesignConsiderationsTwo.alt}
            imageSize={circuitDesignConsiderationsTwo.imageSize}
            imageUrls={circuitDesignConsiderationsTwo.imageUrls}
            dropShadow={circuitDesignConsiderationsTwo.dropShadow}
            PlaceholderComponent={circuitDesignConsiderationsTwo.PlaceholderComponent}
          />
        </div>
      </figure>
    );
  }
  if (variant === 'three') {
    return (
      <figure {...rest} className={`circuit_diagram${rest.className ? ' ' + rest.className : ''}`}>
        <div className="circuit_diagram-three_label label_one">
          <div className="circuit_label centering">
            <p>View by date range</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-three_label label_two">
          <div className="circuit_label centering">
            <p>Show daily activity</p>
            <div className="label_line" />
          </div>
        </div>
        <div className="circuit_diagram-three_image_wrap">
          <ResponsiveImage
            alt={circuitDesignConsiderationsThree.alt}
            imageSize={circuitDesignConsiderationsThree.imageSize}
            imageUrls={circuitDesignConsiderationsThree.imageUrls}
            dropShadow={circuitDesignConsiderationsThree.dropShadow}
            PlaceholderComponent={circuitDesignConsiderationsThree.PlaceholderComponent}
          />
        </div>
      </figure>
    );
  }
  if (variant === 'four') {
    return (
      <figure {...rest} className={`circuit_diagram four${rest.className ? ' ' + rest.className : ''}`}>
        {/* Left */}
        <div className="circuit_diagram-left">
          <div className="circuit_diagram-left_label label_one">
            <div className="circuit_label centering">
              <p>Access to usage history</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-left_label label_two">
            <div className="circuit_label centering">
              <p>Easily view current Circuit&apos;s specs and tap to edit them</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-left_label label_three">
            <div className="circuit_label centering">
              <p>Access to preset and custom Circuits</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-left_label label_four">
            <div className="circuit_label centering">
              <p>Quickly add a custom Circuit</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-left_image_wrap">
            <ResponsiveImage
              alt={circuitDesignConsiderationsOne.alt}
              imageSize={circuitDesignConsiderationsOne.imageSize}
              imageUrls={circuitDesignConsiderationsOne.imageUrls}
              dropShadow={circuitDesignConsiderationsOne.dropShadow}
              PlaceholderComponent={circuitDesignConsiderationsOne.PlaceholderComponent}
            />
          </div>
        </div>
        {/* Center */}
        <div className="circuit_diagram-center">
          <div className="circuit_diagram-center_label label_one">
            <div className="circuit_label center centering">
              <p>Post recent activity to social media</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-center_image_wrap">
            <ResponsiveImage
              alt={circuitDesignConsiderationsTwo.alt}
              imageSize={circuitDesignConsiderationsTwo.imageSize}
              imageUrls={circuitDesignConsiderationsTwo.imageUrls}
              dropShadow={circuitDesignConsiderationsTwo.dropShadow}
              PlaceholderComponent={circuitDesignConsiderationsTwo.PlaceholderComponent}
            />
          </div>
        </div>
        {/* Right */}
        <div className="circuit_diagram-right">
          <div className="circuit_diagram-right_label label_one">
            <div className="circuit_label centering">
              <p>View by date range</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-right_label label_two">
            <div className="circuit_label centering">
              <p>Show daily activity</p>
              <div className="label_line" />
            </div>
          </div>
          <div className="circuit_diagram-right_image_wrap">
            <ResponsiveImage
              alt={circuitDesignConsiderationsThree.alt}
              imageSize={circuitDesignConsiderationsThree.imageSize}
              imageUrls={circuitDesignConsiderationsThree.imageUrls}
              dropShadow={circuitDesignConsiderationsThree.dropShadow}
              PlaceholderComponent={circuitDesignConsiderationsThree.PlaceholderComponent}
            />
          </div>
        </div>
      </figure>
    );
  }
}