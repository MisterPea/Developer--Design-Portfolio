import * as React from "react";

export default function Chip({ label }: { label: string; }) {
  return (
    <div className='tools-chip'>
      <p>{label}</p>
    </div>
  );
}