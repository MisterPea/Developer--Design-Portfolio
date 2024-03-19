export default function VideoPlayer({ videoSource, ...rest }: { videoSource: string;[x: string]: any; }) {
  return (
    <figure
      {...rest}
      className={`project-figure video ${rest.className || ''}`}
    >
      <video autoPlay muted loop playsInline>
        <source src={videoSource} type="video/mp4" />
      </video>
    </figure>
  );
}