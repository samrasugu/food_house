import Navbar from '@component/components/navbar/navbar'
import { HeroSection } from './sections/hero'

export default function Home() {
  return (
    <main className="container-md">
      <Navbar/>
      <HeroSection/>
    </main>
  )
}
