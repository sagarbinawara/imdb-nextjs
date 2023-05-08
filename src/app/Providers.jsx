
"use client" 

// import React from "react";
import { ThemeProvider } from "next-themes";
export default function Providers({children}) {
  return <ThemeProvider enableSystem={true} attribute="class">
    <div className="dark:bg-grey-700 dark:text-grey-200 text-grey-700 transition-colors duration-300 min-h-screen">{children}</div></ThemeProvider>;
}
