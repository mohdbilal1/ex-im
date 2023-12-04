import { AppBar, Box, Button, Drawer, IconButton, List } from '@mui/material'
import { NavLink } from "react-router-dom";
import '../stylecss/headerstyle.css'
import imgeLogo from '../images/logo-1.png'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';






const Navbar = ({ clickbtn2 }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const openHandle = () => {
        setOpenDrawer(!openDrawer);
    }

    //mobile size
    const drawer = () => {
        return (
            <>
                <AppBar onClick={openHandle} sx={{ bgcolor: 'white',width:'100%',pl:5 ,height:'25%'}} >
                    
                    <div className=' d-flex'>
                    <div className='pt-2 pb-2'>
                        <a href="/">
                            <img src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <IconButton
                    sx={{ mb: 1,color:'white',position:'relative',left:200,bgcolor:'crimson',p:1 ,height:'30px'
                    ,display: { sm: 'none' }, borderRadius:1,mt:3}}
                    aria-label="open drawer"
                    size="large"
                    onClick={openHandle}
                    
                >
                    <MenuIcon />
                </IconButton>
                    </div>
                    <List >

                        <li className='nav-list'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/about'>About Us</NavLink>
                        </li>
                        <li className='nav-list' onClick={clickbtn2}>
                            <NavLink to='/Plans&Pricing'>Plans & Pricing</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/Features'>Features</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/OurData'>Our Data</NavLink>
                        </li>
                        <li className='nav-list'>
                            <NavLink to='/Contact'>Contact Us</NavLink>
                        </li>
                        <li>
                            <a href='/login' className='nav-list-btn'>
                                <Button variant='contained'
                                    sx={{ padding: '6px 20px', mt: 1.5, bgcolor: 'crimson',width:'25%' }}
                                >
                                    Login
                                </Button>
                            </a>
                        </li>
                    </List>
                </AppBar>
            </>
        )
    }
    return (
        <>

            <AppBar sx={{
                bgcolor: 'white', textAlign: 'center',
                position: 'sticky', top: 0, boxShadow: 'none'
            }}
            >

                <Box sx={{ display: 'flex', pt: 2, pb: 2 }}>
                    <div className='logo-img-div pt-2 pb-2'>
                        <a href="/">
                            <img src={imgeLogo} alt="logo-img" />
                        </a>
                    </div>
                    <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <List sx={{display:'flex'}}>

                            <li className='nav-list'>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/about'>About Us</NavLink>
                            </li>
                            <li className='nav-list' onClick={clickbtn2}>
                                <NavLink to='/Plans&Pricing'>Plans & Pricing</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/Features'>Features</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/OurData'>Our Data</NavLink>
                            </li>
                            <li className='nav-list'>
                                <NavLink to='/Contact'>Contact Us</NavLink>
                            </li>
                            <li>
                                <a href='/login' className='nav-list-btn'>
                                    <Button variant='contained'
                                        sx={{ padding: '6px 20px', mt: 1.5, ml: 5, bgcolor: 'crimson' }}
                                    >
                                        Login
                                    </Button>
                                </a>
                            </li>
                        </List>
                    </Box>
                    <IconButton
                    sx={{ mb: 1,color:'white',position:'relative',left:100 ,bgcolor:'crimson',p:1 ,height:'30px'
                    ,display: { sm: 'none' }, borderRadius:1,mt:3 }}
                    aria-label="open drawer"
                    size="large"
                    onClick={openHandle}
                    
                >
                    <MenuIcon />
                </IconButton>
                </Box>
               

            </AppBar>
            <Box>
                <Drawer
                    open={openDrawer}
                    onClose={openHandle}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    {drawer()}
                </Drawer>
            </Box>
            

        </>
    )
}
export default Navbar;