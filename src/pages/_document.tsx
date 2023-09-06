import { Html, Head, Main, NextScript } from 'next/document'
import React, {useRef} from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
