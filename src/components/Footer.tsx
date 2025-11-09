import React from 'react'
import Image from 'next/image'

interface SocialLink {
  href: string
  src: string
  alt: string
  ariaLabel?: string
  className?: string
}

interface FooterProps {
  className?: string
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/alakeldev',
    src: '/images/github.png',
    alt: 'GitHub',
    ariaLabel: 'GitHub - Opens in a new tab',
  },
  {
    href: 'https://tryhackme.com/r/p/alakeldev01',
    src: '/images/tryhackme.png',
    alt: 'TryHackMe',
    ariaLabel: 'TryHackMe - Opens in a new tab',
  },
  {
    href: 'https://x.com/alakeldev',
    src: '/images/x.png',
    alt: 'X',
    ariaLabel: 'X - Opens in a new tab',
  },
  {
    href: 'https://exercism.org/profiles/alakeldev01',
    src: '/images/exercism.png',
    alt: 'Exercism',
    ariaLabel: 'Exercism - Opens in a new tab',
    className: 'rounded',
  },
  {
    href: 'https://www.linkedin.com/in/abdullah-alakel/',
    src: '/images/linkedin.png',
    alt: 'LinkedIn',
    ariaLabel: 'LinkedIn - Opens in a new tab',
  },
]

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer id="footer" className={`py-5 mt-4 text-light text-center ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-logo-wrapper d-flex justify-content-center">
              <Image src="/images/alakel.png" alt="website logo" width={160} height={60} className="footer-logo" priority />
            </div>
          </div>
        </div>

				<div className="row mb-4">
					<div className="col footer-icons d-flex justify-content-center gap-3 align-items-center">
						{SOCIAL_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								rel="noopener noreferrer"
								target="_blank"
								aria-label={link.ariaLabel ?? link.alt}
							>
								<Image
									src={link.src}
									alt={link.alt}
									width={36}
									height={36}
									className={`icon ${link.className ?? ''}`.trim()}
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

