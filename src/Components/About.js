import { Typography } from "@mui/material";
import Navbar from "./Header";
import aboutImg from '../images/about-banner.jpg'
import '../stylecss/aboutstyle.css'
import Footer from "./Footer";


const About = () => {
    return (
        <>
            <Navbar />
            
            <div className="d-flex bg-light">
                <div className="about-div col-sm-6 ">
                    <h1 style={{fontSize:'50px',color: 'crimson',fontWeight:"bold"}}>About Us </h1>
                    <Typography sx={{mt:2, fontSize:'20px',textAlign:"justify"}}>
                        We are tech-driven. We are young. We are brilliant. And we are proud of the shifts we 
                        are putting in to create, design, develop, innovate and re-innovate for the folks who matter
                        when it comes to all the talk about globalisation and making the so-called flat world go round.
                    </Typography>
                </div>
                <div className=" col-sm-6 ">
                    <img style={{width:'550px',height:'auto',borderRadius:'10px'}} src={aboutImg} alt="about-img" />
                </div>
            </div>
            <div className="content-div">
                <div>
                    <h1 style={{fontSize:'32px',color: 'crimson',fontWeight:"bolder"}}>Ex-Im.com</h1>
                    <Typography sx={{mt:2, fontSize:'18px',textAlign:"justify"}}>It’s that simple. That basic. That’s how easy it sounds and is to use our 
                        hyperengine loaded with truckloads of formulae that stitch shiploads of information on 
                        exports and imports to offer what we called the most advanced trade analytics platform
                        available to exporters and importers in the world. We ensure our users are backed up 
                        by informatics-driven facts to run their everyday EXIM businesses – better, wiser, 
                        faster and bigger.
                    </Typography>
                </div>
                <h5 className="mt-4 mb-4">Effective, efficient, and more informed decision-makers – that’s our clientele.</h5>
                <div>
                    <h1 style={{fontSize:'32px',color: 'crimson',fontWeight:"bolder"}}>Goal</h1>
                    <p style={{fontSize:'18px',textAlign:"justify"}}>Our goal is to help our users create optimised supply chains that leverage trade analytics 
                        to provide them a competitive advantage in the fast-changing world of trade. We drill down 
                        deep into the trading patterns of buyers and sellers based on a multitude of parameters, 
                        to give our users both a macro and micro view of supply-demand trends across the world.
                    </p>
                    <p style={{fontSize:'18px',textAlign:"justify"}}>We ensure our users get a deeper understanding of buyer-supplier requirements as well as 
                        better insights into export-import markets and supply chains. This not only helps them 
                        cater better to their buyers’ demands but helps them better manage their global sourcing 
                        needs, while giving them greater flexibility and capabilities to react to competition.
                    </p>
                    <p style={{fontSize:'18px',textAlign:"justify"}}>We are a one-stop technology solution in exports-imports, accessible on-the-fly, carefully 
                        designed and crafted to cater to everyone associated with foreign trade. We leverage the 
                        power of technology and Big Data to provide our users meaningful information or insights 
                        (which may otherwise be hidden within large volumes of data) that help them drive desired 
                        outcomes, such as optimisation of resources, cost savings, customer engagement, etc. and 
                        expand their global footprint.

                    </p>
                </div>
                <div>
                    <h1 style={{fontSize:'32px',color: 'crimson',fontWeight:"bolder"}}>For the future</h1>
                    <p style={{fontSize:'18px',textAlign:"justify"}}>We are young. And agile as a company. But our platform stands firmly on the foundation of 
                        years of on-the-ground experience of our architects in the foreign trade business. A 
                        buyer-seller business search, dissection and analysis tool made for the future – that’s 
                        what <a href="/">www.ex-im.com</a> serves on a platter. All you need is a computer device and a simple 
                        Internet connection to become an enterprise that cares about its future in foreign trade 
                        by using a near perfect and easy-to-decipher actionable trade intelligence tool.
                    </p>
                    <p style={{fontSize:'18px',textAlign:"justify"}}> And here’s the sweetest bit. We repeat – we are young, have a top-of-the-class software and 
                        evolution is in our blood! With <a href="/"> www.ex-im.com</a>, you’ll never find yourself hunting for the 
                        next best in global trade information and analysis technology.
                    </p>
                    <p style={{fontSize:'18px',textAlign:"justify"}}>That’s as much about us. It’s time you tell us something about your business too. We’d love 
                        to hear from you. Hit the Contact Us button on our home page and we will e-meet.
                    </p>

                </div>
            </div>
            <Footer/>
            
        </>
    )
}
export default About;