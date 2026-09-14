import type { Metadata } from 'next';
import './globals.css';
import { Shell } from '@/components/site';

export const metadata: Metadata = {
  title: 'Laff British Montessori School',
  description: 'Official website, student portal, result checker and school services.',
  verification: {
    google: 'google253005600fdec9bb',
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Shell>{children}</Shell></body></html>;
}