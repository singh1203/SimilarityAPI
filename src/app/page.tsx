import { Inter } from 'next/font/google';
import LargeHeading from '@/components/ui/LargeHeading';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & Open Source text Similarity API',
}

export default function Home() {
  return <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
    <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
      <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
        <LargeHeading size='lg' className='three-d text-black dark:text-light-gold'>
          Easily determine <br /> the similarity of text.
        </LargeHeading>
        
      </div>
    </div>
  </div>
}