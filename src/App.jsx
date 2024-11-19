import Contact from "./components/Contact"
import DesignFrameworks from "./components/DesignFrameworks"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Technologies from "./components/Technologies"
const App = () => {
  return (
    
    <div className="overflow-x-hidden text-stone-300 antialiased">
    {/* <div className="fixed inset-0 -z-10">
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      
      </div>
      
    </div> */}
    <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
    <div className="container mx-auto px-8">
     <NavBar/>
     <Hero/>
     <Technologies/>
     <DesignFrameworks/>
     <Experience/>
     <Contact/>
    </div>
    </div>
    
  )
}

export default App