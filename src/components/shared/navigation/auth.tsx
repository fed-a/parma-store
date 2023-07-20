'use client';

import React, { useCallback } from 'react';

import { useAppDispatch } from '@/store';
import { toggleAuthModal } from '@/store/auth.slice';

import { Button } from '@/components/ui';

export default function Profile() {
  const dispatch = useAppDispatch();
  const onClick = useCallback(() => {
    dispatch(toggleAuthModal());
  }, [dispatch]);
  return (
    <Button variant="ghost" onClick={onClick}>
      Войти
    </Button>
  );
}
