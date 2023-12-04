import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';

const plans_pricing_data=[
    {
    Features:'Products/HS Code Search',
    start:<span className='fs-5'>10</span>,
    Silver:<span className='fs-5'>Unlimited</span>,
    Platinum:<span className='fs-5'>Unlimited</span>,
    Platinum2 : <span className='fs-5'>Unlimited</span>
},
{
    Features:'Profile views',
    start:<span className='fs-5'>50</span>,
    Silver:<span className='fs-5'>200</span>,
    Platinum:<span className='fs-5'>Unlimited</span>,
    Platinum2 :<span className='fs-5'>Unlimited</span>
},
{
    Features:'Buy/Sell Pattern Analysis',
    start:<CheckCircleIcon sx={{color:'green'}}/>,
    Silver:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Transactional Details',
    start:<CheckCircleIcon sx={{color:'green'}}/>,
    Silver:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Product Basket Analysis',
    start:<CheckCircleIcon sx={{color:'green'}}/>,
    Silver:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Company Nexus',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Product Nexus',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Nexus 2.0',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Contact Info',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<span className='fs-5'>10</span>,
    Platinum2 :<span className='fs-5'>20</span>
},
{
    Features:'Trade Analysis',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Downloads',
    start: <span className='fs-5'>0</span>,
    Silver:<span className='fs-5'>0</span>,
    Platinum:<span className='fs-5'>5,00,000</span>,
    Platinum2 : <span className='fs-5'>15,00,000</span>,
},
{
    Features:'Port Analysis',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Smart Box',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Company Search',
    start:<CancelIcon sx={{color:'red'}}/>,
    Silver:<CancelIcon sx={{color:'red'}}/>,
    Platinum:<CheckCircleIcon sx={{color:'green'}}/>,
    Platinum2 : <CheckCircleIcon sx={{color:'green'}}/>
},
{
    Features:'Validity',
    start:<span className='fs-5'>6 Months</span>,
    Silver: <span className='fs-5'>12 Months</span>,
    Platinum: <span className='fs-5'>12 Months</span>,
    Platinum2 :<span className='fs-5'>24 Months</span> 
},
{
    Features:'',
    start: <span className=' fw-bolder fs-2 '>$1,500</span>,
    Silver:<span className=' fw-bolder fs-2 '>$2,000</span>,
    Platinum: <span className=' fw-bolder fs-2 '>$3,000</span>,
    Platinum2 :<span className=' fw-bolder fs-2 '>$5,000</span>, 
},
{
    Features:'',
    start:<Button className='custom'variant='contained'>Get In Touch</Button>,
    Silver:<Button variant='contained' >Get In Touch</Button>,
    Platinum: <Button variant='contained' >Get In Touch</Button>,
    Platinum2 :<Button variant='contained' >Get In Touch</Button>
}
]

export default plans_pricing_data;

