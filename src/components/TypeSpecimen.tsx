export default function TypeSpecimen({ fontName, ...rest }: { fontName: string;[x: string]: any; }) {

  return (
    <div {...rest} className={`type_specimen-main_wrapper ${rest.className || ''}`}>
      <div className='type_specimen-left'>
        <div className="type_specimen-large_Aa">Aa</div>
      </div>
      <div className='type_specimen-right'>
        <div className="type_specimen-font_name">{fontName}</div>
        <div className="type_specimen-saying">A big fjord vexes a quick waltzing nymph</div>
      </div>
    </div>
  );
}