import { useState } from "react";
import concrete from "/videos/concrete.mov";
import metal from "/videos/metal.mov";
import plastic from "/videos/plastic.mov";
import wood from "/videos/wood.mov";

const Videos = () => {
  const videos = [metal, concrete, wood, plastic];
  const [videoIndex, setVideoIndex] = useState(0);
  return (
    <div>
      <video
        key={videos[videoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setVideoIndex((currentIndex) => {
            if (currentIndex < videos.length - 1) {
              return currentIndex + 1;
            } else {
              return 0;
            }
          });
        }}
      >
        <source key={videos[videoIndex]} src={videos[videoIndex]} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videos;
