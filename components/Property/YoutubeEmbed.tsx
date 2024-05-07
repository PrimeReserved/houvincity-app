

function YoutubeEmbed({ source }:any) {
  if (!source) {
    // Handle case where source is undefined or empty
    return <div>Invalid YouTube video source</div>;
  }

  const youtubeId = source.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div>
      <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className='xl:w-[1110px] lg:w-[900px] md:w-[600px] w-[100%]  h-[620px] '
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default YoutubeEmbed
