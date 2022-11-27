import emoji from "react-easy-emoji";

export const greetings = {
	name: "Daniel Ledezma",
	title: "Hola, soy Daniel Ledezma",
	description:
		"Soy un apasionado por la tecnologia y Full Stack developer teniendo experiencia en aplicaciones web con JavaScript, NodeJs, ReactJs, NextJs, Python, PostgreSQL, SQLSERVER, MySql, MongoDB, Firebase, AWS.",
	resumeLink:
		"https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "idanielmeza",
};

export const contact = {};

export const socialLinks = {
	url: "https://portfolio.ledezma.dev",
	linkedin: "https://www.linkedin.com/in/daniel-meza-ledezma/",
	github: "https://github.com/idanielmeza",
};

export const skillsSection = {
	title: "Que puedo hacer",
	subTitle:
		"Principalmente me enfoco en el desarrollo de aplicaciones web usando JS y sus frameworks, pero tambien tengo conocimientos en Python y actualmente estoy aprendiendo nuevas tecnologias",
	data: [
		{
			title: "Desarrollo Web Full Stack",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Aplicaciones SPA (Single Page Application) PWA (Progressive Web Application) usando ReactJs."
				),
				emoji("⚡ Aplicaciones Web Staticas usando NextJs."),
				emoji("⚡ RESTFUL API usando NodeJs, Express, Python, Flask, FASTAPI."),
				emoji("⚡ MVW API usando NodeJs, Express, Handlebars, Pug, EJS y Python Django."),
			],
			softwareSkills: [
				{
					skillName: "HTML5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "ReactJs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "NextJs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experiencia trabajando con AWS"),
				emoji(
					"⚡ Configuracion de servidores usando Docker, Docker Compose."
				)
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Bitbucket",
					fontAwesomeClassname: "logos:bitbucket",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				}
			],
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	}
];

export const educationInfo = [
	{
		schoolName: "Instituto Tecnológico Superior de Poza Rica",
		subHeader: "Licenciatura en Sistemas Computacionales",
		duration: "September 2018 - Actualmente",
		// desc: "Participated in the research of XXX and published 3 papers.",
		grade: "Administracion en base de datos",
		descBullets: [
			// "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
			// "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Apr 2022 – Jun 2022",
		desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
	{
		role: "API Engineer",
		company: "Duseca Software",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Jan 2022 – Mar 2022",
		desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "DietasApp",
		desc: "Aplicacion web para la creacion de dietas personalizadas",
		github: "https://github.com/idanielmeza/dietas-app",
		link: "https://dietasapp.ml/",
	},
	{
		name: "ComKawatzin",
		desc: "Sistema de punto de venta.",
		github: "https://github.com/idanielmeza/api-comercializadora-kawatzin",
	},
	{
		name: "MenusQR",
		desc: "Sistema de menus QR.",
		github: "https://github.com/idanielmeza/menusqr-backend",
	},
	{
		name: "Ecommerce (Proximamente)",
		desc: "Sistema de ecommerce.",
		github: "https://github.com/idanielmeza",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Daniel Ledezma",
	description:
		"Un desarrollador web apasionado por la tecnología y la programación.",
	author: "Hanzla Tauqeer",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	url: "https://portfolio.ledezma.dev/",
	keywords: [
		"Daniel",
		"Daniel Ledezma",
		"Daniel Ledezma Portfolio",
		"Daniel Ledezma Portfolio Website",
		"Portfolio",
		"Daniel Ledezma Developer ",
		"Daniel Ledezma Web Developer",
		"Daniel Ledezma Desarrollador",
		"Daniel Ledezma Desarrollador Web",
		"Daniel Ledezma Desarrollador de Software",
		"Daniel Ledezma Desarrollador de Aplicaciones",
		"Daniel Ledezma Desarrollador de Aplicaciones Web",
	],
}
