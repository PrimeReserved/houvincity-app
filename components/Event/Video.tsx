import { Livestream } from '@/typings';

interface VideoProps {
  livestream?: Livestream;
}

export function Video({ livestream }: VideoProps) {
  if (!livestream || !livestream.videoUrl) {
    return (
      <div className="w-full px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No Active Livestream
          </h2>
          <p className="text-gray-600">
            There is currently no active livestream. Please check back later.
          </p>
        </div>
      </div>
    );
  }

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

  const videoId = getVideoId(livestream.videoUrl);

  if (!videoId) {
    return (
      <div className="w-full px-4 py-8">
        <div className="bg-red-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            Invalid Video URL
          </h2>
          <p className="text-red-600">
            Please provide a valid YouTube URL in Sanity Studio.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full px-4 mb-12">
      {livestream.description && (
        <div className="mb-6 text-center">
          <p className="text-gray-600 text-lg">{livestream.description}</p>
        </div>
      )}
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="Livestream Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}