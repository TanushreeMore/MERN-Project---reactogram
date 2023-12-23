import React, { useState } from 'react'
import './Login.css';
import socialDesktop from '../imgs/social-desktop.PNG';
import socialMobile from '../imgs/social-mobile.PNG';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const signup = (event)=>{
        event.preventDefault();
        // debugger; // to check it working or not.
        setLoading(true);
    }
  return (
    <div className='container login-container'>
        <div className="row">
            <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center  ">
                <img className='socialDesktop' style={{height: '85%'}} src={socialDesktop} alt='Social Desktop'/>
                <img className='socialMobile' src={socialMobile} alt='Social Mobile'/>
            </div>
            <div className="mt-md-5 col-md-5 col-sm-12">
                <div className="card shadow">
                    {loading ? <div className='col-md-12 mt-3 text-center'>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> : ''}
                    <div className="card-body px-5">
                        <div className="card-title text-center mt-3 fw-bold">
                            Sign Up
                        </div>
                        <form onSubmit={(e)=>signup(e)}>
                            <input type="text" className="p-2 mt-4 mb-2 form-control input-bg" placeholder='Phone'/>
                            <input type="email" className="p-2 mb-2 form-control input-bg" placeholder='Email' 
                            onChange={(ev)=>setEmail(ev.target.value)}/>
                            <input type="text" className="p-2 mb-2 form-control input-bg" placeholder='Full Name' 
                            onChange={(ev)=>setFullName(ev.target.value)}/>
                            <input type="password" className="p-2 mb-2 form-control input-bg" placeholder='Password' 
                            onChange={(ev)=>setPassword(ev.target.value)}/>
                            <div className="mt-3 d-grid">
                                <button className="custom-btn custom-btn-blue" type="submit">Sign Up</button>
                            </div>
                            <div className="my-4">
                                <hr className="text-muted" />
                                <h6 className="text-muted text-center">
                                    OR
                                </h6>
                                <hr className="text-muted" />
                            </div>
                            <div className="mt-3 mb-5 d-grid">
                            <button className="custom-btn custom-btn-white">
                                <span className='text-muted fs-6 '>Already have an account?</span>
                                <Link to="/login" className='ms-1 text-info fw-bold'>Log In</Link>
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp