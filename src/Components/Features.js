import { Box, Button } from "@mui/material";
import Navbar from "./Header";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import featureImg from '../images/feature-banner.jpg'
import Footer from "./Footer";

const Features = () => {
    return (
        <>
            <Navbar />
            <Box>
            <div className="d-flex mb-5 pb-5" style={{ backgroundColor: 'rgb(235, 238, 252)', paddingTop: '45px' }}>
                <div className="col-sm-6">
                    <h1 className=" fw-bolder" style={{ fontSize: '50px', padding: '90px 0 0 90px',
                      letterSpacing: 1, color: 'crimson',textAlign:"justify"  }}>Features
                    </h1>
                    <p style={{mt:2, fontSize:'18px', padding: '10px 0 0 90px',letterSpacing:1,textAlign:"justify"}}>Making technology, information, and actionable intelligence work better for your EXIM 
                        business. Access millions of buyer and seller company profiles from across the world. 
                        Leverage the power of AI and Big Data to grow your business beyond borders.
                    </p>
                </div>
                <div className="col-sm-6 ms-5">
                    <img style={{width:'550px',height:'auto',borderRadius:'10px'}} src={featureImg} alt="features-Banner-img" />
                </div>
            </div>
                    <div className="d-flex flex-wrap" style={{ padding: '30px 0 0 30px' }}>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Foreign Buyers</h5>
                            <p style={{ fontSize: '18px' }}>Identify buyers. Biggest problem solved!</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Competitor Analysis</h5>
                            <p style={{ fontSize: '18px' }}>Stay alert. Track and see what they do.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Foreign Suppliers</h5>
                            <p style={{ fontSize: '18px' }}>Active and reliable profiles. Precious.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Focus Markets</h5>
                            <p style={{ fontSize: '18px' }}>Turn new geographies into established revenue centres.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Reduce Risks</h5>
                            <p style={{ fontSize: '18px' }}>Risk-taking is good. Take informed actions with Ex-Im.com.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12  text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Your Dashboard</h5>
                            <p style={{ fontSize: '18px' }}>Built on cloud to make you faster and efficient.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Foreign Buyers</h5>
                            <p style={{ fontSize: '18px' }}>Identify buyers. Biggest problem solved!</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Competitor Analysis</h5>
                            <p style={{ fontSize: '18px' }}>Stay alert. Track and see what they do.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Foreign Suppliers</h5>
                            <p style={{ fontSize: '18px' }}>Active and reliable profiles. Precious.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Focus Markets</h5>
                            <p style={{ fontSize: '18px' }}>Turn new geographies into established revenue centres.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Reduce Risks</h5>
                            <p style={{ fontSize: '18px' }}>Risk-taking is good. Take informed actions with Ex-Im.com.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12  text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Your Dashboard</h5>
                            <p style={{ fontSize: '18px' }}>Built on cloud to make you faster and efficient.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Foreign Buyers</h5>
                            <p style={{ fontSize: '18px' }}>Identify buyers. Biggest problem solved!</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Competitor Analysis</h5>
                            <p style={{ fontSize: '18px' }}>Stay alert. Track and see what they do.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Foreign Suppliers</h5>
                            <p style={{ fontSize: '18px' }}>Active and reliable profiles. Precious.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Focus Markets</h5>
                            <p style={{ fontSize: '18px' }}>Turn new geographies into established revenue centres.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Reduce Risks</h5>
                            <p style={{ fontSize: '18px' }}>Risk-taking is good. Take informed actions with Ex-Im.com.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12  text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Your Dashboard</h5>
                            <p style={{ fontSize: '18px' }}>Built on cloud to make you faster and efficient.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12 pb-5 text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Reduce Risks</h5>
                            <p style={{ fontSize: '18px' }}>Risk-taking is good. Take informed actions with Ex-Im.com.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12  text-center" style={{ margin: '20px 45px 0 45px' }}>
                            <SignalCellularAltIcon sx={{ fontSize: '70px', color: 'white', bgcolor: 'crimson', borderRadius: '10px', padding: '10px' }} />
                            <h5 style={{ fontWeight: 'bold', margin: '20px 0 20px 0' }}>Your Dashboard</h5>
                            <p style={{ fontSize: '18px' }}>Built on cloud to make you faster and efficient.</p>
                        </div>
                    </div>
                    <div>
                        <a href="/Plans&Pricing">
                            <Button variant="contained" sx={{ mb: 5, left: '85%',letterSpacing:2}} 
                             style={{padding:'10px 30px'}}>Plans</Button>
                        </a>
                    </div>
                </Box>
                <Footer/>
        </>
    )
}
export default Features;