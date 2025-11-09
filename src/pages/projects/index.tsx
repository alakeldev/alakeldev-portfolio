import React from 'react'
import Image from 'next/image'
import ProjectItems, { ProjectItem } from '../../data/ProjectItems'

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => {
	const { projectTitle, projectDescription, projectImg, repoLink, liveLink } = project

	return (
		<div className="col-12 col-md-6 col-lg-4">
			<article className="shadow card h-100">
				<div className="card-image-wrapper">
					<Image src={projectImg} alt={projectTitle} width={600} height={360} className="cardImage" />
				</div>

				<div className="card-body p-4 d-flex flex-column">
					<h3 className="fw-bold text-uppercase mb-3 fs-5">{projectTitle}</h3>
					<p className="mb-4">{projectDescription}</p>

					<div className="mt-auto d-flex gap-2">
						{repoLink && (
							<a
								className="btn btn-outline-primary view-project-btn"
								href={repoLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Repository
							</a>
						)}

						{liveLink && (
							<a
								className="btn btn-primary"
								href={liveLink}
								target="_blank"
								rel="noopener noreferrer"
							>
								View Live
							</a>
						)}
					</div>
				</div>
			</article>
		</div>
	)
}

const ProjectsPage: React.FC = () => {
	return (
		<section id="projects" className="py-5">
			<div className="container">
				<h2 className="mb-5">MY PROJECTS</h2>

				<div className="row g-4">
					{ProjectItems.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ProjectsPage

