import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

type SectionId = 'header' | 'about' | 'projects' | 'contact' | string

interface NavBarProps {
	className?: string
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
	const [activeSection, setActiveSection] = useState<SectionId>('header')
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	useEffect(() => {
		setActiveSection('header')
	}, [])

	const handleNavClick = (sectionId: SectionId) => {
		setActiveSection(sectionId)
		setIsOpen(false)

		if (sectionId === 'contact') {
			// Prefer navigating to the dedicated contact page if present
			router.push('/contact')
			return
		}
		const el = document.getElementById(String(sectionId))
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<>
			<nav
				className={`navbar navbar-expand-lg bg-body-tertiary w-100 fixed-top z-1 ${className}`}
				data-bs-theme="dark"
				aria-label="Primary navigation"
			>
				<div className="container">
          <Link href="/" className="navbar-brand fs-4 d-flex align-items-center">
            <Image src="/images/alakel.png" alt="website logo" width={120} height={40} className="logo" priority />
          </Link>

					<button
						className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
						type="button"
						aria-controls="primary-navigation"
						aria-expanded={isOpen}
						aria-label="Toggle navigation"
						onClick={() => setIsOpen((s) => !s)}
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="primary-navigation">
						<ul className="navbar-nav ms-auto d-flex align-items-center">
							<li className="nav-item">
								<a
									role="button"
									className={`nav-link cent ${activeSection === 'header' ? 'active' : ''}`}
									onClick={() => handleNavClick('header')}
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									role="button"
									className={`nav-link cent ${activeSection === 'about' ? 'active' : ''}`}
									onClick={() => handleNavClick('about')}
								>
									About
								</a>
							</li>
							<li className="nav-item">
								<a
									role="button"
									className={`nav-link cent ${activeSection === 'projects' ? 'active' : ''}`}
									onClick={() => handleNavClick('projects')}
								>
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a
									role="button"
									className={`nav-link cent ${activeSection === 'contact' ? 'active' : ''}`}
									onClick={() => handleNavClick('contact')}
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar

