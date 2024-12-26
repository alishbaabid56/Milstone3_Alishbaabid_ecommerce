
import HomePage from "./product/page"
import Header from "@/components/Header"
import Reviews from "./reviews/page"
import MissRoseSection from "@/components/MissroseSection"
import ContactPage from "./contact/page"


const home = () => {
  return (
    <div>
    
   <Header/>
    <HomePage/>
    <Reviews/>
    <MissRoseSection/>
    <ContactPage/>
      
      </div>
  )
}

export default home