import React from 'react'

export default function Hero() {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 text-center text-md-start">
            <h1>Gatadi Nikhila</h1>
            <p className="lead">Aspiring Full Stack Developer | HTML, CSS, JavaScript, ReactJS, Python, SQL</p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-circle profile-img mb-3"
              width="130"
              height="150"
            />
            <div>
              <a href="/Nikhila_Gatadi_Resume.pdf" className="btn btn-custom mt-2" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
