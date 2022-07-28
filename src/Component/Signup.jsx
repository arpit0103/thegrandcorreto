import React , {useState} from 'react'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

const Signup = () => {

  const [register, setRegister] = useState([{
    fname:"",
    lname:"",
    email:"",
    passsgn:""
  }])
  const supn = (event) => {
    const {name,value} = event.target;
    setRegister((preVal) => {
      return{
        ...preVal,
        [name]:value
      }
    })
  }
  const sgnupbu = () => {
    toast.success(`${register.fname} ${register.lname} Registration Successfull ✔️`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      setRegister('')
  }
  return (
    <div className='sgnup'>
      <div className="cardsgn">
        <div className="sgnhead">
          <h1>Create New Account</h1>
        </div>
        <div className="sgnname">
          <input type="text" placeholder='First Name' className='sgn12' onChange={supn} value={register.fname} name="fname"/>
          <input type="text" placeholder='Last Name' className='sgn22' onChange={supn} value={register.lname} name="lname"/>
        </div>
        <div className="sgnemail">
          <input type="email" placeholder='Enter Email' className='sgnemai' onChange={supn} value={register.email} name="email"/>
        </div>
        <div className="sgnpass">
          <input type="password" placeholder='Enter Password' className='sgnpas' onChange={supn} value={register.pass} name="passssgn" />
        </div>
        <div className="sgnbut">
          <Button variant="outlined" className='sgnbt' onClick={sgnupbu}>Create Account</Button>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#ADEFD1FF" , color:"#00203FFF" }} transition={Flip} />
    </div>
  )

}

export default Signup;