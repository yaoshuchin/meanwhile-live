import { NextResponse } from 'next/server';
import { ANIMAL_CAMERAS } from '@/data/animals';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ camId: string }> }
) {
  const { camId } = await params;
  const cam = ANIMAL_CAMERAS.find((c) => c.id === camId);

  if (!cam) {
    return NextResponse.json({ error: 'Animal camera not found' }, { status: 404 });
  }

  // 1. Check if YOUTUBE_API_KEY is available
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey && cam.discovery?.query) {
    try {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=${encodeURIComponent(
        cam.discovery.query
      )}&key=${apiKey}&maxResults=1`;

      const ytRes = await fetch(searchUrl, { next: { revalidate: 3600 } });
      const ytData = await ytRes.json();

      if (ytData.items && ytData.items.length > 0) {
        return NextResponse.json({
          camId,
          videoId: ytData.items[0].id.videoId,
          title: ytData.items[0].snippet.title,
          source: 'youtube-api',
        });
      }
    } catch (e) {
      console.warn('Animal live YouTube API failed:', e);
    }
  }

  // 2. Fallback to upstream proxy
  try {
    const upstreamRes = await fetch(
      `https://animalia-live.vercel.app/api/live/${camId}`,
      {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        next: { revalidate: 1800 },
      }
    );
    if (upstreamRes.ok) {
      const data = await upstreamRes.json();
      if (data.videoId) {
        return NextResponse.json({
          camId,
          videoId: data.videoId,
          source: 'upstream-live',
        });
      }
    }
  } catch (e) {
    console.warn('Upstream animal live proxy failed:', e);
  }

  // 3. Fallback default
  return NextResponse.json({
    camId,
    videoId: cam.defaultVideoId || 'jfKfPfyJRdk',
    source: 'fallback',
  });
}
