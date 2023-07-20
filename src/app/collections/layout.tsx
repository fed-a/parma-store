import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui';

import { ROUTES } from '@/lib/routes';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-slate-100 ">
        <div className="container grid grid-cols-3">
          <Link href={ROUTES.collections.children.sport.path}>
            <Button className="block w-full h-24 hover:bg-slate-200" variant="secondary">
              Спортивная
            </Button>
          </Link>
          <Link href={ROUTES.collections.children.junior.path}>
            <Button className="block w-full h-24 hover:bg-slate-200" variant="secondary">
              Junior
            </Button>
          </Link>
          <Link href={ROUTES.collections.children.base.path}>
            <Button className="block w-full h-24 hover:bg-slate-200" variant="secondary">
              Базовая
            </Button>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
