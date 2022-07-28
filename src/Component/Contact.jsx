import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
const Contact = () => {
  const [subcon, setSubcon] = useState([{
    fname:"",
    email:"",
    text:""
  }])
  const subchng = (event) => {
    const {name,value} = event.target;
    setSubcon((preVal) => {
      return{
        ...preVal,
        [name]:value
      }
    })
  }
  const conbt = () => {
    toast.success(`${subcon.fname} Message Sent Succssfull`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  const clearsub = () => {
    setSubcon('')
  }
  return (
    <section className="contact">
    <div className="wrap">
      <div className="wave"></div>
    </div>
      <div className="contactmain">
      <div className="contcont">
        <h2 className='contacthead'>GET IN TOUCH</h2>
        <h2 className='contactpara'>Send us a message</h2>
        <div className="formcon">
            <form action="" className='contfrom'>
              <div className="nameinp">
                <div className="nameemai">
                <input type="text" className='nameem' placeholder='Your Name' name="fname" value={subcon.fname} onChange={subchng}/>
                <input type="email" className='nameem nameem1' placeholder='Your Email'name="email" value={subcon.email} onChange={subchng}/>
                </div>
                <input type="number" className='nammob' placeholder='Your Number' name="text" value={subcon.text} onChange={subchng}/>
                <textarea name="" id="" cols="30" rows="5" placeholder='Type Your Message...' className='txtara'></textarea>
              </div>
              <div className="call">
                <p>Ready To Know How We Can Help You.?</p>
                <p>xyz@gmail.com</p>
                <p>987654321</p>
              </div>
            </form>
            <p className='chck'>
              <input type="checkbox"/>Yes, I would like to receive communications by call / email?
            </p>
        </div>
          <Button className='conbtn' variant='outlined' onClick={conbt} >Submit</Button>
          <Button className='conbtn btncn' variant='outlined' onClick={clearsub} >Reset</Button>
          </div>
          <ToastContainer toastStyle={{ backgroundColor: "#ADEFD1FF" , color:"#00203FFF" }} transition={Flip} />
        </div>
    </section>  
  )
}

export default Contact;