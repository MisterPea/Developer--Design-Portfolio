import ProjectHeadline from "../../src/components/ProjectHeadline";
import siteContent from "../../src/app/siteContent.json";
import "../../src/style/globals.scss";
import ExportedImage from "next-image-export-optimizer";

import ToolRoleTitle from "../../src/components/ToolRoleTitle";
import ChipGroup from "../../src/components/ChipGroup";
import ProjectTextBlock from "@/components/ProjectTextBlock";
import DivideLine from "@/components/DivideLine";
import ProjectLinks from "@/components/ProjectLinks";
import ProjectNavbar from "@/components/ProjectNavbar";
import ColorSwatchGroup from "@/components/ColorSwatchGroup";
import ImageCaption from "@/components/ImageCaption";

import VideoPlayer from "@/components/VideoPlayer";
import TypeSpecimen from "@/components/TypeSpecimen";
import BackToAllWork from "@/components/BackToAllWork";
import ProjectFooter from "@/components/ProjectFooter";
import IntersectionWrapper from "@/components/IntersectionWrapper";

import Spacer from "@/components/Spacer";
import CircuitPeriodGroup from "@/components/CircuitPeriodGroup";
import MobileCircuitDiagram from "@/components/MobileCircuitDiagram";
import ResponsiveImage from "@/components/ResponsiveImage";
import { ResponsiveImageProps } from "@/components/_types";

const heroImage: ResponsiveImageProps = {
  alt: "Images of Circuit App splash screen, setup screen and in-progress screen.",
  dropShadow: 2,
  blurDataUrl: "data:image/jpeg;base64,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",
  imageSize: {
    h: 2054, w: 3340
  },
  imageUrls: {
    small: {
      imageUrl_1x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-771.WEBP',
      imageUrl_2x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-1920.WEBP',
      imageUrl_3x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP'
    },
    medium: {
      imageUrl_1x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-1166.WEBP',
      imageUrl_2x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP',
      imageUrl_3x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-3498.WEBP'
    },
    large: {
      imageUrl_1x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-1125.WEBP',
      imageUrl_2x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-2332.WEBP',
      imageUrl_3x: '/optimizedImages/MainStaticFrontPage.1443cdea-opt-3989.WEBP'
    }
  }
};

const circuitInitialScreen: ResponsiveImageProps = {
  alt: "Initial screen for a basic Pomodoro timer, consisting of 4 - 25 minute active and 5 - 1 minute rest periods.",
  dropShadow: 2,
  blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADzAHYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAFxABAQEBAAAAAAAAAAAAAAAAAAEREv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0AEFQBVRQVUAVABKzVrNBKzVrNUAAdBBBoRQVUUVRAFZqs0C1m0tZtELWbVrNUNEAdVRYgsWJGoKoKCCpUErNarNUZrNarNBKy1UwRAwB1UWAsaiSNSCrIYsi4gylbxmwGKzXSxiwGKjdiYoxhjeGAxg3yAqyGLII1I1IkjcgpIuLIuIrOM2N4lgOdjNjpYlgjnhjeGAxi8tyLgOfI64A5YshjUVFjUSNQVYpFQRLGkoMWJjdQGMXFxcBJGsWRcBnBvAHmaiKqLG4zFgrUVDUFQ0BAAFRVFioaDQmgOACoqoIN6azporQzpoNImmiKus6aDWms6aDejGgMAKKagCmoag1prOmg1qamii6mppoLqampoNaM6A2gAAACAKAACAIqAiKgAAOgAACAKAgqAIoCI0mAiY1hgM4NYA0AAKAAIoiiiCgiGKAmGKuAzg0AyoAAoACKAAgqAKCoAoAAMgAAAoAoAAioIKgCjJoNDOgKAAAAAAAAAAggAgCiANgAIACgAAAACJQBAAQBR/9k=",
  imageSize: {
    h: 2399,
    w: 1166
  },
  imageUrls: {
    small: {
      imageUrl_1x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-375.WEBP",
      imageUrl_2x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-1125.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-375.WEBP",
      imageUrl_2x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-1125.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-287.WEBP",
      imageUrl_2x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-579.WEBP",
      imageUrl_3x: "/optimizedImages/Circuit_Init_Bezel.fae44e65-opt-861.WEBP"
    }
  }
};

const circuitInProgressScreen: ResponsiveImageProps = {
  alt: "In progress screen: while in progress, the current minute is animated and bottom text tells the user how much time until the next period.",
  dropShadow: 2,
  blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADzAHYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAFxABAQEBAAAAAAAAAAAAAAAAAAEREv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0AEFQBVRQVUAVABKzVrNBKzVrNUAAdBBBoRQVUUVRAFZqs0C1m0tZtELWbVrNUNEAdVRYgsWJGoKoKCCpUErNarNUZrNarNBKy1UwRAwB1UWAsaiSNSCrIYsi4gylbxmwGKzXSxiwGKjdiYoxhjeGAxg3yAqyGLII1I1IkjcgpIuLIuIrOM2N4lgOdjNjpYlgjnhjeGAxi8tyLgOfI64A5YshjUVFjUSNQVYpFQRLGkoMWJjdQGMXFxcBJGsWRcBnBvAHmaiKqLG4zFgrUVDUFQ0BAAFRVFioaDQmgOACoqoIN6azporQzpoNImmiKus6aDWms6aDejGgMAKKagCmoag1prOmg1qamii6mppoLqampoNaM6A2gAAACAKAACAIqAiKgAAOgAACAKAgqAIoCI0mAiY1hgM4NYA0AAKAAIoiiiCgiGKAmGKuAzg0AyoAAoACKAAgqAKCoAoAAMgAAAoAoAAioIKgCjJoNDOgKAAAAAAAAAAggAgCiANgAIACgAAAACJQBAAQBR/9k=",
  imageSize: {
    h: 2399,
    w: 1166
  },
  imageUrls: {
    small: {
      imageUrl_1x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-375.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-1125.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-375.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-1125.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-287.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-579.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitActiveScreen.6664a7fa-opt-861.WEBP"
    }
  }
};

const circuitCompletedScreen: ResponsiveImageProps = {
  alt: "Circuit completed: Once completed, the user is offered the option to reset the timer, or finish and view their progress.",
  dropShadow: 2,
  blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCADzAHYDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAFxABAQEBAAAAAAAAAAAAAAAAAAEREv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0AEFQBVRQVUAVABKzVrNBKzVrNUAAdBBBoRQVUUVRAFZqs0C1m0tZtELWbVrNUNEAdVRYgsWJGoKoKCCpUErNarNUZrNarNBKy1UwRAwB1UWAsaiSNSCrIYsi4gylbxmwGKzXSxiwGKjdiYoxhjeGAxg3yAqyGLII1I1IkjcgpIuLIuIrOM2N4lgOdjNjpYlgjnhjeGAxi8tyLgOfI64A5YshjUVFjUSNQVYpFQRLGkoMWJjdQGMXFxcBJGsWRcBnBvAHmaiKqLG4zFgrUVDUFQ0BAAFRVFioaDQmgOACoqoIN6azporQzpoNImmiKus6aDWms6aDejGgMAKKagCmoag1prOmg1qamii6mppoLqampoNaM6A2gAAACAKAACAIqAiKgAAOgAACAKAgqAIoCI0mAiY1hgM4NYA0AAKAAIoiiiCgiGKAmGKuAzg0AyoAAoACKAAgqAKCoAoAAMgAAAoAoAAioIKgCjJoNDOgKAAAAAAAAAAggAgCiANgAIACgAAAACJQBAAQBR/9k=",
  imageSize: {
    h: 2399,
    w: 1166
  },
  imageUrls: {
    small: {
      imageUrl_1x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-375.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-1125.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-375.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-1125.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-287.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-579.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitFinishedScreen.a5e981bd-opt-861.WEBP"
    }
  }
};
const circuitFlowchart: ResponsiveImageProps = {
  alt: "High-level site flow of the Times.Pilot; showing different authentication states as it relates to user access.",
  dropShadow: 2,
  blurDataUrl: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAgAAAAYQEAmwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg5gEAAPAYAJ0BKmIBnAA+tVilT6ctp62hMgnZsBaJaW7gRkp16gWpvuFvBnes+SnYAIQKAaeu0zO+MyvIMPxCz0T12Yz3CHN4p+eHodSxLxHPmcBfP7wP9ONe5LuVGuwYASI+pr13cLrcD/qcSLdWBam709KHB2v6xDJTWTQjoi9qzsXnYE/p/cjBiLTDgnA+MJ9Iqr8ASq5WkAE9ObkDrBXpN0D/U+2cOBiN7rfC43MjZhM4aUNbDkIfVDgfJBj58MpFcL+LWepqj39uqwykVwv7tEAA/u8J7unK95jUq5ntEjBjwP751Nc5ekDLflHzXePLZUAkck8/2K8jqso77CV9gSwpOXmFryWxwl5p1UukNO4+kfALJHYb8C3nZwaiFbxrMqoJQQ4oS+R5u5Hu/N/iV5ctgYYR39ZMRPVz1VXg3ndyk5G2Sp1qh1syMNID1lLj0cx0zTfJWnpOqzNfByS5ynZqBaVjPioIrIzycgsRDXuZu+8L18mhiNRSgERvjWw5jivZJAqzFOvRh4vQRqWmE7z+IVDlKovAWxwE5H5IUY9yUcjYhiNZL+FEHq5DEJpKMjKFElUBw3+NguOskd4Yr4042GXKimmnwx2VOUgvICR3h6q7VKnv+zdDV56A0HfBhzkeSAAAAA==",
  imageSize: {
    h: 1542,
    w: 3498
  },
  imageUrls: {
    small: {
      imageUrl_1x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-1166.WEBP",
      imageUrl_2x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-2332.WEBP",
      imageUrl_3x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-3498.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-1166.WEBP",
      imageUrl_2x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-2332.WEBP",
      imageUrl_3x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-3498.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-1125.WEBP",
      imageUrl_2x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-2332.WEBP",
      imageUrl_3x: "/optimizedImages/circuitFlowChart.b9da6ee1-opt-3498.WEBP"
    }
  }
};

const circuitAltDesignOne: ResponsiveImageProps = {
  alt: "Alternative Matrix One",
  dropShadow: 2,
  blurDataUrl: "data:image/jpeg;base64,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",
  imageSize: {
    h: 2585,
    w: 1255
  },
  imageUrls: {
    small: {
      imageUrl_1x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-514.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-1166.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-287.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-579.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-861.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-257.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-514.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitAltOne.af1ebf79-opt-771.WEBP"
    }
  }
};
const circuitAltDesignTwo: ResponsiveImageProps = {
  alt: "Alternative Matrix Two",
  dropShadow: 2,
  blurDataUrl: "data:image/jpeg;base64,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",
  imageSize: {
    h: 2585,
    w: 1255
  },
  imageUrls: {
    small: {
      imageUrl_1x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-514.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-771.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-1166.WEBP"
    },
    medium: {
      imageUrl_1x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-287.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-579.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-861.WEBP"
    },
    large: {
      imageUrl_1x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-257.WEBP",
      imageUrl_2x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-514.WEBP",
      imageUrl_3x: "/optimizedImages/CircuitAltTwo.631de2e8-opt-771.WEBP"
    }
  }
};



export default function TimesPilot() {
  const { description, projectPage } = siteContent[1];
  const {
    headlineOne,
    headlineTwo,
    summaryHeadline,
    summaryBody,
    problemHeadline,
    problemBody,
    approachSectionTitle,
    approaches,
    design,
    role,
    tools,
    links,
    userResearchBody,
    userResearchHeadline
  } = projectPage;
  return (
    <>
      <div className="project_page-wrapper">
        <BackToAllWork />
        <ProjectNavbar />
        <ProjectHeadline
          topHead={headlineOne}
          bottomHead={headlineTwo}
          accentColor="#FABD8C"
          subHead={description}
        />

        <figure className="project_page-hero">
          <ResponsiveImage
            alt={heroImage.alt}
            blurDataUrl={heroImage.blurDataUrl}
            imageUrls={heroImage.imageUrls}
            imageSize={heroImage.imageSize}
          />
          {/* <ExportedImage
            src={heroImage}
            alt="Images of Circuit App splash screen, setup screen and in-progress screen."
            width={2585}
          /> */}
        </figure>

        <DivideLine className="hero_line " />
        <section className="project_page-summary">
          <ProjectTextBlock title={summaryHeadline} body={summaryBody} titleIsBold />
        </section>
        <section className="project_page-info-wrapper">
          <div className="project_page-info-tools">
            <ToolRoleTitle label="Tools:" />
            <ChipGroup toolList={tools} />
          </div>
          <div className="project_page-info-role">
            <ToolRoleTitle label="Role: " content={role} className="project_page-top_info-role" />
          </div>
          <div className="project_page-info-links">
            <ProjectLinks links={links} />
          </div>
        </section>
        <DivideLine className="mobile_divide_line post_summary" />
        <section className="project_page-problem">
          <ProjectTextBlock title={problemHeadline} body={`${problemBody}`} />
        </section>
        <DivideLine className="mobile_divide_line post_problem" />
        <section className="project_page-user_research">
          <ProjectTextBlock title={userResearchHeadline} body={userResearchBody} />
        </section>

        {/* Approach */}
        <Spacer amount={1.5} className="tablet_spacer" />
        <article className="circuit_project_page-approach">
          <h4>{approachSectionTitle}</h4>
          <Spacer />
          {/* Section One */}
          <section className="circuit_project_page-approach-section_one">
            <ProjectTextBlock title={approaches![0].headline} body={approaches![0].body} />
            <VideoPlayer videoSource="/video/circuit/circuitOne_1.mov" className="bezel" />
          </section>
          <Spacer amount={6} />
          {/* Section Two */}
          <section className="circuit_project_page-approach-section_two">
            <ProjectTextBlock title={approaches![1].headline} body={approaches![1].body} />
            <VideoPlayer videoSource="/video/circuit/circuitOne_1.mov" className="bezel" />
          </section>

          <Spacer amount={6} />

          <section className="circuit_project_page-approach-section_three">
            {/* Semantical Periods */}
            <figure className="semantic_illustration">
              <ProjectTextBlock title="" body="Semantically colored circles identify the current activity status (Each circle represents one minute)." />
              <CircuitPeriodGroup />
            </figure>
            <ProjectTextBlock title={approaches![2].headline} body={approaches![2].body} classL />
            {/* Section Three - One */}
            <h5 className="sequence_approach_heading one">Initial</h5>
            <ResponsiveImage
              alt={circuitInitialScreen.alt}
              blurDataUrl={circuitInitialScreen.blurDataUrl}
              imageSize={circuitInitialScreen.imageSize}
              imageUrls={circuitInitialScreen.imageUrls}
              className="image_one"
            />
            {/* <ExportedImage src={intuitiveFeedback} alt="dd" className="image_one" /> */}
            <ImageCaption
              body="Initial screen for a basic Pomodoro timer, consisting of 4 - 25 minute active and 5 - 1 minute rest periods."
              className="caption_one"
            />
            {/* Section Three - Two */}
            <h5 className="sequence_approach_heading two">In Progress…</h5>
            <ResponsiveImage
              alt={circuitInProgressScreen.alt}
              blurDataUrl={circuitInProgressScreen.blurDataUrl}
              imageSize={circuitInProgressScreen.imageSize}
              imageUrls={circuitInProgressScreen.imageUrls}
              className="image_two"
            />
            {/* <ExportedImage src={activeCircuit} alt="dd" className="image_two" /> */}
            <ImageCaption
              body="While in progress, the current minute is animated and bottom text tells the user how much time until the next period."
              className="caption_two"
            />
            {/* Section Three - Three */}
            <h5 className="sequence_approach_heading three">Completed</h5>
            <ResponsiveImage
              alt={circuitCompletedScreen.alt}
              blurDataUrl={circuitCompletedScreen.blurDataUrl}
              imageSize={circuitCompletedScreen.imageSize}
              imageUrls={circuitCompletedScreen.imageUrls}
              className="image_three"
            />
            {/* <ExportedImage src={finishedCircuit} alt="dd" className="image_three" /> */}
            <ImageCaption
              body="Once completed, the user is offered the option to reset the timer, or finish and view their progress."
              className="caption_three"
            />
          </section>
          {/* <Spacer amount={6} /> */}

        </article >

        <DivideLine className="full-width-line" />
        {/* Design Considerations */}
        <article className="circuit_project_page-design">
          <section className="circuit_project_page-design-considerations-wrapper">
            <ProjectTextBlock title={design?.designHeadline} body={[design!.designList[0], design!.designList[1]]} className="circuit_project_page-design-considerations_left" />
            <ProjectTextBlock title="" body={[design!.designList[2], design!.designList[3]]} className="circuit_project_page-design-considerations_right" />
          </section>
          <Spacer amount={2} />
          <section className="diagram_section">
            <h5 className="diagram_heading one">Circuit Picker Screen</h5>
            <MobileCircuitDiagram variant="one" className="one" />
            <Spacer amount={3} />
            <h5 className="diagram_heading two">Completed Session Recap Screen</h5>
            <MobileCircuitDiagram variant="two" className="two" />
            <Spacer amount={3} />
            <h5 className="diagram_heading three">Completed Session Detail Screen</h5>
            <MobileCircuitDiagram variant="three" className="three" />
            <MobileCircuitDiagram variant="four" className="four" />
          </section>
          <section className="circuit_project_page-design-typography_and_color">
            <div className="circuit_project_page-design-typography_and_color-type_wrapper">
              <h5 className="circuit_project_page-design-small_headline">{design!.typeHeadline}</h5>
              <div className="circuit_project_page-design-type_specimen_wrapper">
                <TypeSpecimen fontName="Barlow SemiBold" className="barlow-semibold" />
                <TypeSpecimen fontName="Barlow Regular" className="barlow-regular" />
              </div>
            </div>
            <div className="circuit_project_page-design-typography_and_color-color_wrapper">
              <h5 className="circuit_project_page-design-small_headline">{design!.colorHeadline}</h5>
              <ColorSwatchGroup swatches={design!.colorList} />
            </div>
          </section>
          <Spacer amount={2} className="spacer-post_color" />
        </article>

        <article className="circuit_project_page-site_flow">
          <ProjectTextBlock title={projectPage.siteFlow!.headline} body={projectPage.siteFlow!.body} />
          <Spacer amount={0.5} />
          <ResponsiveImage
            alt={circuitFlowchart.alt}
            blurDataUrl={circuitFlowchart.blurDataUrl}
            imageSize={circuitFlowchart.imageSize}
            imageUrls={circuitFlowchart.imageUrls}
            dropShadow={false}
          />
        </article>
        <DivideLine className="full-width-line" />
        <section className="circuit_project_page-approach circuit_alts">
          <h4 className="circuit_alts_headline">Matrix Design Alternatives</h4>
          {/* <ExportedImage src={altMatrixOne} alt="Alternative Matrix One" className="alt_one" /> */}
          <ResponsiveImage
            alt={circuitAltDesignOne.alt}
            blurDataUrl={circuitAltDesignOne.blurDataUrl}
            imageSize={circuitAltDesignOne.imageSize}
            imageUrls={circuitAltDesignOne.imageUrls}
            className="alt_one"
          />
          <ProjectTextBlock smallTitle title="Alternate Matrix One" body="In this iteration the rest periods are grouped together. Doing so presents the user with an alternative sectional representation, which augments the description via semantic color. From a development point of view, this may be a slightly more complex route to take as we're essentially treating time in 2 different ways: by minimal instance (minute dots) and by section (rest lines)." className="text_one" />

          {/* <ExportedImage src={altMatrixTwo} alt="Alternative Matrix Two" className="alt_two" /> */}
          <ResponsiveImage
            alt={circuitAltDesignTwo.alt}
            blurDataUrl={circuitAltDesignTwo.blurDataUrl}
            imageSize={circuitAltDesignTwo.imageSize}
            imageUrls={circuitAltDesignTwo.imageUrls}
            className="alt_two"
          />
          <ProjectTextBlock smallTitle title="Alternate Matrix Two" body="In this iteration the active and rest periods are treated the same. This allows us to treat all measurements of time the same. By bridging the dots we create cohesive areas that are easy to visually discern by color or density. Another issue for users is that this format may read too closely to text-placeholder graphics." className="text_two" />
        </section>

      </div >
      <ProjectFooter />
    </>
  );
};