'use client';

import Image from 'next/image';
import React, { useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import { addCart, removeCart, SelectCart } from '@/store/cart.slice';

import { Button } from '@/components/ui';

export function ItemCard({ data }: { data: any }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(SelectCart);

  const onAdd = useCallback(() => {
    dispatch(addCart(data.data.id));
  }, [data.data.id, dispatch]);

  const onRemove = useCallback(() => {
    dispatch(removeCart(data.data.id));
  }, [data.data.id, dispatch]);

  const inCart = useMemo(() => {
    return cartItems.some((item) => item === data.data.id);
  }, [cartItems, data.data.id]);

  return (
    <div className="container flex flex-col gap-4 mt-8">
      <Image src={data.data.url} width={400} height={400} alt={data.data.title} />
      <h1>{data.data.title}</h1>
      <p>{JSON.stringify(data.data)}</p>
      <div className="mt-8">
        {!inCart ? (
          <Button onClick={onAdd}>Добавить в корзину</Button>
        ) : (
          <Button onClick={onRemove} variant="secondary">
            Убрать из корзины
          </Button>
        )}
      </div>
    </div>
  );
}
