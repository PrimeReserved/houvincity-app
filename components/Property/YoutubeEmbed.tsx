import React from 'react';

interface YoutubeEmbedProps {
  source: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ source }) => {
  const getVideoId = (url: string): string => {
    if (!url) return '';

    // Handle YouTube Shorts
    if (url.includes('/shorts/')) {
      return url.split('/shorts/')[1]?.split('?')[0]?.split('&')[0] || '';
    }

    // Handle regular YouTube URLs
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
    );
    return match
      ? match[1]
      : url.replace(/[^a-zA-Z0-9_-]/g, '').substring(0, 11);
  };

  const videoId = getVideoId(source);

  if (!videoId) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="Property Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
