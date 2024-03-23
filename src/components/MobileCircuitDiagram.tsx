import ExportedImage from "next-image-export-optimizer";
import circuitPicker from "../../public/images/circuit/CircuitPickerScreen.png";
import detailedResult from "../../public/images/circuit/CircuitDetailedResults.png";
import overviewResult from "../../public/images/circuit/CircuitOverviewResults.png";

export default function MobileCircuitDiagram({ variant, ...rest }: { variant: 'one' | 'two' | 'three' | 'four';[x: string]: any; }) {

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
          <ExportedImage src={circuitPicker} alt="circuit picker" />
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
          <ExportedImage src={overviewResult} alt="circuit picker" />
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
          <ExportedImage src={detailedResult} alt="circuit picker" />
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
            <ExportedImage src={circuitPicker} alt="circuit picker" />
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
            <ExportedImage src={overviewResult} alt="circuit picker" />
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
            <ExportedImage src={detailedResult} alt="circuit picker" />
          </div>
        </div>
      </figure>
    );
  }
}