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
        className={`${inter.variable} min-h-screen bg-gradient-to-br from-[#fefaff] via-[#fefcff] to-[#fdfdff]`}
      >
        <Providers>
          <BackgroundPatterns />

          <main className='mx-auto max-w-[1170px] min-h-screen px-[15px] relative z-10'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
