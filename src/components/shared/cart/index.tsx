'use client';

import * as Portal from '@radix-ui/react-portal';
import { ShoppingCart } from 'lucide-react';
import React, { useCallback } from 'react';

import { useAppSelector } from '@/store';
import { SelectCart } from '@/store/cart.slice';

import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';

import { useSSR } from '@/lib/hooks';

export default function Cart() {
  const cartItems = useAppSelector(SelectCart);
  const { isServer } = useSSR();

  const onBuy = useCallback(() => {
    fetch('/api/buy', { method: 'POST', body: JSON.stringify(cartItems) });
  }, [cartItems]);

  if (isServer || !cartItems.length) {
    return <></>;
  }
  return (
    <Portal.Root>
      <div className="fixed right-8 bottom-8 ">
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost">
              <ShoppingCart />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div>{JSON.stringify(cartItems)}</div>
            <div>
              <Button onClick={onBuy}>Купить</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </Portal.Root>
  );
}
