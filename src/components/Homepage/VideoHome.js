import React from "react";

const VideoHome = ({ link }) => {
  return (
    <div>
      <iframe
        src={link}
        frameborder="0"
        className="w-full h-[80vh]"
        width="100%"
        height="80vh"
      ></iframe>
    </div>
  );
};

export default VideoHome;
