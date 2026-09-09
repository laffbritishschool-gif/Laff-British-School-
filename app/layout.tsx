import type { Metadata } from 'next';
import './globals.css';
import { Shell } from '@/components/site';
export const metadata: Metadata={title:'Laff British Montessori School',description:'Official website, student portal, result checker and school services.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}