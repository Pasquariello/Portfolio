import '@/app/ui/global.css';
import '@circleco/headless-ui-kit/style.css'
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    
      <html lang="en">

          <body className={`${inter.className} antialiased`}>
              {children}

          </body>

      </html>
  );
}
