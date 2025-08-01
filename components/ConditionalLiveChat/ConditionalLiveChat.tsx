'use client';

import { usePathname } from 'next/navigation';
import LiveChat from '@/components/LiveChat/LiveChat';

export default function ConditionalLiveChat() {
  const pathname = usePathname();

  // Don't show LiveChat on studio routes
  const isStudioRoute = pathname.startsWith('/studio');

  if (isStudioRoute) {
    return null;
  }

  return <LiveChat />;
}
