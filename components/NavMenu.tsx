"use client";
import * as React from "react";
import Link from "next/link";
import { Poppins, Outfit } from "next/font/google";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const PoppinsFont = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export function NavMenu() {
  return (
    <NavigationMenu
      className={`${PoppinsFont.className} antialiased bg-defaultGreen`}
    >
      <NavigationMenuList>
        <NavigationMenuItem className="bg-defaultGreen">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Meet The Doctors</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                title="Dr. Ammar Mahmoud"
                href="/doctors/dr-ammar-mahmoud"
              ></ListItem>
              <ListItem
                title="Dr. Mansoor Aman"
                href="/doctors/dr-mansoor-aman"
              >
                Joining in Nov 2025
              </ListItem>
              <ListItem
                title="Dr. Vishal Patel"
                href="/doctors/dr-vishal-patel"
              >
                Joining in Nov 2025
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-defaultGreen">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                title="Spinal Cord Stimulation"
                href="/services"
              ></ListItem>
              <ListItem
                title="Radiofrequency Ablations"
                href="/services"
              ></ListItem>
              <ListItem title="Kyphoplasty" href="/services"></ListItem>
              <ListItem title="Epidural Injections" href="/services"></ListItem>
              <ListItem title="Joint Injections" href="/services"></ListItem>
              <ListItem
                title="Peripheral Nerve Stimulation"
                href="/services"
              ></ListItem>
              <ListItem
                title="Sacroiliac Joint Injection"
                href="/services"
              ></ListItem>
              <ListItem
                title="Minimally Invasive Lumbar Decompression(MILD)"
                href="/services"
              ></ListItem>
              <ListItem
                title="Basivertebral Nerve Ablation"
                href="/services"
              ></ListItem>
              <ListItem
                title="Sacroiliac Joint Fusion"
                href="/services"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/awareness" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Awareness
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  icon?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
