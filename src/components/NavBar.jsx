
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import logo from "../assets/download.png"
const NavBar = () => {
  return (
 <nav className="flex items-center justify-between py-6 ">
  <div className="flex flex-shrink-0 items-center">
    <a href="/" aria-label="Home">
    <img src={logo} className="mx-2" width={80} height={33} alt="Logo "/>
    </a>
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/abhiram-s-anand-b300b4254"
    target="_blank"
    rel="noopener noreferer"
    aria-label="LinkedIn">
    <FaLinkedin/>
    </a>
    <a href="https://www.instagram.com/0ff_tick?igsh=YXk5bmxsM2t0cXJh"
    target="_blank"
    rel="noopener noreferer"
    aria-label="instagram">
   <FaInstagram/>
    </a>
    
    <a href="https://github.com/AbhiramSAnand3"
    target="_blank"
    rel="noopener noreferer"
    aria-label="github">
    <FaGithub/>
    </a>

   
    <a href="mailto:abhiramsanand932@gmail.com"
    target="_blank"
    rel="noopener noreferer"
    aria-label="gmail">
   <SiGmail/>
    </a>

   
  </div>
 </nav>
  )
}

export default NavBar
