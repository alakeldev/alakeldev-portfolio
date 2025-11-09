import React from 'react'
import Image from 'next/image'

interface HeaderProps {
  className?: string
  anchorId?: string
  avatarAlt?: string
}

const Header: React.FC<HeaderProps> = ({
  className = '',
  anchorId = 'projects',
  avatarAlt = 'Abdullah Alakel',
}) => {
  return (
    <header className={`pt-5 mainHeader ${className}`} id="header">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center mt-5 mt-md-0">
            <h3 className="fw-bold lh-1 secondaryTextHeader">ABDULLAH ALAKEL</h3>
            <h1 className="text-center lh-1 mb-5 mainTextHeader">
              Full Stack Software Developer &amp; IT Specialist
            </h1>
            <a href={`#${anchorId}`} aria-label={`Scroll to ${anchorId}`}>
              <button className="btn viewMyProjectsBtn text-black">View My Projects</button>
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <div className="my-5" style={{ maxWidth: 320 }}>
              <Image
                src="/images/myavatar.png"
                alt={avatarAlt}
                width={320}
                height={320}
                className="img-fluid w-100 rounded-circle custom-shadow"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

