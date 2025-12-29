import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Category from "@/components/Category";
import Copyright from "@/components/Copyright";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Topbar from "@/components/Topbar";

const Home = () => {
  return (
    <div className="w-full max-w-360 mx-auto overflow-hidden bg-white">
      <Topbar/>
      <Header/>
      <Hero/>
      <Latest/>
      <Category/>
      <Benefits/>
      <About/>
      <Cta/>
      <Footer/>
      <Copyright/>
      {/* temporary div */}
      {/* <div className="h-250"></div> */}
    </div>
  )
}

export default Home;
