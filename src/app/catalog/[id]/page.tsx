import { Metadata } from 'next';
import React from 'react';

import { ItemCard } from '@/components/app/catalog/item-card';

async function getItem(id: string) {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    next: { revalidate: 10 },
  });
  return res
    .json()
    .then((result) => result.filter((p: any) => p.id.toString() === id))
    .then((result) => ({
      time: new Date().toISOString(),
      data: result[0],
    }));
}

async function getBase() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  return res.json();
}

export async function generateStaticParams() {
  const items = await getBase();

  return items.map((item: any) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const data = await getItem(params.id);
  return {
    title: data.data.title,
  };
}

export default async function Page({ params }: any) {
  const data = await getItem(params.id);
  return <ItemCard data={data} />;
}
