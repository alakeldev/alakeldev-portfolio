import React, { useState } from 'react'

interface AboutSectionProps {
  title: string
  index: number
  openIndex: number | null
  setOpenIndex: (i: number | null) => void
  children: React.ReactNode
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, index, openIndex, setOpenIndex, children }) => {
  const isOpen = openIndex === index
  const panelId = `about-panel-${index}`

  return (
    <div className="card text-center mainCardAccordion">
      <div className="card-header mainCardHeader">
        <button
          type="button"
          className="modern-button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          {title}
        </button>
      </div>

      <div id={panelId} className={`collapse ${isOpen ? 'show' : ''}`} aria-hidden={!isOpen}>
        <div className="card-body align-items-center">{children}</div>
      </div>
    </div>
  )
}

const skills: { name: string; value: number }[] = [
  { name: 'Javascript', value: 90 },
  { name: 'Typescript', value: 80 },
  { name: 'Python', value: 75 },
  { name: 'PHP', value: 60 },
  { name: 'C#', value: 20 },
  { name: 'SQL', value: 75 },
  { name: 'HTML5', value: 90 },
  { name: 'CSS3', value: 85 },
]

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="text-light py-5" id="about">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-5 text-center text-uppercase">About Me</h2>

          <div className="accordion w-100" id="about-accordion">
            <AboutSection title="Tech Story" index={0} openIndex={openIndex} setOpenIndex={setOpenIndex}>
              <ul>
                <li className="mb-4">
                  Currently based in Germany, I have gained a global perspective and adaptability through living in several countries. My passion for IT began in my school days and has driven my lifelong commitment to expanding my expertise in the field.
                </li>
                <li className="mb-4">
                  I am a dedicated IT professional with a diverse educational background, holding a Diploma in Economy and Commerce (Banking Systems) from Damascus University and a Bachelor’s degree in Information Technology from Syrian Virtual University.
                </li>
                <li className="mb-4">
                  With over five years of experience as an IT technician in Abu Dhabi, I honed my skills in technical support, system maintenance, and troubleshooting. My expertise was further solidified through a Diploma in Full Software Development from Code Institute, equipping me with comprehensive programming and development skills.
                </li>
                <li className="mb-4">I am passionate about leveraging my technical knowledge and problem-solving abilities to drive innovation and organizational success.</li>
              </ul>
            </AboutSection>

            <AboutSection title="Tech Skills" index={1} openIndex={openIndex} setOpenIndex={setOpenIndex}>
              <ul className="ohneDicoration list-unstyled">
                {skills.map((s) => (
                  <li key={s.name} className="mb-4">
                    <strong>{s.name}</strong>
                    <div className="progress progressBarLanguages" style={{ height: 20 }} aria-hidden="false">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${s.value}%` }}
                        aria-valuenow={s.value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {`${s.value}%`}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AboutSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
