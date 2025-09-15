import React from 'react'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="about-card">
              <p style={{ lineHeight: 1.8 }}>
                <i>Hello! I'm <strong>Nikhila</strong>, a passionate <strong>Full Stack Web Developer</strong> from Nizamabad with a degree in <strong>Computer Science & Engineering</strong> from Malla Reddy University.</i>
              </p>
              <p style={{ lineHeight: 1.8 }}>
                <i>I enjoy building responsive websites, exploring new technologies, and solving real-world challenges. I love playing Sudoku, coding for fun, and constantly improving my skills.</i>
              </p>
              <p style={{ lineHeight: 1.8 }}>
                <i>I'm working on projects using <strong>HTML, CSS, JavaScript, Python</strong>, and <strong>SQL</strong>, and learning frameworks like <strong>Flask</strong>. Always open to collaboration and learning.</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
