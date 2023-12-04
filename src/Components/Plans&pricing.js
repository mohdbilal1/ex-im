import Navbar from "./Header";
import plansBanner from '../images/plans-pricing.jpg'
import Footer from "./Footer";
import plans_pricing_data from '../Api/planspricingData'
import {
    Box, Button, Checkbox, FormControl, MenuItem, Select, Table,
    TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography
} from "@mui/material";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useState } from "react";
import countries from "../Api/countryData";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';



const PlansAndPrice = () => {
    const [country, setCountry] = useState();
    const [state, setState] = useState(true)
    const [login, setLogin] = useState(false)

    const selectHandleChange = (event) => {
        setCountry(event.target.value);
        // console.log(country);
    };
    const clickbtn = () => {
        setState(false);
    }
    const clickbtn2 = () => {
        setState(true);
    }
    const loginSuccess = () => {
        setLogin(true);
    }

    return (
        <>
            <Navbar clickbtn2={clickbtn2} />
            <div className="d-flex mb-5 pb-5" style={{ backgroundColor: 'rgb(235, 238, 252)', paddingTop: '45px' }}>
                <div className="col-sm-6">
                    <h1 className=" fw-bolder" style={{ fontSize: '50px', padding: '130px 0 0 100px',
                     letterSpacing: 1,color: 'crimson' }}>Plans & Pricing
                    </h1>
                </div>
                <div className="col-sm-6">
                    <img style={{width:'550px',height:'auto',borderRadius:'10px'}}src={plansBanner} alt="Plan-Banner-img" />
                </div>
            </div>
            {state ? <div>
                <TableContainer sx={{ padding: '0 10px' }}>
                    <Table sx={{ mb: 5, border: '1px solid rgb(219, 238, 252)' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: 'crimson', fontWeight: 'bolder', fontSize: '20px', bgcolor: 'rgb(235, 238, 252)' }} align="center">Features</TableCell>
                                <TableCell sx={{ color: 'crimson', fontWeight: 'bolder', fontSize: '20px' }} align="center">Start</TableCell>
                                <TableCell sx={{ color: 'crimson', fontWeight: 'bolder', fontSize: '20px' }} align="center">Silver</TableCell>
                                <TableCell sx={{ color: 'white', bgcolor: 'crimson', fontWeight: 'bolder', fontSize: '20px' }} align="center">Platinum</TableCell>
                                <TableCell sx={{ color: 'crimson', fontWeight: 'bolder', fontSize: '20px' }} align="center">Platinum+</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {plans_pricing_data.map((item) => {
                                // console.log(item);
                                if (item.Features) {
                                    return (
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: 'bolder', fontSize: '18px'}}>{item.Features}</TableCell>
                                            <TableCell sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.start}</TableCell>
                                            <TableCell sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.Silver}</TableCell>
                                            <TableCell sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.Platinum}</TableCell>
                                            <TableCell sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.Platinum2}</TableCell>
                                        </TableRow>
                                    )
                                } else {
                                    return <TableRow>
                                        <TableCell sx={{ fontWeight: 'bolder', fontSize: '18px' }}>{item.Features}</TableCell>
                                        <TableCell onClick={clickbtn} sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.start}</TableCell>
                                        <TableCell onClick={clickbtn} sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.Silver}</TableCell>
                                        <TableCell onClick={clickbtn} sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.Platinum}</TableCell>
                                        <TableCell onClick={clickbtn} sx={{ bgcolor: 'rgb(235, 238, 252)' }} align="center">{item.Platinum2}</TableCell>
                                    </TableRow>
                                }

                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
                <Box>
                    <div className="col-md-12 fw-bolder fs-2 text-center " style={{ color: 'crimson' }}>
                        EX-IM Features

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
                    </div>
                    <div>
                        <a href="/Features">
                            <Button variant="contained" sx={{ mb: 5, left: '85%' }}>Read more...</Button>
                        </a>
                    </div>
                </Box>
            </div> : <Box sx={{ padding: '10px' }}>
                <Typography sx={{ fontSize: '18px', ml: 5, mr: 5,color: 'crimson',fontWeight: 'bold' }}>If you wish to purchase the license and know more about our subscription packages,
                    please fill up this quick form and we will connect with you at the earliest.
                </Typography>
                <FormControl
                    className="col-sm-6 m-5"
                    sx={{
                        display: "flex", bgcolor: 'rgb(235, 238, 252)', padding: '20px'
                        , border: '1px solid grey', borderRadius: '10px', position: 'relative', left: '300px'
                    }}
                >
                    <TextField label="Name" variant="outlined" id='12' sx={{ mb: 3, bgcolor: 'white' }} required />
                    <TextField type="email" label="Email" variant="outlined" sx={{ mb: 3, bgcolor: 'white' }} required />
                    <TextField label="Company name" variant="outlined" sx={{ mb: 3, bgcolor: 'white' }} required />
                    
                    <Select
                        autoWidth
                        required
                        value={country}
                        sx={{ mb: 3, bgcolor: 'white' }}
                        label='Select Country'
                        onChange={selectHandleChange}
                    >
                        <MenuItem selected label='Select country'>Select country</MenuItem>
                        {countries.map((item) => {
                            return (
                                <MenuItem value={item.dial_code}>{item.name}</MenuItem>
                            )
                        })}

                    </Select>
                    <div className=" d-flex">
                        <button style={{
                            width: '60px', height: '56px', borderRadius: '5px 0px 0px 5px', border: 'none',
                            padding: '8px', backgroundColor: 'crimson', color: 'white', fontSize: '12px'
                        }}
                        ><AddIcon />{country}</button>

                        <TextField type="number" label="Phone number" variant="outlined"
                            sx={{ mb: 3, bgcolor: 'white', minWidth: '515px' }} required />
                    </div>
                    <div className="d-flex">
                        <Checkbox required /><Typography sx={{ mt: 1.2, fontWeight: 'bold', fontSize: '12px' }}>I have read the <a href="/">terms and conditions</a>,
                            <a href="/">disclaimer</a>,
                            <a href="/">privacy and other policies</a> present on this website and I agree to all of them.
                        </Typography>
                    </div>
                    <div className=" mt-4">
                        <Button href="/Plans&Pricing" variant="outlined"  sx={{ bgcolor: 'white' }}>Back to Plans & Pricing</Button>
                        <Button type="submit" variant="contained"

                            sx={{ position: 'absolute', right: '40px' }} onClick={loginSuccess}>Submit
                        </Button>
                    </div>
                </FormControl>
            </Box>}
            

           {login && <div className="col-sm-6 text-center bg-light  rounded-4 p-5 
                 align-content-center" style={{position:'relative',left:'25%'}}>
                <CheckCircleIcon sx={{ color: 'green', fontSize: '70px', mb: 2 }} />
                <h5 className='text-success'>You have taken the right first step toward finding a real solution for your EXIM business.
                    One of our Ex-Im experts will contact you soon.
                </h5>
            </div>}
            
            <Footer />
        </>
    )
}
export default PlansAndPrice;