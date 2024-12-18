import '@/assets/styles/globals.css';
import inter from '@/assets/fonts/inter';
import Providers from '@/components/parts/Providers';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata();

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} min-h-screen bg-gradient-to-br from-[#fefaff] via-[#fefcff] to-[#fdfdff]`}
      >
        <Providers>
          {/* Fixed background decorative elements */}
          <div className='fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden'>
            {/* Top right - flowing data streams */}
            <svg
              className='absolute top-[3%] right-[4%] w-[30vw] opacity-40'
              viewBox='0 0 100 100'
              fill='none'
              stroke='#9F7AEA'
              strokeWidth='0.4'
            >
              <path d='M20,20 C40,10 60,30 80,20' strokeDasharray='1,2' />
              <path d='M25,35 C45,25 65,45 85,35' strokeDasharray='2,3' />
              <path d='M15,50 C35,40 55,60 75,50' strokeDasharray='0.5,1.5' />
              <circle cx='30' cy='20' r='1.5' fill='#9F7AEA' />
              <circle cx='50' cy='30' r='1' fill='#9F7AEA' />
              <circle cx='70' cy='25' r='2' fill='#9F7AEA' />
            </svg>

            {/* Bottom left - interconnected nodes */}
            <svg
              className='absolute bottom-[10%] left-[0%] w-[25vw] opacity-9'
              viewBox='0 0 100 100'
              fill='none'
              stroke='#B794F4'
              strokeWidth='0.3'
            >
              <path d='M10,50 L90,50' strokeDasharray='0.5,8' />
              <path d='M50,10 L50,90' strokeDasharray='0.5,8' />
              <circle cx='50' cy='50' r='3' fill='#B794F4' opacity='0.5' />
              <circle cx='30' cy='30' r='2' fill='#B794F4' opacity='0.3' />
              <circle cx='70' cy='70' r='2' fill='#B794F4' opacity='0.3' />
              <path d='M30,30 Q50,50 70,70' strokeDasharray='0.5,2' />
            </svg>

            {/* Center - abstract user representation */}
            <svg
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] opacity-25 rotate-12'
              viewBox='0 0 100 100'
              fill='none'
              stroke='#E9D8FD'
              strokeWidth='0.4'
            >
              <path d='M50,20 Q65,35 50,50 T50,80' />
              <path d='M30,50 Q50,65 70,50' strokeDasharray='1,3' />
              <circle cx='50' cy='35' r='8' strokeDasharray='0.5,1.5' />
              <path
                d='M20,50 C40,20 60,80 80,50'
                strokeDasharray='2,4'
                opacity='0.3'
              />
            </svg>
          </div>

          <main className='mx-auto max-w-[1170px] min-h-screen px-[15px] relative z-10'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
