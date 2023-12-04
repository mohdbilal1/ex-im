import { Box, Button, FormControl, MenuItem, Select, TextField, TextareaAutosize } from "@mui/material";
import Navbar from "./Header";
import countries from "../Api/countryData";
import { useState } from "react";
import contactImg from '../images/contact-banner.jpg'
import Footer from "./Footer";
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';




const Contact = () => {
    const [country, setCountry] = useState();
    const [state, setState] = useState(true);

    const selectHandleChange = (event) => {
        setCountry(event.target.value);
    };
    const sendbtnHandle = () => {
        setState(!state);
    };

    return (
        <>
            <Navbar />

            <div className="d-flex mb-5" style={{ paddingTop: '45px' }}>
                <div className="col-sm-6 text-center rounded-3" style={{
                    margin: '10px 20px',
                    padding: '10x 10px 10px 80px', backgroundColor: 'rgb(235, 238, 252)'
                }}
                >
                    <h1 className=" fw-bolder pt-2" style={{color:'crimson',
                        fontSize: '32px', padding: '10px 0 0 20px', letterSpacing: 1
                    }}
                    >Contact US</h1>
                    <p style={{
                        fontSize: '18px', padding: '5px 0 0 20px',
                        letterSpacing: 1
                    }}>Enough talk. Let’s "demo-talk"!
                    </p>
                    <img style={{width:'550px',height:'auto',paddingRight:'70px',borderRadius:'10px'}} src={contactImg} alt="contact-img" />
                    <p style={{
                        fontSize: '16px', padding: '25px 0 0 20px',
                        letterSpacing: 1
                    }}
                    >Alternatively, you can send us an email at <a href="/">info@ex-im.com</a>.</p>

                </div>
               {state ? <div className="col-sm-5">

                    <Box sx={{ padding: '10px' }}>
                        <FormControl
                            className="p-5"
                            sx={{
                                display: "flex", padding: '20px', bgcolor: 'rgb(235, 238, 252)'
                                , border: '1px solid grey', borderRadius: '10px'
                            }}
                        >
                            <TextField label="Name" variant="outlined" id='12' sx={{ mb: 3, bgcolor: 'white' }} required />
                            <Select
                                autoWidth
                                required
                                value={country}
                                sx={{ mb: 3, bgcolor: 'white' }}
                                // label='Select Country'
                                onChange={selectHandleChange}
                            >
                                <MenuItem selected label='Select country'>Select country</MenuItem>
                                {countries.map((item) => {
                                    return (
                                        <MenuItem value={item.dial_code}>{item.name}</MenuItem>
                                    )
                                })}

                            </Select>
                            <div>
                                <button style={{
                                    width: '60px', height: '56px', borderRadius: '5px 0px 0px 5px', border: 'none',
                                    padding: '8px', backgroundColor: 'crimson', color: 'white', fontSize: '12px'
                                }}
                                ><AddIcon />{country}</button>
                                <TextField type="number" label="Phone number" variant="outlined" 
                                sx={{ mb: 3, bgcolor: 'white' ,minWidth:'346px' }} required />

                            </div>
                            <TextField type="email" label="Email" variant="outlined" sx={{ mb: 3, bgcolor: 'white' }} required />
                            <TextField label="Company name" variant="outlined" sx={{ mb: 3, bgcolor: 'white' }} required />
                            <TextareaAutosize placeholder="  Your message" minRows={5} required/>

                            <div className=" mt-3 d-flex">
                                <Button type="submit" variant="contained"
                                    onClick={sendbtnHandle}
                                    sx={{ position: 'absolute', right: '40px',bgcolor:'crimson' }}>
                                    Send a message
                                </Button>
                            </div>
                        </FormControl>
                    </Box>
                </div>:
                <div className="col-sm-5 text-center bg-light  rounded-4 p-5
                   align-content-center position-relative"
                   style={{backgroundColor: 'rgb(235, 238, 252)'}}
                   >
                    <CheckCircleIcon sx={{color:'green',fontSize:'70px',mb:2,mt:5}}/>
                    <h5 className='text-success p-3'>Thank you for your interest in speaking with us. 
                    A member of our team will contact you soon.
                    </h5>
                </div>}
            </div>
           
            <Footer />
        </>
    )
}
export default Contact;