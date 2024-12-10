import '@/app/ui/global.css';
import '@circleco/headless-ui-kit/style.css'
import { inter } from '@/app/ui/fonts';

import {
  CircleProvider
} from "@circleco/headless-ui-kit/components/Provider";

import {
  BlockEditor
} from "@circleco/headless-ui-kit/components/BlockEditor";
// import Provider from './provider';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {/* <Provider> */}
            {/* <CircleProvider getTokenFunction={getTokenFunction}> */}
              {/* <BlockEditor readOnly={true} value={{}} sgidToObjectMap={{}} inlineAttachments={[]}/> */}
              {children}
            {/* </CircleProvider> */}
          {/* </Provider> */}
          </body>
      </html>
  );
}
