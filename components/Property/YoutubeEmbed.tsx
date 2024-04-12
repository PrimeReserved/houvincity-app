import React from 'react'

function YoutubeEmbed() {
  return (
    <div>
      <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/P4eLCRqJ97s?si=ql8kficVRpn7k-11"
        title="YouTube video player"
        frameBorder="0" // Replace frameBorder with frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className='xl:w-[1110px] lg:w-[900px] md:w-[600px] w-[100%]  h-[620px] '
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default YoutubeEmbed
