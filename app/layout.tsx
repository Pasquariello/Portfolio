'use client'

import '@/app/ui/global.css';
import '@circleco/headless-ui-kit/style.css'
import { inter } from '@/app/ui/fonts';

import {
  CircleProvider
} from "@circleco/headless-ui-kit/components/Provider";

import {
  BlockEditor
} from "@circleco/headless-ui-kit/components/BlockEditor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const getTokenFunction = () => {
    return '';
    // return "<MEMEBER_TOKEN>" // you must return the member api here.
  };

  return (
    
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {/* <CircleProvider getTokenFunction={getTokenFunction}>
            <BlockEditor readOnly={true} value={{}} sgidToObjectMap={{}} inlineAttachments={[]}/> */}
            {children}
          {/* </CircleProvider> */}

          </body>
      </html>
  );
}
