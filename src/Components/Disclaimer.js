import { Typography } from "@mui/material";
import Navbar from "./Header";

const Disclaimer = () => {
  return (
    <>
    <Navbar/>
      <div className=" bg-light m-5 p-5">
        <h2 style={{fontWeight:'bolder',color: 'crimson'}}>Disclaimer</h2>
      </div>
      <div className="ms-5 me-5  ps-3 pe-3" style={{letterSpacing:1,textAlign:'justify'}}>
        <Typography sx={{pb:3,fontSize:'18px'}}>Content on <a style={{textDecoration:'none'}} href="/">www.ex-im.com</a>  (and its official social networking sites) aims to inform readers/users of the developments and changes related to Global trade. The content is for general information and is mostly based on our reliable sources, but actual developments can turn out to be different due to circumstances beyond our control and knowledge. www.ex-im.com does not take any responsibility for investment or business decisions taken by reader/users on the basis of content on this website. www.ex-im.com is not responsible for content from any third party.</Typography>
      </div>
    
    </>
  )
}

export default Disclaimer;
