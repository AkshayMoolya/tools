import { Github, LogOut, Notebook, NotebookPen } from "lucide-react";

import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ModeToggle } from "./modetoggle";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/30 dark:bg-black/50 shadow-sm saturate-100 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8">
        <Link href="/" aria-label="Home" title="Home">
        <NotebookPen />
        </Link>
        <div className="flex gap-2">
          <ModeToggle />
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/AkshayMoolya"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
