'use client';

import Link from 'next/link';
import { Droplets, Package, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/cart', label: 'Cart', icon: ShoppingCart },
  { href: '/orders', label: 'Orders', icon: Package },
];

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Droplets className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Blue Drop</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="icon"
                asChild
                className={cn(
                  'relative',
                  pathname === link.href && 'bg-accent text-accent-foreground'
                )}
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5" />
                  {link.href === '/cart' && cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                      {cartCount}
                    </span>
                  )}
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
