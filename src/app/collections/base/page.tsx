'use client';

import { useEffect, useState } from 'react';

import Item from '@/components/app/collections/shared/item';
import ItemSkeleton from '@/components/app/collections/shared/item.skeleton';

import { useSSR } from '@/lib/hooks';

async function getBase() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    next: { revalidate: 5 },
  });
  return res
    .json()
    .then((result) => result.filter((p: any) => p.albumId === 1))
    .then((result) => ({
      time: new Date().toISOString(),
      data: result,
    }));
}

export default function Page() {
  const [data, setData] = useState<any>(null);
  const { isServer } = useSSR();

  useEffect(() => {
    getBase().then((result) => setData(result));
  }, []);

  return (
    <div className="container grid grid-cols-3 mt-8">
      {isServer || !data
        ? new Array(24)
            .fill(null)
            .map(() => Math.floor(Math.random() * 2) + 1)
            .map((size: number, index) => <ItemSkeleton key={index} size={size as 1 | 2} />)
        : data.data.map((item: any) => <Item key={item.id} {...item} />)}
    </div>
  );
}
