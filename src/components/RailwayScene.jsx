import { useRef } from "react";
import "./RailwayScene.css";

function RailwayScene() {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.35;
    }
  };

  return (
    <div className="railway-scene">

      <video
        ref={videoRef}
        className="railway-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source
          src="/railway-video-web.mp4"
          type="video/mp4"
        />
      </video>

      <div className="video-overlay"></div>

    </div>
  );
}

export default RailwayScene;