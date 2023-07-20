'use client';

import * as Portal from '@radix-ui/react-portal';

import { useAppSelector } from '@/store';
import { SelectAuthModal } from '@/store/auth.slice';

import { useSSR } from '@/lib/hooks';

export function AuthorizationModal() {
  const isShow = useAppSelector(SelectAuthModal);
  const { isServer } = useSSR();
  if (isServer || !isShow) {
    return <></>;
  }
  return (
    <Portal.Root>
      <div className="absolute grid place-items-center top-0 left-0 right-0 h-[100vh]">
        <div className="m-auto">Привет</div>
      </div>
    </Portal.Root>
  );
}
