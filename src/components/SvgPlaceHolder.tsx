// const greyZero = "rgb(210,210,210)";
const greyZero = "#dcdcdc";//"rgb(213,213,213)";
const greyZeroOne = "#e1e1e1";//"rgb(218,218,218)";
const greyOne = "#e6e6e6";//"rgb(225,225,225)";
const greyTwo = "#ebebeb";//"rgb(230,230,230)";
const greyThree = "#f0f0f0";//"rgb(237,237,237)";




function GradientDef({ localId }: { localId: string; }) {
  return <defs>
    <linearGradient id={`${localId}`} x1="-100%" y1="0%" x2="100%" y2="0%">
      <stop offset="25%" stop-color={greyOne}>
        <animate attributeName="offset" values="-0.25;1.25" dur="800ms" repeatCount="indefinite" />
      </stop>
      <stop offset="50%" stop-color={greyTwo}>
        <animate attributeName="offset" values="0;1.5" dur="800ms" repeatCount="indefinite" />
      </stop>
      <stop offset="75%" stop-color={greyOne}>
        <animate attributeName="offset" values="0.25;1.75" dur="800ms" repeatCount="indefinite" />
      </stop>
    </linearGradient>
  </defs>;
}

function createId(): string {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 9);
}

const Placeholder = {
  TimesPilotTwoUp: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 361.09">
      <GradientDef localId={LOCAL_ID} />
      {/* Background Group */}
      <g fill={greyThree} strokeWidth="0" data-name="Whole">
        <rect width="468.76" height="358.16" x="1.69" y="1.3" rx="19.75" ry="19.75"></rect>
        <rect width="118.47" height="244.82" x="480.58" y="1.3" rx="19.75" ry="19.75"></rect>
      </g>
      {/* Lil` Boxes */}
      <mask id="left-mask">
        <g fill="white" strokeWidth="0" data-name="Content">
          <rect width="106.34" height="72.54" x="16.99" y="64.13" rx="7.1" ry="7.1"></rect>
          <rect width="218.83" height="72.54" x="125.64" y="64.13" rx="7.1" ry="7.1"></rect>
          <rect width="106.07" height="72.54" x="346.79" y="64.13" rx="7.1" ry="7.1"></rect>
          <rect width="108.26" height="61.63" x="486.3" y="31.13" rx="7.1" ry="7.1" ></rect>
          <rect width="108.26" height="61.63" x="486.3" y="94.98" rx="7.1" ry="7.1"></rect>
          <path d="M493.4 158.82h94.06c3.92 0 7.1 3.18 7.1 7.1v38.25H486.3v-38.25c0-3.92 3.18-7.1 7.1-7.1z"></path>
          <rect width="106.34" height="72.54" x="16.99" y="138.68" rx="7.1" ry="7.1"></rect>
          <rect width="108.26" height="72.54" x="125.64" y="138.68" rx="7.1" ry="7.1"></rect>
          <rect width="108.26" height="72.54" x="236.21" y="138.68" rx="7.1" ry="7.1"></rect>
          <rect width="106.07" height="72.54" x="346.79" y="138.68" rx="7.1" ry="7.1"></rect>
          <rect width="106.34" height="72.54" x="16.99" y="213.24" rx="7.1" ry="7.1"></rect>
          <rect width="108.26" height="72.54" x="125.64" y="213.24" rx="7.1" ry="7.1"></rect>
          <rect width="216.64" height="72.54" x="236.21" y="213.24" rx="7.1" ry="7.1"></rect>
          <path d="M233.9 346.46H23.55c-3.62 0-6.62-2.94-6.62-6.56l.05-45c0-3.92 3.18-7.1 7.1-7.1H226.8c3.92 0 7.1 3.18 7.1 7.1v51.57zM344.41 346.46H236.15l.06-51.57c0-3.92 3.18-7.1 7.1-7.1h94.06c3.92 0 7.1 3.18 7.1 7.1l-.06 51.57zM447.46 346.46H346.73l.06-51.57c0-3.92 3.18-7.1 7.1-7.1h91.88c3.92 0 7.1 3.18 7.1 7.1l-.05 46.22c0 2.95-2.4 5.34-5.35 5.34z"></path>
        </g>
      </mask>
      <rect width="36.35" height="11.03" x="521.75" y="7.63" fill={greyZero} strokeWidth="0" data-name="Phone Top" rx="5.51" ry="5.51"></rect>
      <g fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Content Darker">
        <rect width="435.92" height="20.75" x="16.94" y="16.94" rx="5.61" ry="5.61"></rect>
        <rect width="435.92" height="20.75" x="16.94" y="40.46" rx="5.61" ry="5.61"></rect>
      </g>
      {/* This is a flat that is masked by the lil boxes */}
      <g mask="url(#left-mask)" fill={`url(#${LOCAL_ID})`}>
        <rect width="468.76" height="358.16" x="1.69" y="1.3" rx="19.75" ry="19.75"></rect>
        <rect width="118.47" height="244.82" x="480.58" y="1.3" rx="19.75" ry="19.75"></rect>
      </g>
    </svg>;
  },
  TimesPilotOneUp: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.76 358.16">
      <GradientDef localId={LOCAL_ID} />;
      <g fill={greyThree} strokeWidth="0" data-name="Whole">
        <rect width="468.76" height="358.16" rx="19.75" ry="19.75" />
      </g>
      <g fill={greyZero} strokeWidth="0" data-name="Interior">
        <rect x="12.38" y="13.07" width="441.86" height="332.09" rx="8.34" ry="8.34" />
      </g>
      <mask id="times-pilot-one-up-mask">
        <g fill="#fff" data-name="Mask">
          <rect x="15.3" y="62.83" width="106.34" height="72.54" rx="7.1" ry="7.1" />
          <rect x="123.96" y="62.83" width="218.83" height="72.54" rx="7.1" ry="7.1" />
          <rect x="345.1" y="62.83" width="106.07" height="72.54" rx="7.1" ry="7.1" />
          <rect x="15.3" y="137.39" width="106.34" height="72.54" rx="7.1" ry="7.1" />
          <rect x="123.96" y="137.39" width="108.26" height="72.54" rx="7.1" ry="7.1" />
          <rect x="234.53" y="137.39" width="108.26" height="72.54" rx="7.1" ry="7.1" />
          <rect x="345.1" y="137.39" width="106.07" height="72.54" rx="7.1" ry="7.1" />
          <rect x="15.3" y="211.94" width="106.34" height="72.54" rx="7.1" ry="7.1" />
          <rect x="123.96" y="211.94" width="108.26" height="72.54" rx="7.1" ry="7.1" />
          <rect x="234.53" y="211.94" width="216.64" height="72.54" rx="7.1" ry="7.1" />
          <path d="M232.22,345.16H21.87c-3.62,0-6.62-2.94-6.62-6.56l.05-45c0-3.92,3.18-7.1,7.1-7.1h202.72c3.92,0,7.1,3.18,7.1,7.1v51.57Z" />
          <path d="M342.73,345.16h-108.26l.06-51.57c0-3.92,3.18-7.1,7.1-7.1h94.06c3.92,0,7.1,3.18,7.1,7.1l-.06,51.57Z" />
          <path d="M445.77,345.16h-100.73l.06-51.57c0-3.92,3.18-7.1,7.1-7.1h91.88c3.92,0,7.1,3.18,7.1,7.1l-.05,46.22c0,2.95-2.4,5.34-5.35,5.34Z" />
          <rect x="15.25" y="15.65" width="435.92" height="20.75" rx="5.61" ry="5.61" fill="grey" />
          <rect x="15.25" y="39.17" width="435.92" height="20.75" rx="5.61" ry="5.61" fill="grey" />
        </g>
      </mask>
      <g mask="url(#times-pilot-one-up-mask)" fill={`url(#${LOCAL_ID})`} data-name="Gradient">
        <rect x="7.38" y="9.2" width="451.48" height="342.22" />
      </g>
    </svg>;
  },
  SelectionPick: function () {
    const LOCAL_ID = createId();
    return < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 324.9" >
      <GradientDef localId={LOCAL_ID} />
      <mask id="section-pick-mask">
        <g strokeWidth="0" fill="white" data-name="Main Group">
          <rect width="204.79" height="19.83" x="43.12" y="18.2" rx="9.92" ry="9.92" ></rect>
          <rect width="344.04" height="19.83" x="43.12" y="56.24" rx="9.92" ry="9.92" ></rect>
          <rect width="419.56" height="29.92" x="43.12" y="90.24" rx="9.92" ry="9.92" ></rect>
          <rect width="419.56" height="29.92" x="43.12" y="127.08" rx="9.92" ry="9.92" ></rect>
          <rect width="419.56" height="29.92" x="43.12" y="163.92" rx="9.92" ry="9.92" ></rect>
          <rect width="419.56" height="29.92" x="43.12" y="200.76" rx="9.92" ry="9.92" ></rect>
          <rect width="419.56" height="29.92" x="43.12" y="237.6" rx="9.92" ry="9.92" ></rect>
          <rect width="419.56" height="29.92" x="43.12" y="274.43" rx="9.92" ry="9.92" ></rect>
          <rect width="119.77" height="19.83" x="342.91" y="18.2" rx="9.92" ry="9.92" ></rect>
        </g>
      </mask>
      <path mask="url(#section-pick-mask)" fill={`url(#${LOCAL_ID})`} strokeWidth="0" d="M0 1.01H505V324.90999999999997H0z" data-name="Gradient"></path>
    </svg >;
  },
  TimesPilotFlowchart: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 325">
      <GradientDef localId={LOCAL_ID} />
      <mask id="times-pilot-flowchart" >
        <g data-name="Main" fill="white" strokeWidth="0">
          <rect x="15" y="20" width="89" height="159" rx="6.86" ry="6.86" />
          <rect x="115" y="20" width="731" height="22" rx="9.37" ry="9.37" />
          <rect x="367" y="45" width="449" height="70" rx="10.39" ry="10.39" />
          <rect x="649" y="128" width="195" height="84" rx="9.66" ry="9.66" />
          <rect x="109" y="151" width="149" height="153" rx="10.42" ry="10.42" />
          <rect x="267" y="243" width="397" height="61" rx="10.65" ry="10.65" />
        </g>
      </mask>
      <g mask="url(#times-pilot-flowchart)" fill={`url(#${LOCAL_ID})`} data-name="Gradient">
        <rect x="9" y="10" width="841" height="301" strokeWidth="0" />
      </g>
    </svg>;
  },
  TimesPilotPhone: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365.36 758.22">
      <GradientDef localId={LOCAL_ID} />
      <g data-name="Whole Back">
        <rect width="365.36" height="758.22" rx="51.39" ry="51.39" fill={greyThree} strokeWidth="0" />
      </g>
      <g data-name="Notch Back">
        <path d="M313.29,13.68h-65.35v7.59c0,11.49-9.4,20.8-21,20.8h-88c-11.6,0-21-9.31-21-20.8v-7.59H53.59c-22.17,0-40.15,17.81-40.15,39.77v651.19c0,21.97,17.98,39.77,40.15,39.77h259.7c22.17,0,40.15-17.81,40.15-39.77V53.45c0-21.97-17.98-39.77-40.15-39.77Z" fill={greyOne} strokeWidth="0" />
      </g>
      <g data-name="Small Back">
        <rect x="13.44" y="53.09" width="340" height="650.79" rx="5.12" ry="5.12" fill={greyZeroOne} strokeWidth="0" />
      </g>
      <mask id="times-pilot-phone">
        <g fill="white" strokeWidth="0" data-name="Mask">
          <rect x="55.44" y="150.41" width="256.69" height="23.02" rx="11.51" ry="11.51" />
          <rect x="55.44" y="587.01" width="256.69" height="23.02" rx="11.51" ry="11.51" />
          <rect x="121.03" y="181.64" width="125.52" height="23.02" rx="11.51" ry="11.51" />
          <rect x="121.03" y="548.33" width="125.52" height="23.02" rx="11.51" ry="11.51" />
          <rect x="35.02" y="242.64" width="294.06" height="34.94" rx="11.51" ry="11.51" />
          <rect x="35.02" y="303.64" width="294.06" height="34.94" rx="11.51" ry="11.51" />
          <rect x="35.02" y="368.75" width="294.06" height="34.94" rx="11.51" ry="11.51" />
          <rect x="35.02" y="491.44" width="294.06" height="51.95" rx="11.51" ry="11.51" />
        </g>
      </mask>
      <g mask="url(#times-pilot-phone)" fill={`url(#${LOCAL_ID})`} data-name="Gradient">
        <rect width="365.36" height="758.22" rx="51.39" ry="51.39" strokeWidth="0" />
      </g>
    </svg>;
  },
  CircuitHero: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.05 360.68">
      <GradientDef localId={LOCAL_ID} />
      <g fill={greyZero} stroke={greyOne} strokeMiterlimit="10" strokeWidth="4" data-name="Whole">
        <rect x="5.51" y="3.17" width="164.85" height="353.07" rx="26.06" ry="26.06" />
        <rect x="211.59" y="3.17" width="164.87" height="353.07" rx="26.06" ry="26.06" />
        <rect x="415.53" y="3.17" width="167.8" height="353.07" rx="26.06" ry="26.06" />
      </g>
      <g mask="url(#circuit-hero-mask)" fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Gradient">
        <rect x="51.91" y="30.23" width="521.86" height="303.89" />
      </g>
      <mask id="circuit-hero-mask">
        <g data-name="Mask" fill="#fff" strokeWidth="0">
          <circle cx="294.03" cy="132.19" r="41.41" />
          <circle cx="87.94" cy="171.44" r="11.07" />
          <circle cx="294.03" cy="43.32" r="7.82" />
          <rect x="225.66" y="215.02" width="136.73" height="18.48" rx="9.24" ry="9.24" />
          <path d="M558.55,56.25h-118.25c-5.1,0-9.24,4.14-9.24,9.24v191.1c0,5.1,4.14,9.24,9.24,9.24h35.83v12.23c0,5.1,4.14,9.24,9.24,9.24h28.13c5.1,0,9.24-4.14,9.24-9.24v-12.23h35.83c5.1,0,9.24-4.14,9.24-9.24V65.49c0-5.1-4.14-9.24-9.24-9.24Z" />
          <rect x="271.2" y="186.87" width="45.67" height="10" rx="5" ry="5" />
          <rect x="60.56" y="186.87" width="54.76" height="15" rx="7.5" ry="7.5" />
          <rect x="271.2" y="298.17" width="45.67" height="25.3" rx="12.65" ry="12.65" />
          <rect x="476.59" y="298.17" width="45.67" height="25.3" rx="12.65" ry="12.65" />
          <rect x="225.66" y="256.59" width="136.73" height="18.48" rx="9.24" ry="9.24" />
        </g>
      </mask>
      <g fill={greyZero} strokeWidth="0" data-name="Phone Top">
        <rect x="62.72" y="10.81" width="49.68" height="14.43" rx="7.21" ry="7.21" />
        <rect x="269.68" y="10.81" width="49.68" height="14.43" rx="7.21" ry="7.21" />
        <rect x="474.79" y="10.81" width="49.68" height="14.43" rx="7.21" ry="7.21" />
      </g>
    </svg>;
  },
  CircuitSingle: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.5 361.09">
      <GradientDef localId={LOCAL_ID} />
      <g fill={greyZero} stroke={greyOne} strokeMiterlimit="10" strokeWidth="4" data-name="Whole">
        <rect x="2.56" y="4.01" width="167.8" height="353.07" rx="26.06" ry="26.06" />
      </g>
      <g fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Mask">
        <path d="M145.59,57.09H27.33c-5.1,0-9.24,4.14-9.24,9.24v191.1c0,5.1,4.14,9.24,9.24,9.24h35.83v12.23c0,5.1,4.14,9.24,9.24,9.24h28.13c5.1,0,9.24-4.14,9.24-9.24v-12.23h35.83c5.1,0,9.24-4.14,9.24-9.24V66.33c0-5.1-4.14-9.24-9.24-9.24Z" />
        <rect x="18.09" y="299" width="136.73" height="25.3" rx="12.65" ry="12.65" />
      </g>
    </svg>;
  },
  CircuitDiagramOne: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.5 363.09">
      <GradientDef localId={LOCAL_ID} />
      <g fill={greyZero} stroke={greyOne} strokeMiterlimit="10" strokeWidth="4" data-name="Whole">
        <rect x="2.36" y="2.55" width="170.4" height="358.54" rx="26.06" ry="26.06" />
      </g>
      <g fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Mask">
        <rect x="18.13" y="261.03" width="138.85" height="18.28" rx="9" ry="9" />
        <rect x="18.13" y="216.95" width="138.85" height="18.28" rx="9" ry="9" />
        <rect x="63.01" y="302.65" width="49.09" height="25" rx="12.31" ry="12.31" />
        <rect x="18.13" y="189.2" width="138.85" height="9.14" rx="4.5" ry="4.5" />
        <rect x="56.58" y="354.49" width="61.94" height="3.05" rx="1.5" ry="1.5" />
        <circle cx="87.56" cy="134.52" r="41.21" />
        <circle cx="87.56" cy="45.46" r="10.66" />
      </g>
      <g data-name="Phone Top" fill={greyOne} strokeWidth="0">
        <rect x="60.78" y="10.73" width="52.85" height="15.25" rx="7.63" ry="7.63" />
      </g>
    </svg>;
  },
  CircuitDiagramTwo: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.5 362.54">
      <GradientDef localId={LOCAL_ID} />
      <g fill={greyZero} stroke={greyOne} strokeMiterlimit="10" strokeWidth="4" data-name="Whole">
        <rect x="2.36" y="2.55" width="170.4" height="358.54" rx="26.06" ry="26.06" />
      </g>
      <g fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Mask">
        <rect x="17.77" y="92.42" width="138.85" height="18.28" rx="9" ry="9" />
        <rect x="17.77" y="115.26" width="138.85" height="26.79" rx="13.39" ry="13.39" />
        <rect x="46.2" y="213.68" width="82.01" height="25" rx="12.5" ry="12.5" />
        <rect x="17.77" y="158.31" width="138.85" height="9.14" rx="4.5" ry="4.5" />
        <rect x="46.2" y="246.73" width="82.01" height="9.14" rx="4.5" ry="4.5" />
        <rect x="56.23" y="353.94" width="61.94" height="3.05" rx="1.5" ry="1.5" />
      </g>
      <g data-name="Phone Top" fill={greyOne} strokeWidth="0">
        <rect x="60.78" y="10.73" width="52.85" height="15.25" rx="7.63" ry="7.63" />
      </g>
    </svg>;
  },
  CircuitDiagramThree: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.91 362.54">
      <GradientDef localId={LOCAL_ID} />
      <g fill={greyZero} stroke={greyOne} strokeMiterlimit="10" strokeWidth="4" data-name="Whole">
        <rect x="2.36" y="2.55" width="170.4" height="358.54" rx="26.06" ry="26.06" />
      </g>
      <g fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Mask">
        <rect x="17.96" y="83.28" width="138.85" height="18.28" rx="9" ry="9" />
        <rect x="17.96" y="43.23" width="138.85" height="26.79" rx="13.39" ry="13.39" />
        <rect x="46.38" y="300.96" width="82.01" height="25" rx="12.5" ry="12.5" />
        <rect x="18.22" y="117.09" width="138.85" height="168.34" rx="4.5" ry="4.5" />
        <rect x="56.41" y="353.94" width="61.94" height="3.05" rx="1.5" ry="1.5" />
      </g>
      <g data-name="Phone Top" fill={greyOne} strokeWidth="0">
        <rect x="60.78" y="10.73" width="52.85" height="15.25" rx="7.63" ry="7.63" />
      </g>
    </svg>;
  },
  CircuitAlt: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.43 362.54">
      <GradientDef localId={LOCAL_ID} />
      <g fill={greyZero} stroke={greyOne} strokeMiterlimit="10" strokeWidth="4" data-name="Whole">
        <rect x="2.36" y="2.55" width="170.4" height="358.54" rx="26.06" ry="26.06" />
      </g>
      <g fill={`url(#${LOCAL_ID})`} strokeWidth="0" data-name="Mask">
        <rect x="21.87" y="32.87" width="40.65" height="11" rx="5.5" ry="5.5" />
        <rect x="46.23" y="303.27" width="82.01" height="25" rx="12.5" ry="12.5" />
        <rect x="20.15" y="52.49" width="134.15" height="227.98" rx="4.5" ry="4.5" />
        <rect x="56.26" y="353.94" width="61.94" height="3.05" rx="1.5" ry="1.5" />
      </g>
      <g data-name="Phone Top" fill={greyOne} strokeWidth="0">
        <rect x="60.78" y="10.73" width="52.85" height="15.25" rx="7.63" ry="7.63" />
      </g>
    </svg>;
  },
  CircuitFlowchart: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1369.29 603.61">
      <GradientDef localId={LOCAL_ID} />
      <mask id="circuit-flowchart">
        <g fill="#ffffff" data-name="Mask">
          <rect x="22.39" y="7.86" width="127.93" height="111.42" rx="14.74" ry="14.74" />
          <rect x="195.71" y="112.06" width="152.97" height="217.85" rx="14.74" ry="14.74" />
          <path d="M393.07,436.38h227.4c8.14,0,14.74,6.6,14.74,14.74v102.37c0,8.14,6.6,14.74,14.74,14.74h200.45c8.14,0,14.74-6.6,14.74-14.74v-102.37c0-8.14,6.6-14.74,14.74-14.74h19.26c8.14,0,14.74-6.6,14.74-14.74v-160.93c0-8.14-6.6-14.74-14.74-14.74h-506.09c-8.14,0-14.74,6.6-14.74,14.74v160.93c0,8.14,6.6,14.74,14.74,14.74Z" />
          <path d="M927.48,260.7v160.93c0,8.14,6.6,14.74,14.74,14.74h187.65c8.14,0,14.74,6.6,14.74,14.74v102.37c0,8.14,6.6,14.74,14.74,14.74h171.05c8.14,0,14.74-6.6,14.74-14.74v-292.79c0-8.14-6.6-14.74-14.74-14.74h-388.18c-8.14,0-14.74,6.6-14.74,14.74Z" />
          <rect x="195.71" y="16.36" width="1161.79" height="29.49" rx="14.74" ry="14.74" />
        </g>
      </mask>
      <g fill={`url(#${LOCAL_ID})`} mask="url(#circuit-flowchart)" data-name="Gradient">
        <rect x="13.11" width="1352.89" height="587.67" />
      </g>
    </svg>;
  },
  D3Hero: function () {
    const LOCAL_ID = createId();
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1002.42 768">
      <GradientDef localId={LOCAL_ID} />
      <g data-name="Main">
        <g>
          <path d="M42.65,14.83h916.56c15.08,0,27.33,12.25,27.33,27.33v683.68c0,15.08-12.24,27.33-27.33,27.33H42.65c-15.08,0-27.33-12.25-27.33-27.33V42.16c0-15.08,12.25-27.33,27.33-27.33Z" fill={greyZero} strokeWidth="0" />
          <path d="M959.21,26.83c8.45,0,15.33,6.88,15.33,15.33v683.68c0,8.45-6.88,15.33-15.33,15.33H42.65c-8.45,0-15.33-6.88-15.33-15.33V42.16c0-8.45,6.88-15.33,15.33-15.33h916.56M959.21,2.83H42.65C20.93,2.83,3.33,20.44,3.33,42.16v683.68c0,21.72,17.61,39.33,39.33,39.33h916.56c21.72,0,39.33-17.61,39.33-39.33V42.16c0-21.72-17.61-39.33-39.33-39.33h0Z" fill={greyOne} strokeWidth="0" />
        </g>
      </g>
      <mask id="d3-hero-mask">
        <g data-name="Mask" fill="#fff">
          <rect x="125.82" y="148.97" width="750.22" height="438.55" rx="13.09" ry="13.09" />
          <rect x="125.92" y="78.47" width="434" height="54.66" rx="12.28" ry="12.28" />
          <rect x="178.07" y="616.48" width="484.75" height="91.74" rx="11.04" ry="11.04" />
        </g>
      </mask>
      <g fill={`url(#${LOCAL_ID})`} mask="url(#d3-hero-mask)" data-name="Gradient">
        <rect x="108.78" y="63.73" width="813.99" height="650.67" />
      </g>
    </svg>;
  }
};

export default Placeholder;


