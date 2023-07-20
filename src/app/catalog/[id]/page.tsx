import Image from 'next/image';
import React from 'react';

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

export default async function Page({ params }: any) {
  const data = await getItem(params.id);
  return (
    <div className="container flex flex-col gap-4 mt-8">
      <Image src={data.data.url} width={400} height={400} alt={data.data.title} />
      <h1>{data.data.title}</h1>
      <p>{JSON.stringify(data.data)}</p>
    </div>
  );
}
