import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
        <div className="row">
            <div className="col-md-6 d-flex flex-column">
            <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="Profile Pic" className="img-fluid p-2 profile-pic" />
            <p className="ms-2 fs-5 fw-bold">Tanu's Story</p>
            <p className="ms-2">Tanushree More</p>
            <p className="ms-2">Junior Web Developer</p>
            <p className="ms-2">My Portfolio on <a href="https://www.github.com/TanushreeMore">www.github.com/TanushreeMore</a></p>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
                <div className='d-flex justify-content-equal'>
                  <div className='count-section pe-5 text-center'>
                    <h4 className='fw-semibold'>10</h4>
                    <p>Posts</p>
                  </div>
                  <div className='count-section px-5 text-center'>
                    <h4 className='fw-semibold'>20</h4>
                    <p>Followers</p>
                  </div>
                  <div className="ps-5 text-center">
                    <h4 className='fw-semibold'>20</h4>
                    <p>Following</p>
                  </div>
                </div>
                <div className='mx-auto'>
                  <button className="custom-btn custom-btn-white me-md-3 px-4 fw-medium shadow">
                    <span className='fs-6 '>Edit Profile</span>
                  </button>
                  <button className="custom-btn custom-btn-white px-4 fw-medium shadow">
                    <span className='fs-6 '>Upload Post</span>
                  </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile