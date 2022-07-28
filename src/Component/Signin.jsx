import React ,{useState} from 'react'
import Button from '@mui/material/Button';
import { EventNoteTwoTone } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { color } from '@mui/system';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';


const Signin = () => {
  const [show, setShow] = useState('');
  const [val,setVal] = useState('');
  const chng = (event) => {
    setShow(event.target.value);
  }
  const pas = (event) =>{
    setVal(event.target.value);
  }
  const sub = () => {
    // alert(`${show} you are successfuly logged in`)
    toast.success(`${show} Login Successfull ✔️`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    setShow('');
    setVal('');
  }
  return (
    <div className='sin'>
      <div className="login">
        <div className="username">
            <input type="text" 
              id="username1" 
              placeholder="Username"
              onChange={chng}
              value={show}
              autoComplete='off'
              /> 
              <br/>
            <input type="password" 
              id="password" 
              placeholder="Password"
              onChange={pas}
              value={val}
              />  
            <br/>
        </div>
        <div className="enquiry">
            <input type="checkbox"
               name="" 
               id="chckb" 
               />
            <p id='enq'>Remember Me</p>
        </div>
        <div className="btnsin">
            <Button variant='outlined' fontSize="large" className='lbtn' onClick={sub}>Login</Button>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#ADEFD1FF" , color:"#00203FFF" }} transition={Flip} />
    </div>
  )
}

export default Signin;