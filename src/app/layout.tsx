import '@/assets/styles/globals.css';
import inter from '@/assets/fonts/inter';
import Providers from '@/components/parts/Providers';
import generateMetadata from '@/lib/metadata';
import { BackgroundPatterns } from '@/components/bg-patterns';

export const metadata = generateMetadata();

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} bg-gradient-to-br min-h-screen from-[#fefaff] via-[#fefcff] to-[#fdfdff]`}
      >
        <Providers>
          <BackgroundPatterns />

          <main className='relative z-10 mx-auto max-w-[1170px] min-h-screen px-[15px]'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}