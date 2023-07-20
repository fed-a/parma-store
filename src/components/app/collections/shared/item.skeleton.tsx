import React from 'react';

import { Skeleton } from '@/components/ui';

import { cn } from '@/lib/utils';

interface ItemSkeletonProps {
  size: 1 | 2;
}

export default function ItemSkeleton({ size }: ItemSkeletonProps) {
  return (
    <div className="flex flex-col gap-4 m-8" suppressHydrationWarning>
      <Skeleton className="w-[25rem] h-[25rem] rounded-md" />
      <Skeleton
        suppressHydrationWarning
        className={cn('h-[1rem] rounded-md', {
          'w-[18rem]': size === 1,
          'w-[25rem]': size === 2,
        })}
      />
    </div>
  );
}
