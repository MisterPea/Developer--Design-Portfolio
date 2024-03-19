export default function Spacer({ amount = 1,
  ...rest }: { amount?: number;[x: string]: any; }) {
  return <div
    {...rest}
    className={`vertical_spacer ${rest.className || ''}`}
    style={{
      width: '100%',
      gridColumn: '1/-1',
      marginTop: `${1.88 * amount}rem`,
      marginBottom: `${1.88 * amount}rem`,
      backgroundColor: 'red'
    }}
  />;
}