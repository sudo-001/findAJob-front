import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/templates/home/header'
import Categories from '@/components/templates/home/categories'
import Partner from '@/components/templates/home/partner'
import RecentJobs from '@/components/templates/home/recentJobs'
import JoinUs from '@/components/templates/home/joinUs'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Partner />
      <RecentJobs />
      <JoinUs />
    </>
  )
}
