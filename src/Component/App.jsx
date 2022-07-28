import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
// import Center from './Center';
import Contact from './Contact';
import Login from './Login';
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup';
import Ourproduct from './Ourproduct';

const App = () => {
  return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/ourproduct' element = {<Ourproduct/>}/>
                {/* <Route path='/center'  element = {<Center/>} /> */}
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/about'  element = {<About/>} />
                <Route path='/login' element = {<Login/>}/>
                <Route path='/login/signin' element = {<Signin/>}/>
                <Route path='/login/signup' element = {<Signup/>}/>
            </Routes>
            <Footer/>
        </>
  )
}

export default App;