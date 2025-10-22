export interface NavigationItem {
	label: string;
	href: string;
}

export interface Course {
	name: string;
	description: string;
	highlights: string[];
}

export const navigation: NavigationItem[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Core Strengths', href: '#core-strengths' },
	{ label: 'Courses', href: '#courses' },
	{ label: 'Children', href: '#children' },
	{ label: 'Partners', href: '#partners' },
	{ label: 'Success', href: '#success' },
	{ label: 'Testimonials', href: '#testimonials' },
	{ label: 'Mission', href: '#mission' },
	{ label: 'Partnerships', href: '#partnerships' },
	{ label: 'Contact', href: '#contact' }
];

export const heroContent = {
	title: 'Empowering language learning, bridging the world.',
	description:
		'Mandalion Education provides intensive Mandarin courses for non-native speakers, delivering research-backed programs that help learners communicate confidently in real-world situations.',
	primaryCta: { label: 'Stay Updated', href: '#contact' },
	secondaryCta: { label: 'Explore Courses', href: '#courses' }
};

export const aboutSection = {
	heading: 'About Mandalion Education',
	body: `Mandalion Education operates under Study Trust International Group in Singapore. Our team designs structured Mandarin programs that empower learners to express ideas clearly, use language accurately, and build proficiency through practical application.`,
	cardTitle: 'What Sets Us Apart',
	cardBody:
		'We cover pronunciation, characters, vocabulary, grammar, and fluency with integrated listening, speaking, reading, and writing practice across meaningful scenarios.'
};

export const coreStrengths = [
	{
		title: 'A Team of Experienced Professionals',
		description:
			'Certified TCFL educators with international experience deliver bilingual lessons enriched with cultural insights and tailored guidance.'
	},
	{
		title: 'Personalized Learning Plans',
		description:
			'Every learner begins with a complimentary assessment so we can design individualized pathways, from daily conversation to HSK preparation.'
	},
	{
		title: 'Flexible Learning Modes',
		description:
			'Choose in-person or live online lessons that fit global schedules, with weekday and weekend sessions that keep progress on track.'
	},
	{
		title: 'Authoritative Curriculum System',
		description:
			'Programs align with HSK standards and include specialized tracks spanning business Chinese, cultural immersion, and exam readiness.'
	},
	{
		title: 'Where Tradition Meets Innovation',
		description:
			'Expert instruction pairs with the Mandalion educational app featuring AI-driven pronunciation checks, vocabulary practice, and real-time feedback.'
	}
];

export const coursesOverview = {
	heading: 'Our Courses',
	body: `Our curriculum blends neuroscience, cognitive psychology, and second language acquisition research. Each level advances seamlessly from foundational skills to cultural fluency, leveraging carefully curated themes and authentic materials.`,
	highlights: [
		{ title: 'Research-Based', detail: 'Scientifically informed design meets learners where they are.' },
		{
			title: 'Culturally Grounded',
			detail: 'Real-world content deepens cultural understanding alongside language skills.'
		},
		{
			title: 'Progressive Growth',
			detail: 'Precisely calibrated stages nurture confidence and independent learning.'
		}
	]
};

export const adultCourses: Course[] = [
	{
		name: 'Happy Chinese',
		description:
			'A multi-level journey for beginners built on Hanban’s trusted materials to balance linguistic foundations with communicative confidence.',
		highlights: [
			'Structured route: progress from core vocabulary to rich dialogues and grammar patterns.',
			'Context-driven: lively scenarios connect classroom learning to everyday life.',
			'Multi-format materials: textbooks, workbooks, and multimedia reinforce listening, speaking, reading, and writing.',
			'Continuous feedback: frequent quizzes reveal growth areas and guide next steps.'
		]
	},
	{
		name: 'Business Chinese',
		description:
			'Develop the fluency, etiquette, and cultural literacy required to succeed in Mandarin-speaking corporate environments.',
		highlights: [
			'Practical focus: role-play meetings, travel, interviews, and marketing projects.',
			'Progressive modules: build from essentials to advanced negotiation and case analysis.',
			'Cross-cultural insights: decode regional business norms to avoid miscommunication.',
			'Immersive practice: real cases and simulations make lessons meaningful and memorable.'
		]
	},
	{
		name: 'HSK Preparation (Level 3 & 4)',
		description:
			'A targeted path that blends language development with evidence-based exam strategies to accelerate HSK success.',
		highlights: [
			'Syllabus aligned: covers every required grammar structure and vocabulary item.',
			'Skill + strategy: strengthen listening, speaking, reading, and writing while mastering exam techniques.',
			'Full coverage: practice each section and question type with guided drills.',
			'Anytime resources: audio, exercises, and an online question bank support in-class and self-study.'
		]
	},
	{
		name: 'Chinese Cultural Immersion',
		description:
			'Explore China’s heritage and contemporary culture while expanding language fluency through interactive, multimedia experiences.',
		highlights: [
			'Immersive media: films, dramas, documentaries, and music showcase authentic language use.',
			'Deep cultural context: uncover the historical and social roots behind expressions.',
			'Interactive sessions: discussions, debates, and role-play build confidence.',
			'Integrated skills: connect listening, speaking, reading, and writing with cultural literacy.'
		]
	}
];

export const childrenSection = {
	heading: 'Courses for Children',
	body: `Our Chinese for Children (Levels 1–3) curriculum, built on the renowned Rainbow Dragon series, supports learners aged 7–12 through immersive storytelling, interactive games, and culturally rich activities.`,
	highlights: [
		'Story-driven lessons, songs, and games inspire curiosity and joy.',
		'Cultural connections introduce festivals, traditions, and daily life in China.',
		'Communication-first approach builds real-world speaking confidence.',
		'Small class sizes ensure personalized feedback and participation for every learner.'
	]
};

export const clients = [
	'Samsung CNT Corporation',
	'Mediterranean Shipping Company (MSC)',
	'Infineon Technologies',
	'Singapore American School',
	'MOE Language Centre (Ministry of Education Language Centre)'
];

export const partnersIntro = `Mandalion Education partners with international schools and global corporations to deliver customized language solutions.`;

export const successStories = [
	{
		name: 'Anna · Germany',
		detail: 'Passed HSK Level 4 within six months and gained admission to a graduate program in China.'
	},
	{
		name: 'Michael · Singapore',
		detail: 'Closed a million-dollar client deal after completing the Business Chinese course.'
	},
	{
		name: 'Aisha · Indonesia',
		detail: 'Earned HSK Level 2 certification and now collaborates fluently with suppliers.'
	}
];

export const testimonials = [
	{
		quote:
			'After the Business Chinese course, I can now confidently deliver presentations in Mandarin.',
		name: 'James',
		role: 'Marketing Manager'
	},
	{
		quote: 'The HSK preparation course helped me pass quickly and effectively.',
		name: 'Maria',
		role: 'Student'
	},
	{
		quote:
			'The Chinese Culture Experience class gave me a deeper understanding of China’s traditions and modern society.',
		name: 'Sophia',
		role: 'Graduate Student'
	},
	{
		quote:
			'My child really enjoys the Children’s Chinese class. Through games and stories, he now speaks Mandarin with greater confidence.',
		name: 'David',
		role: 'Parent'
	},
	{
		quote:
			'The Chinese lessons at Mandalion Education improved my daily communication skills, which helps a lot in school.',
		name: 'Kevin',
		role: 'International School Student'
	}
];

export const missionSection = {
	heading: 'Mission & Vision',
	body: `We deliver high-quality language programs for learners of all ages in Singapore and beyond, uniting proven pedagogy with AI innovation to build an internationalized, future-ready learning platform.`,
	cardTitle: 'Looking Ahead',
	cardBody:
		'Our expansion plans include new offline centers across Southeast Asia and additional language offerings that meet global demand for multilingual expertise.'
};

export const partnershipSection = {
	heading: 'Partnership Opportunities',
	body: `We collaborate with educational institutions, schools, universities, distributors, and government organizations to localize content, expand regional reach, and co-create innovative teaching models.`,
	highlights: [
		'Co-develop localized curriculum and blended learning solutions.',
		'Launch joint programs that broaden access to Mandarin learning.',
		'Enhance channel promotion with shared resources and expertise.'
	]
};

export const contactSection = {
	heading: 'Stay Connected',
	body: `We are finalizing our official site and digital channels. Reach out to explore collaboration, enroll in upcoming cohorts, or receive launch updates.`,
	details: [
		{ term: 'Official Site', detail: 'TBA' },
		{ term: 'Email / eFeedback', detail: 'TBA' }
	]
};
