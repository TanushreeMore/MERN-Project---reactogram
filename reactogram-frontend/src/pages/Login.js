import React from 'react';
import './Login.css';
import socialDesktop from '../imgs/social-desktop.PNG';

const Login = () => {
  return (
    <div className='container login-container'>
        <div className="row">
            <div className="col-md-7">
                <img src={socialDesktop} alt='Social Desktop'/>
            </div>
            <div className="col-md-5">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="card-title text-center mt-3 fw-bold">
                            Log In
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login