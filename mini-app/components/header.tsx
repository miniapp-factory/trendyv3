"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { title } from "@/lib/metadata";

const pages = [
  { label: <span className="text-xl font-bold">{title}</span>, href: "/" },
  { label: "Feed", href: "/feed" },
  { label: "Upload", href: "/upload" },
  { label: "Creator Dashboard", href: "/(dashboard)/creator" },
  { label: "Admin Dashboard", href: "/(dashboard)/admin" },
];

export function Header() {
  return (
    <>
      <header className="sticky flex place-items-center gap-4 border-b p-4 max-md:hidden">
        {pages.map((page, i) => (
          <Link key={i} href={page.href}>
            {page.label}
          </Link>
        ))}
      </header>
      <header className="sticky flex place-content-between border-b p-4 md:hidden">
        <Link href="/">{pages.find((p) => p.href === "/")?.label}</Link>
        {pages.length > 1 && (
          <Drawer>
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="hidden">
                <DrawerTitle>Navigation Menu</DrawerTitle>
                <DrawerDescription>Navigate to other pages</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <div className="flex flex-col place-content-center gap-4">
                  {pages.map((page, i) => (
                    <DrawerClose key={i}>
                      <Link href={page.href}>{page.label}</Link>
                    </DrawerClose>
                  ))}
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </header>
    </>
  );
}
