import React from "react"
import bgVideo from "../dist/mp4/bg.mp4"

export function Video() {
  return (
    <video
      playsinline="playsinline"
      autoplay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  )
}
