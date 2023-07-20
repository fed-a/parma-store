import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/lib/routes';

interface ItemProps {
  id: number;
  url: string;
  title: string;
}

export default function Item({ id, url, title }: ItemProps) {
  return (
    <Link href={`${ROUTES.clothes.path}/${id}`}>
      <div className="flex flex-col gap-4 p-6 m-4 bg-slate-100 outline-none transition-all outline-offset-0 outline-slate-100 hover:outline-[1rem] cursor-pointer">
        <Image src={url} alt={title} width={400} height={400} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
