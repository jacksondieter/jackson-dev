import React from "react"
import bgVideo from "../dist/mp4/time.mp4"

const Header = () => (
  <header>
    <video
      id="video_background"
      preload="auto"
      autoPlay={true}
      loop="loop"
      muted
      volume={0}
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
    <div id="image_background" />
    <div className="cover black" data-color="black" />
  </header>
)

export default Header
