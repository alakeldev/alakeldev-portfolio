export interface ProjectItem {
  id: number
  projectImg: string
  projectTitle: string
  projectDescription: string
  repoLink?: string
  liveLink?: string
}

const ProjectItems: ProjectItem[] = [
  {
    id: 1,
    projectImg: '/images/pimg1.png',
    projectTitle: 'Call Of Duty',
    projectDescription:
      'Ghost Team website offers comprehensive information on the latest events, championships, updates, and photo galleries related to the Call of Duty game. It is developed using fundamental HTML5 and CSS3 technologies.',
    repoLink: 'https://github.com/alakeldev/ghost-cod-team-website',
  },
  {
    id: 2,
    projectImg: '/images/pimg2.png',
    projectTitle: 'Hi Task Me',
    projectDescription:
      'This application assists users in managing their tasks and tracking daily progress on various projects. It is developed using Vanilla JavaScript.',
    repoLink: 'https://github.com/alakeldev/hi-task-me-app',
  },
  {
    id: 3,
    projectImg: '/images/pimg3.png',
    projectTitle: 'Passwords Manager',
    projectDescription:
      'This application generates new passwords and manages existing ones, securely storing them in a single file. It employs a symmetric key for encrypting and decrypting your data and is developed using the Python programming language.',
    repoLink: 'https://github.com/alakeldev/passwords-generator-and-manager-app',
  },
  {
    id: 4,
    projectImg: '/images/pimg4.png',
    projectTitle: 'Home Taste',
    projectDescription:
      'Chefs Community, Whether you are a seasoned cook or a curious food enthusiast, our website provides a delightful experience for home chefs. It is developed using the Python programming language (the Django full-stack framework, and the Jinja templating language).',
    repoLink: 'https://github.com/alakeldev/home-taste-app',
  },
  {
    id: 5,
    projectImg: '/images/pimg5.png',
    projectTitle: 'Techplaza Platform',
    projectDescription:
      'This platform offers extensive solutions for application development and IT support. It is developed using JavaScript (React.js) for the frontend and Python (Django Rest Framework) for the backend API.',
    repoLink: 'https://github.com/alakeldev/techplaza-app-frontend',
  },
  {
    id: 6,
    projectImg: '/images/pimg6.png',
    projectTitle: 'Hi Translate Me',
    projectDescription:
      'Hi Translate Me is a voice translation tool that translates spoken text into another language and plays back the translation. This project integrates speech recognition and translation APIs, Built with Next.js and TypeScript.',
    repoLink: 'https://github.com/alakeldev/hi-translate-me-app',
  },
  {
    id: 7,
    projectImg: '/images/pimg7.png',
    projectTitle: 'Convert Image 2 Pdf',
    projectDescription:
      'Convert Image 2 PDF is a sleek online tool built with Next.js, React components, Tailwind CSS, Preline, and Aceternity UI. It allows users to effortlessly convert any image into a PDF document with a modern and intuitive interface.',
    repoLink: 'https://github.com/alakeldev/file-converter-app',
  },
  {
    id: 8,
    projectImg: '/images/pimg8.png',
    projectTitle: 'Hi Download Me',
    projectDescription:
      'It is a file downloader application built with HTML, CSS, and JavaScript. It utilizes vanilla JavaScript and DOM manipulation to provide a seamless file downloading experience. The application fetches binary file data using the Fetch and handles it with Blob objects.',
    repoLink: 'https://github.com/alakeldev/hi-download-me-app',
  },
  {
    id: 9,
    projectImg: '/images/pimg9.png',
    projectTitle: 'Hi Med Assist Mobile App',
    projectDescription:
      'It is a medication management app built with React Native and Expo. It offers medication storage and precise reminders, powered by Firebase, a flexible NoSQL database. Stay organized with Hi-Med-Assist-App, your reliable health companion.',
    repoLink: 'https://github.com/alakeldev/hi-med-assist-app',
  },
]

export default ProjectItems
