import React from 'react'

export default function Education() {
  return (
    <section id="education" className="bg-black">
      <div className="container">
        <h2 className="text-center">Education</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 mb-4">
            <div className="card bg-dark text-white shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-pink fw-bold">B.Tech in Computer Science & Engineering</h5>
                <h6 className="card-subtitle mb-2">Malla Reddy University</h6>
                <p className="card-text">2021 – 2025 | CGPA: <strong>8.0</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card bg-dark text-white shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-pink fw-bold">Intermediate (MPC)</h5>
                <h6 className="card-subtitle mb-2">SR Junior College</h6>
                <p className="card-text">2019 – 2021 | Percentage: <strong>75.6%</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card bg-dark text-white shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title text-pink fw-bold">10th (SSC)</h5>
                <h6 className="card-subtitle mb-2">Brilliant Grammar High School</h6>
                <p className="card-text">2018 – 2019 | CGPA: <strong>9.0</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
