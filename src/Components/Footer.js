
import { NavLink } from "react-router-dom";
import '../stylecss/footerstyle.css'
import { Divider } from "@mui/material";

const Footer = () => {
    return (
        <>  
            <div className="footer-div text-white">
                
                <h5 className=" text-center pt-4 pb-2">Useful Links</h5>
                
                <div>
                    <ul className="d-flex text-white text-center pb-3 justify-content-center mb-0">
                        <li className='footer-list'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='footer-list'>
                            <NavLink to='/about'>About Us</NavLink>
                        </li>
                        <li className='footer-list'>
                            <NavLink to='/terms&Conditions'>Terms & Conditions</NavLink>
                        </li>
                        <li className='footer-list'>
                            <NavLink to='/disclaimer'>Disclaimer</NavLink>
                        </li>
                        <li className='footer-list'>
                            <NavLink to='/privacypolicy'>Privacy Policy</NavLink>
                        </li>
                        <li className='footer-list'>
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
            <Divider/>
                <div className="footer-end text-center">
                    <p>Copyright @2023 ex-im All rights reserved</p>
                </div>
            
            

        </>
    )
}
export default Footer;