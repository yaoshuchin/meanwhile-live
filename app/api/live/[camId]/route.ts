import { NextRequest, NextResponse } from 'next/server';
import { CAMERAS } from '@/data/cameras';

const MUSIC_STREAMS: Record<string, string> = {
  'music-lofi': 'jfKfPfyJRdk', // Lofi Girl beats
  'music-jazz': 'Dx5qF6327n8', // Relaxing Jazz radio
  'music-classical': '4xDzrJKXOOY', // Classical radio
};

export async function GET(
  request: NextRequest,
  { params }: { params: { camId: string } }
) {
  const { camId } = params;

  if (MUSIC_STREAMS[camId]) {
    return NextResponse.json({ camId, videoId: MUSIC_STREAMS[camId] });
  }

  const cam = CAMERAS.find((c) => c.id === camId);
  if (!cam) {
    return NextResponse.json({ error: 'Camera not found' }, { status: 404 });
  }

  // Try checking upstream meanwhile-cam first if available, else fallback to defaultVideoId
  try {
    const upstreamRes = await fetch(`https://meanwhile-cam.vercel.app/api/live/${camId}`, {
      next: { revalidate: 600 }
    });
    if (upstreamRes.ok) {
      const data = await upstreamRes.json();
      if (data.videoId) {
        return NextResponse.json({ camId, videoId: data.videoId });
      }
    }
  } catch {
    // Fall back to local default
  }

  return NextResponse.json({ camId, videoId: cam.defaultVideoId });
}
