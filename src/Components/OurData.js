import Navbar from "./Header";
import ourDataImg from '../images/ourdata-banner.jpg'
import ourDataImg2 from '../images/our-data.jpg'
import { Typography } from "@mui/material";
import Footer from "./Footer";
import buyerIconImg from '../images/icon-buyer.png'
import iconAiHead from '../images/icon-chipping.png'
import storeIcon from '../images/icon-shop.png'


const OurData = () => {
    return (
        <>
            <Navbar />

            <div className="d-flex p-3 pb-5" style={{ backgroundColor: 'rgb(235, 238, 252)' }}>
                <div className=" col-sm-6" style={{ padding: '120px 0 0 70px' }}>
                    <h1 className=" fw-bolder pt-2" style={{
                        fontSize: '50px', letterSpacing: 1,color:'rgb(106, 0, 117)'
                    }}
                    >Our Data</h1>
                    <Typography sx={{ mt: 3, fontSize: '18px', letterSpacing: 1,textAlign:"justify" }}> Demand for ‘meaningful’ data to aid strategic business purposes is fast rising.
                        With years of advanced integration and matching capabilities pumped into each bit, Ex-Im
                        presents the world’s exporters and importers an option to exploit the smartest ‘built to
                        serve’ Big Data Architecture.
                    </Typography>
                </div>
                <div className=" col-sm-6 pt-5 ms-4">
                    <img style={{width:'550px',height:'350px',borderRadius:'10px'}} src={ourDataImg} alt="our-data-img" />
                </div>
            </div>
            <div className="p-3">
                <div style={{ padding: '10px 70px', letterSpacing: 1, marginTop: '30px' }}>
                    <h2 className=" fw-bolder" style={{
                        fontSize: '35px', color: 'rgb(166, 50, 130)'
                    }}>Data Source</h2>
                    <h3 className=" fw-bolder pt-3 pb-3" style={{ fontSize: '30px',color:'crimson' }}>
                        Where do we get the trade data from?
                    </h3>
                    <p style={{ fontSize: '18px',textAlign:"justify",letterSpacing: 1 }}>In a world interconnected by devices and databases, the challenge is not information.
                        It’s ‘sensible’ information, which is less of a commodity and more than just remotely
                        relevant to your business. To ensure only the most accurate and appropriate information is
                        shared through our cloud-based platform, our hyper-customised built-in data vaults fetch
                        only the most optimised and segmented information - from dozens of public and private data
                        sources - that is suited for consumption of the everyday exporter and importer.
                    </p>
                    <h3 className=" fw-bolder pt-3 pb-3" style={{ fontSize: '30px',color:'crimson' }}>Do we expel irrelevant data from our pipeline?</h3>
                    <p style={{ fontSize: '18px',textAlign:"justify",letterSpacing: 1 }}>Certainly! We understand that every data point related to exports-imports may not be relevant
                        to your business. With Ex-Im, we help you battle the challenge of avoiding wasteful
                        overprovisioning and enhances capacity building in groups or individual reports whenever needed.
                        What you are finally served is an enterprise-class solution to drive your export-import
                        business forward.
                    </p>
                    <h2 className=" fw-bolder" style={{
                        fontSize: '35px', color: 'rgb(166, 50, 130)'
                    }}>Delivery</h2>
                    <h3 className=" fw-bolder pt-3 pb-3" style={{ fontSize: '30px',color:'crimson' }}>How is Ex-Im delivered?</h3>
                    <p style={{ fontSize: '18px',textAlign:"justify",letterSpacing: 1 }}>Ex-Im was created with a purpose to add meaning to Big Data and present it before the world’s
                        EXIM community to enable them to derive the maximum business utility out of it at an optimum
                        cost to them. It was also created with an aim to delivery exactness in DaaS and SaaS as an
                        inexpensive platform. Which is why, unlike many other providers who promise delivery of
                        analytics-based solutions in hybrid formats and platforms (standalone sheets plus other form
                        of diverse web and downloadable tools), Ex-Im delivers the bouquet of its data solutions
                        through a single piece of cloud-based software and information system. While this maximises
                        our license holders’ human investment ROI, it also maximizes their infrastructure investment
                        ROI. The objective is to deliver instant, timely and secure access to critical processed
                        information on foreign trade to all our license holders at competitive prices and in the
                        simplest of ways.
                    </p>
                </div>
                <div className="d-flex m-5 pe-5">
                    <div style={{ marginLeft: '20px', backgroundColor: 'rgb(235, 238, 252)',
                     padding: '20px',borderRadius:'20px' }} className="d-flex col-sm-4">
                        <div className="p-1">
                            <img src={buyerIconImg} alt="buyer-icon-img" />
                        </div>
                        <div className=" ps-3 pt-3">
                            <h5 className=" fw-bolder pb-3">26,617,775</h5>
                            <p style={{ fontSize: '16px',color:'gray'  }}>Buyer / Importer Profiles</p>
                        </div>
                    </div>
                    <div style={{ marginLeft: '20px', backgroundColor: 'rgb(235, 238, 252)', 
                       padding: '20px',borderRadius:'20px'  }} className="d-flex  col-sm-4">
                        <div className="p-1">
                        <img src={iconAiHead} alt="aiHead-icon-img" />
                        </div>
                        <div className=" ps-3 pt-3">
                            <h5 className=" fw-bolder pb-3">3,123,432,132</h5>
                            <p style={{ fontSize: '16px',color:'gray'  }}>Shipments Evaluated Using AI-Driven Codes</p>
                        </div>
                    </div>
                    <div style={{ marginLeft: '20px', backgroundColor: 'rgb(235, 238, 252)',
                        padding: '20px',borderRadius:'20px'  }} className="d-flex  col-sm-4">
                        <div className="p-1">
                        <img src={storeIcon} alt="store-icon-img" />
                        </div>
                        <div className=" ps-3 pt-3 ">
                            <h5 className=" fw-bolder pb-3">22,207,224</h5>
                            <p style={{ fontSize: '16px',color:'gray' }}>Seller / Exporter Profiles</p>
                        </div>
                    </div>
                </div>

                <div style={{ padding: '10px 70px' }}>
                    <h2 className=" fw-bolder" style={{
                        fontSize: '35px',color: 'rgb(166, 50, 130)'
                    }}>Deduplication and Data streamlining</h2>
                    <h3 className=" fw-bolder pt-3 pb-3" style={{ fontSize: '30px',color:'crimson' }}>How do billions of rows of ‘mass’ data turn ‘useful’?</h3>
                    <p style={{ fontSize: '18px',textAlign:"justify",letterSpacing: 1 }}>It’s a tricky process. Not because we have complicated sets of algorithms fighting the battle
                        against billions of redundant data points for us, but because it’s a trade secret which we’d
                        like to keep within our walls. However, since you must be wondering, let’s just say, the data
                        sets are cleaned and made more relevant to our license holders in a scientific fashion. It’s
                        more like the data sets evolving with each automated and human-enabled step to suit the
                        requirements of our license holders.
                    </p>
                    <h3 className=" fw-bolder pt-3 pb-3" style={{ fontSize: '30px',color:'crimson' }}>Do we ‘actually’ have humans working with robots on Ex-Im?</h3>
                    <p style={{ fontSize: '18px',textAlign:"justify",letterSpacing: 1 }}>The science involves a mix of man and machine. While we engage a highly qualified and well-trained
                        Trade Intelligence team, the machine bit includes usage of powerful cloud and captive architecture,
                        advanced matching capabilities, and Artificial Intelligence-driven, human logic-driven and
                        probability-driven mapping formulae. Let’s just say we have some very smart humans working on
                        very smart machines and codes to discover and identify obvious and not-so-obvious secrets hidden
                        in shiploads of ‘Big Data’, with a single purpose of delivering an unbeatable combined platform
                        of Data as a Service (DaaS) and Software as a Service (SaaS) called Ex-Im.
                    </p>
                </div>
                <div style={{ padding: '10px 70px' }}>
                    <img src={ourDataImg2} alt="our-data-bottom-img" />
                </div>
            </div>
            <Footer />
        </>
    )
}
export default OurData;



