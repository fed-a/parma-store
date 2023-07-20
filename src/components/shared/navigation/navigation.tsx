'use client';

import Link from 'next/link';
import React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui';

import { ROUTES } from '@/lib/routes';

import Profile from './auth';

export function Navigation() {
  return (
    <header className="container flex items-center justify-between py-4">
      <Link href={ROUTES.main.path}>
        <div className="inline-block h-10 aspect-[73/46] sm:h-12 md:h-16 bg-[url('/assets/images/logo.svg')] bg-center bg-contain bg-no-repeat" />
      </Link>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                <Link href={ROUTES.collections.path} legacyBehavior passHref>
                  {ROUTES.collections.label}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-2 p-4">
                  <li>
                    <Link href={ROUTES.collections.children.sport.path} legacyBehavior passHref>
                      Спортивная
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.collections.children.junior.path} legacyBehavior passHref>
                      Junior
                    </Link>
                  </li>
                  <li>
                    <Link href={ROUTES.collections.children.base.path} legacyBehavior passHref>
                      Базовая
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={ROUTES.clothes.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {ROUTES.clothes.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={ROUTES.accesories.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {ROUTES.accesories.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={ROUTES.about.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {ROUTES.about.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={ROUTES.contact.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {ROUTES.contact.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Profile />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
