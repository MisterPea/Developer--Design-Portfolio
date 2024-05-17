export default function RadioButton({ checked, label, onChange }: { checked: boolean; label: string; onChange: (e?: any) => void; }) {

  return (
    <div className="radio-wrapper" >
      <input type="radio" checked={checked} value={label} name="train-direction" onChange={onChange} />
      <label htmlFor={`${label}-radio`} onClick={() => onChange({ target: { value: label } })}>{label}</label>
    </div>
  );
}