export default function Video() {
  return (
    <video
      width="100"
      height="auto"
      className="w-full h-full object-cover"
      poster="poster-video-index.png"
      preload="none"
      autoPlay
      playsInline
      loop
      muted
    >
      <source src="index-main-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
