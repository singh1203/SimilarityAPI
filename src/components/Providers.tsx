'use client';
import { ThemeProvider } from "next-themes"
import { FC, ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;