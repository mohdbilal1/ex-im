import { Button, Typography } from "@mui/material";
import Navbar from "./Header";
import img from '../images/home-img.jpg';
import img2 from '../images/ex-im-edge.png';
import Footer from '../Components/Footer';
import '../stylecss/homestyle.css'
import ultimateImg from '../images/ultimate.png'
import { HiBadgeCheck } from 'react-icons/hi'
import feateureImg1 from '../images/features-map-1.jpg'
import feateureImg2 from '../images/features-map-2.jpg'
import feateureImg3 from '../images/features-map-3.jpg'
import eximDiscoverImg from '../images/exim-discover.jpg'
import eximDashboardImg from '../images/exim-dashboard.jpg'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export const Home = () => {
    return (
        <> 
            <Navbar />
            <div className="main-div">
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px',justifyContent:"space-evenly" }}>
                    <div className="col-sm-6" style={{ padding: '40px' }}>
                        <Typography style={{ fontSize: '45px', fontWeight: "bold" }}>The EX-IM Edge</Typography>
                        <Typography sx={{ color: 'crimson', fontSize: '32px', fontWeight: "bold" }}>Experience The AI-Powered Superengine</Typography>
                        <Typography sx={{ padding: '20px 0', fontSize: '18px', color: 'rgb(68, 68, 68)',textAlign: 'justify' }}>When intelligence, technology and business work together, foreign trade becomes a bigger,
                            more lucrative experience. Experience our vision for the future of technology tailormade to empower EXIM
                            businesses around the world. One platform to explore opportunities in a market of eight billion buyers –
                            this is innovation that’s constructive for you and disruptive
                            for the world. Leap over continents and ahead of the curve with Ex-Im. (And get the edge to stay ahead.)
                        </Typography>
                        <a href="/login">
                            <Button variant="contained" sx={{ padding: '8px 25px', mt: 1, 
                             fontSize: '16px',bgcolor: 'crimson'  }}
                            >Login</Button>
                        </a>
                    </div>
                    <div className="col-sm-6 pt-5">
                        <img style={{width:'580px',height:'auto',objectFit:'cover'}} src={img} alt="home-img" />
                    </div>
                </div>
                <div style={{ padding: '40px' }} className="sec_div_content d-flex flex-wrap mt-5">
                    <div className="col-sm-5">
                        <img src={img2} alt="home-img" />
                    </div>
                    <div className=" col-sm-6">
                        <h1 style={{ paddingBottom: '10px', fontWeight: 'bold',
                         color: 'crimson'}}
                        >One-of-its-kind foreign trade analytics platform</h1>

                        <Typography sx={{ fontSize: '18px', pb: '15px',textAlign: 'justify' }}>Ex-Im.com is one-of-its-kind foreign trade analytics platform that helps
                            exporters and importers from around the world make business sense of infinite loads
                            of both structured and unstructured information on foreign trade.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', pb: '15px',textAlign: 'justify' }}> Our cloud-based, AI-enabled platform can help you grow your market share,
                            increase your global footprint, and reduce costs in your supply chain, while saving
                            valuable time and other related resources.
                        </Typography>
                        <Typography sx={{ fontSize: '18px', pb: '15px',textAlign: 'justify' }}>Actionable intelligence is what we commit - informatics that helps them get key
                            insights into the global supply chain as well as evaluate present and prospective
                            trading partners.Our global coverage and multi-level data sets help our clients
                            understand almost everything related to exports-imports – from the simplest of market
                            fundamentals to the complex near-to-mid-term supply and demand shifts across value chains.
                        </Typography>

                    </div>

                </div>
                <div className=" d-flex flex-wrap mt-5" style={{ padding: '40px' }}>
                    <div className="col-sm-6">
                        <h1 style={{ paddingBottom: '10px', fontWeight: 'bolder',
                         fontSize: '38px',color: 'crimson' }}
                        >The Ultimate AI-Powered Superengine for Ex-Im Enthusiasts</h1>
                        <div className=" d-flex">
                            <div style={{ fontSize: '40px',color: 'crimson'  }} ><HiBadgeCheck /></div>
                            <p style={{ fontSize: '18px', padding: '10px 0 0 30px',textAlign: 'justify' }}>We integrate technology, information and human intelligence and make foreign trade
                                simpler and surer for exporters and importers across the globe.
                            </p>
                        </div>
                        <div className=" d-flex">
                            <div style={{ fontSize: '40px',color: 'crimson'  }} ><HiBadgeCheck /></div>
                            <p style={{ fontSize: '18px', padding: '10px 0 0 30px',textAlign: 'justify' }}>Powered with flash technology-driven algorithms, our AI-engine sifts through billions of data
                                sets in nanoseconds to serve you actionable intelligence.
                            </p>
                        </div>
                        <div className=" d-flex">
                            <div style={{ fontSize: '40px',color: 'crimson'  }} ><HiBadgeCheck /></div>
                            <p style={{ fontSize: '18px', padding: '10px 0 0 30px',textAlign: 'justify' }}>Our hybrid-engine, extracts, processes, and delivers only select information through its
                                hyper-customised built-in Big Data vaults hosted on its multiple cloud and physical servers.
                            </p>
                        </div>


                    </div>
                    <div className="col-sm-6">
                        <img src={ultimateImg} alt="ultimate-img" />
                    </div>
                </div>
                <div className="mt-5" style={{ padding: '40px',backgroundColor:'#f3f5ff' }}>
                    <h1 style={{ paddingBottom: '10px', fontWeight: 'bolder', fontSize: '30px',color: 'crimson' }}>Features</h1>
                    <h5>Making technology, information, and actionable intelligence work better for your EXIM business.</h5>
                    <div className=" d-flex mt-4 justify-content-evenly ">
                        <div className=" me-4  bg-light">
                            <img src={feateureImg1} alt="feateure-Img1" />
                        </div>
                        <div className=" me-4  bg-light">
                            <img src={feateureImg2} alt="feateure-Img1" />
                        </div>
                        <div className=" me-4  bg-light">
                            <img src={feateureImg3} alt="feateure-Img1" />
                        </div>
                    </div>
                    <div className=" d-flex mb-5 justify-content-evenly  ">
                        <div className="  me-4 p-4 pt-5  bg-light ">
                            <h1 style={{  fontWeight: 'bolder', fontSize: '30px',color: 'crimson' }}>Smart Dashboard</h1>
                            <p style={{textAlign: 'justify',paddingTop:'5px'}}>It’s a smart dashboard for our ever-growing circle of the smartest clientele on planet Earth.</p>
                        </div>
                        <div className=" me-4 p-4 pt-5  bg-light ">
                            <h1 style={{  fontWeight: 'bolder', fontSize: '30px',color: 'crimson' }}>Trade Analysis</h1>
                            <p style={{textAlign: 'justify',paddingTop:'5px'}}>It gives better insights into export-import markets and supply chains also helps them improve flexibility.</p>
                        </div>
                        <div className=" me-4 p-4 pt-5  bg-light ">
                            <h1 style={{ fontWeight: 'bolder', fontSize: '30px',color: 'crimson' }}>Port Analysis</h1>
                            <p style={{textAlign: 'justify',paddingTop:'5px'}}>Port analysis tool helps the users to identify a port that suits their need and stay competitive.</p>
                        </div>
                    </div>
                </div>
                <div className=" d-flex flex-wrap mt-3 mb-5" style={{ padding: '0 40px' }}>
                    <h1 style={{ paddingBottom: '10px', fontWeight: 'bolder',
                      fontSize: '38px',color: 'crimson' }}>Discover active buyers and identify credible sellers
                    </h1>
                    <h5>We ensure whatever our users get is “only useful”.
                        We assist them in strategic decision-making.
                    </h5>

                    <div className=" d-flex mt-5">
                        <div className=" col-sm-6">
                            <img style={{width:'550px',height:'350px'}} src={eximDiscoverImg} alt="exim-discover-img" />
                        </div>
                        <div className=" col-sm-6">
                            <div className=" d-flex">
                                <div style={{ fontSize: '40px',color: 'crimson' }} ><HiBadgeCheck /></div>
                                <p style={{ fontSize: '18px', padding: '8px 0 0 30px',textAlign:"justify" }}>
                                    Our various trade intelligence technology tools and sub-tools, help you pinpoint
                                    and discover and understand buyers and suppliers across geographies and product
                                    categories.

                                </p>
                            </div>
                            <div className=" d-flex">
                                <div style={{ fontSize: '40px',color: 'crimson' }} ><HiBadgeCheck /></div>
                                <p style={{ fontSize: '18px', padding: '10px 0 0 30px',textAlign:"justify" }}>
                                    We are ‘the’ place to be if you desire in-depth understanding of a buyer or a
                                    supplier and spot an opportunity in global trade.
                                </p>
                            </div>
                            <div className=" d-flex">
                                <div style={{ fontSize: '40px',color: 'crimson' }} ><HiBadgeCheck /></div>
                                <p style={{ fontSize: '18px', padding: '8px 0 0 30px', textAlign: 'justify' }}>
                                    We also try solving the big problem of finding meaningful information about a
                                    buyer or supplier at one place by letting our users gain access to precious
                                    business information such as supplying and buying capacities, frequencies of trade
                                    across product categories and markets… and much more.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=" d-flex mt-5 flex-wrap p-5" style={{ padding: '0 40px',backgroundColor:'rgb(235, 238, 252)'}}>
                    <div className=" col-sm-6">
                        <h1 style={{ paddingBottom: '10px', fontWeight: 'bolder', fontSize: '34px',color: 'crimson' }}>Dashboard</h1>
                        <p style={{ fontSize:'20px' }}>The Ex-Im intelligent dashboard understands your needs.</p>
                        <div className=" d-flex">
                            <div style={{ fontSize: 40,color: 'crimson' }} ><ThumbUpAltIcon /></div>
                            <p style={{ fontSize: '18px', padding: '8px 0 0 30px',textAlign:"justify" }}>
                            It is the offering that is possibly the highest on user requirement, logic and
                             utility quotients.
                            </p>
                        </div>
                        <div className=" d-flex">
                            <div style={{ fontSize: 40,color: 'crimson' }} ><ThumbUpAltIcon /></div>
                            <p style={{ fontSize: '18px', padding: '10px 0 0 30px',textAlign:"justify" }}>
                                AI-enabled “Smart Box” that tracks all the shipment records that you want to keep your 
                                eyes on, to searching companies by their name and grouping them according to their 
                                activities.
                            </p>
                        </div>
                        <div className=" d-flex">
                            <div style={{ fontSize: 40,color: 'crimson' }} ><ThumbUpAltIcon /></div>
                            <p style={{ fontSize: '18px', padding: '8px 0 0 30px',textAlign:"justify" }}>
                                Tracking trade has never been simpler. Ex-Im Dashboard is the only place you need to 
                                visit for all your trade intelligence requirements. Afterall, it’s a smart dashboard 
                                for our ever-growing circle of the smartest clientele on planet Earth.
                            </p>
                        </div>
                    </div>
                    <div className=" col-sm-6 ps-5">
                        <img src={eximDashboardImg} alt="exim-Img" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
