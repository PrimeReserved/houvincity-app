export function Video() {
    return (
      <video width="452" height="758" controls preload="none">
        <source src="https://www.youtube.com/watch?v=zlvTFThCXow" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }