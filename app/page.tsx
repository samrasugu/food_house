import Navbar from '@component/components/navbar/navbar'
import { HeroSection } from './sections/hero'
import Footer from '@component/components/footer/footer'
import PopularMenu from './sections/popular'

export default function Home() {
  return (
    <main className="container-md bg-white">
      <Navbar/>
      <HeroSection/>
      <PopularMenu/>
      <Footer/>
    </main>
  )
}
