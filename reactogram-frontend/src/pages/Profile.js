import React, { useState } from "react";
import "./Profile.css";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
// import moreAction from "../imgs/more-action.PNG";
import horizontalMoreAction from "../imgs/horizontalMoreAction.PNG";
import "../components/Card.css";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPost, setShowPost] = useState(false);

  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);
  return (
    <div className="container shadow mt-3 p-4">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <img
            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
            alt="Profile Pic"
            className="img-fluid p-2 profile-pic"
          />
          <p className="ms-3 fs-5 fw-bold">Tanu's Story</p>
          <p className="ms-3">Tanushree More</p>
          <p className="ms-3">Junior Web Developer</p>
          <p className="ms-3">
            My Portfolio on{" "}
            <a href="https://www.github.com/TanushreeMore">
              Github/TanushreeMore
            </a>
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between mt-3">
          <div className="d-flex justify-content-equal mx-auto">
            <div className="count-section pe-md-5 pe-4 text-center">
              <h4 className="fw-semibold">10</h4>
              <p>Posts</p>
            </div>
            <div className="count-section px-md-5 px-4 text-center">
              <h4 className="fw-semibold">20</h4>
              <p>Followers</p>
            </div>
            <div className="ps-ms-5 ps-4 text-center">
              <h4 className="fw-semibold">20</h4>
              <p>Following</p>
            </div>
          </div>
          <div className="mx-auto mt-md-0 mt-4">
            <button className="custom-btn custom-btn-white me-md-3 px-4 fw-medium shadow">
              <span className="fs-6 ">Edit Profile</span>
            </button>
            <button className="custom-btn custom-btn-white px-4 fw-medium shadow">
              <span className="fs-6 ">Upload Post</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row mb-md-4">
        <div className="col-md-4 col-sm-12">
          <div className="card mb-md-2 mb-3 " onClick={handleShow}>
            <img
              src="https://plus.unsplash.com/premium_photo-1700391373027-e0ba6c3da990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
              className="card-img-top profile-img"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card mb-md-2 mb-3">
            <img
              src="https://images.unsplash.com/photo-1701986789884-f9d5a9bcf71d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
              className="card-img-top profile-img"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card mb-md-2 mb-3">
            <img
              src="https://images.unsplash.com/photo-1626360052739-03446aabf18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
              className="card-img-top profile-img"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="row mb-md-4">
        <div className="col-md-4 col-sm-12">
          <div className="card mb-md-2 mb-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1700391373027-e0ba6c3da990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
              className="card-img-top profile-img"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card mb-md-2 mb-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1700391373027-e0ba6c3da990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
              className="card-img-top profile-img"
              alt="..."
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card mb-md-2 mb-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1700391373027-e0ba6c3da990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"
              className="card-img-top profile-img"
              alt="..."
            />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div>
                <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://images.unsplash.com/photo-1702404275992-929c62049bfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                        className="d-block w-100 carousel-img"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://images.unsplash.com/photo-1702353180825-138fbbf17c96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                        className="d-block w-100 carousel-img"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://images.unsplash.com/photo-1682695798522-6e208131916d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
                        className="d-block w-100 carousel-img"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row my-3">
                <div className="col-6 d-flex ">
                  <img
                    className="p-2 profile-pic-card"
                    alt="Profile"
                    src="https://images.unsplash.com/photo-1494979362559-7f9efdc9b88c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlncmVzc3xlbnwwfHwwfHx8MA%3D%3D"
                  />
                  <div className="mt-2 ms-2 ">
                    <p className="fs-5 fw-bold">Title</p>
                    <p className="location">Description</p>
                  </div>

                  <div className="dropdown ms-5">
                    <a
                      className="btn"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <img className="" alt="more action" src={horizontalMoreAction} />
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-regular fa-pen-to-square px-2"></i>
                          Edit Post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="fa-sharp fa-solid fa-trash px-2"></i>
                          Delete Post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-6">
                    <img
                      className="float-end fs-3 p-2 mt-2"
                      src={moreAction}
                      alt="more action"
                    />
                  </div> */}

              <div className="row">
                <div className="col-12">
                  <span className="p-2 text-muted">2 Hours Ago</span>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-12 ms-2 ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae, accusamus.
                  </p>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-6 d-flex">
                  <i class="ps-2 fs-4 fa-regular fa-heart"></i>
                  <i class="ps-2 fs-4 fa-regular fa-comment"></i>
                  <i class="ps-2 fs-4 fa-solid fa-location-arrow"></i>
                </div>
                <div className="col-12 mt-3 ms-2">
                  <span className="fs-6 fw-bold">200 likes</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showPost} onHide={handlePostClose} size="lg" centered>
        <Modal.Header closeButton>
          <span className="fw-bold fs-5">Upload Post</span>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">
              <div className="upload-box">
                <div className="dropZoneContainer">
                  <input
                    type="file"
                    id="drop_zone"
                    className="FileUpload"
                    accept=".jpg,.png,.gif"
                    onchange="handleFileSelect(this) "
                  />
                  <div className="dropZoneOverlay">
                    <i class="fa-solid fa-cloud-arrow-up fs-1"></i>
                    <br />
                    Upload Photo From Computer
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Add Caption"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Add Caption</label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Add Location"
                    />
                    <label for="floatingInput">
                      <i className="fa-solid fa-location-pin pe-2"></i>Add
                      Location
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button className="custom-btn custom-btn-pink float-end">
                    <span className="fs-6 fw-600">Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
