import Navbar from '@component/components/navbar/navbar'
import { HeroSection } from './sections/hero'
import Footer from '@component/components/footer/footer'

export default function Home() {
  return (
    <main className="container-md">
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </main>
  )
}
