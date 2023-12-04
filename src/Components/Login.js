
import { Button, Link, TextField, Typography } from '@mui/material';
import imgeLogo from '../images/logo-1.png'
import '../stylecss/loginstyle.css'


const Login = () => {
    return (
        <>

            <div className='login-main-div' style={{width:'100%',height:"100vh"}}>
                
                <div style={{ display: "flex",paddingTop:'120px',paddingLeft:'80px',color:'white' }}>
                    <div className="col-md-6 me-5">
                        <div className="login-left">
                            <div className="logo-sec">
                                <a href="/">
                                    <img src={imgeLogo} style={{ maxWidth: "100%" }} alt='img-logo' />
                                </a>
                            </div>
                            <h1 className='fw-bolder fs-1'>Welcome to the<br />Future of Ex-Im technology</h1>
                            <p className='fs-5'>Live the tomorrow of technology in foreign trade, today.</p>
                        </div>
                    </div>

                    <div className="col-md-6" style={{width:'450px'}}>
                        <form className=' form-control' style={{padding:'50px 50px 70px 50px',borderRadius:'15px'}}>
                            <h1 className=' fw-bolder' style={{fontSize:'45px',marginBottom:'40px'}}>Login</h1>
                            <TextField id="outlined-basic" label="Email ID" 
                               variant="outlined" required fullWidth 
                            /><br/>
                            <Link fontSize={'small'} sx={{float:'right',marginBottom:'25px',padding:'5px' }}>Forgot Email?</Link><br/>
                            <Button variant='contained' sx={{borderRadius:'30px', padding:'10px 0'}} size='large'  fullWidth>Next</Button><br/>
                            <Link fontSize={'small'} sx={{float:'right',padding:'5px'}}>Trouble in login?</Link>
                        </form>
                    </div>
                </div>
                <Typography sx={{color:'white', textAlign:'center',margin:'55px 0', fontSize:'small'}}>Copyright @2023 ex-im All rights reserved</Typography>
              
            </div>


        </>
    )
}
export default Login;











