import { Typography } from "@mui/material";
import Navbar from "./Header"
import Footer from "./Footer";

const TermAndCondition = () => {
    return (
        <>
            <Navbar />
            <div className=" bg-light m-5 p-5">
                <h2 style={{ fontWeight: 'bolder', color: 'crimson' }}>Terms & Conditions</h2>
            </div>
            <div className="m-5 p-3" style={{ letterSpacing: 1, textAlign: 'justify' }}>
                <Typography sx={{ pb: 3, fontSize: '18px' }}>
                Please read these terms and conditions of use carefully. These terms and conditions may have changed since your last visit to this website. By using this website, you indicate your acceptance of these terms and conditions. If you do not accept these terms and conditions, then do not use this website or use any of  <a style={{textDecoration:'none'}} href="/">www.ex-im.com</a>’s services.
                </Typography>
                <h2 style={{fontWeight:'bolder',color: 'crimson'}}>1. Copyright and trademark information</h2>
                <Typography sx={{ pb: 3, fontSize: '18px' }}>
                This website, and the information which it contains, such as text, graphics, images, data, reports, links, information obtained from <a style={{textDecoration:'none'}} href="/">www.ex-im.com</a>'s licensors, services and other material and Deliverables (as defined below) contained on this Website or provided through Services (as defined below) made available on the Website (collectively, "Content") are the property of AAA Info-tech Sol, LLC, its affiliates and its licensors, and are protected from unauthorised copying and dissemination by United States copyright law, trademark law, international conventions and other intellectual property laws. By way of example only, and not as a limitation, "<a style={{textDecoration:'none'}} href="/">www.ex-im.com</a>" and the Ex-Im logo are registered trademarks of AAA Info-tech Sol, LLC, under the applicable laws of the United States and/or other countries. Other <a style={{textDecoration:'none'}} href="/">www.ex-im.com</a> product or service names or logos appearing on this Website are either trademarks or registered trademarks of AAA Info-tech Sol, LLC and/or its affiliates. The absence of a product or service name or logo from this list does not constitute a waiver of <a style={{textDecoration:'none'}} href="/">www.ex-im.com</a>'s trademark or other intellectual property rights concerning that name or logo.
                </Typography>
                <Typography sx={{ pb: 3, fontSize: '18px' }}>
                The information as shown and provided on "<a style={{textDecoration:'none'}} href="/">www.ex-im.com</a>" and all related and unrelated, direct and indirect contents of the website (in whole or part) are not to be used for "any reference or representation to third parties, except without a prior written permission from an authorised representative" of AAA Info-tech Sol, LLC.
                </Typography>
            </div>
            <Footer/>
        </>
    )
}

export default TermAndCondition;
