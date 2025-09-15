import React from 'react'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">A personal site to showcase my work using HTML, CSS, and Bootstrap.</p>
                <a href="#" className="btn btn-secondary" target="_blank" rel="noreferrer">View Code</a>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title">Liver Disease Detection</h5>
                <p className="card-text">A Liver Disease detector using ML and DL with Flask Framework.</p>
                <a href="/Myproject.html" className="btn btn-secondary" target="_blank" rel="noreferrer">View Code</a>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title">Pedestrian Detection</h5>
                <p className="card-text">Pedestrian Detection Using HOGS</p>
                <a href="/pedestrian.html" className="btn btn-secondary" target="_blank" rel="noreferrer">View Code</a>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card p-3">
              <div className="card-body">
                <h5 className="card-title">Online Shopping</h5>
                <p className="card-text">Women online shopping website</p>
                <a href="/Login.html" className="btn btn-secondary" target="_blank" rel="noreferrer">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
