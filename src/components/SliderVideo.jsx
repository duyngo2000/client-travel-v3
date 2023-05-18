import React from "react"
import video from "../video/video8k.mp4"
import styled from "styled-components"
import Filter from "../pages/Filter"

const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
const SliderVideo = () => {
  return (
    <div>
      <Video
        autoplay
        autoPlay
        muted
        loop
        src={video}
        style={{ position: "relative" }}
      >
        <Filter style={{ position: "absolute", top: "60px", zIndex: "999" }} />
      </Video>
    </div>
  )
}

export default SliderVideo
