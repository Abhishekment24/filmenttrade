import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pool from '@/components/Pool'

const inter = Inter({ subsets: ['latin'] })

export default function Myapp() {
  return (
    <div className=''>
      <Pool />
    </div>
  )
}
