import React from 'react'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">About Me</h2>
              <p className="lead mb-4">
                I am a Full Stack Software Developer & IT Specialist with expertise in modern web technologies.
                Currently based in Germany, I bring a global perspective and years of technical experience.
              </p>
              <a href="/about" className="btn btn-primary">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">My Projects</h2>
              <p className="lead mb-4">
                Explore my portfolio of web applications, mobile apps, and software solutions.
              </p>
              <a href="/projects" className="btn btn-primary">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="lead mb-4">
                Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
              </p>
              <a href="/contact" className="btn btn-primary">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}