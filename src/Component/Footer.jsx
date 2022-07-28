import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {

   const newDate = new Date().getFullYear();
   console.log(newDate);

  return (

    <footer className="foot">
    <div className="follow">
        <InstagramIcon  
            fontSize='large'
            className='faf'
        />
         <TwitterIcon
            fontSize='large'
            className='faf'
         />
         <MailIcon
            fontSize='large'
            className='faf'
         /> 
    </div>
    <div className="copright">
       <CopyrightIcon 
        fontSize='large'
       /> 
       <p>{newDate} Arpit Pathak</p>
    </div>
    <div className="address">
        <p>xyz xx</p>
        <p>Indore</p>
        <p>987654321</p>
    </div>
    </footer>

  )
}

export default Footer;