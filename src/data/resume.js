export const profile = {
  name: 'Roshan Aslam Khan',
  role: 'Full-Stack Web Developer | PHP & Laravel',
  location: 'Mumbai, India',
  phone: '+91 9137863824',
  email: 'irshadk12421@gmail.com',
  linkedin: 'https://linkedin.com/in/roshan-khan-08a813247',
  github: 'https://github.com/Irshad12421',
  portfolio: 'https://delightful-pixie-b841c9.netlify.app',
  summary:
    'Full-stack web developer with 1+ year of experience building CRMs and business software in PHP and Laravel, from backend logic and database design to Blade-based frontends. Currently developing features for a US-based SaaS platform, and led a team of 5 to deliver around 10 projects. Experienced in integrating payment, shipping and OTP services (Razorpay, PayU, Shiprocket, MSG91) into e-commerce sites.',
  stats: [
    { value: '1+', label: 'Year Experience' },
    { value: '10', label: 'Projects Delivered' },
    { value: '5', label: 'Team Led' },
    { value: '8–10', label: 'WooCommerce Sites' },
  ],
  languages: ['English', 'Hindi', 'Marathi'],
}

export const experience = [
  {
    role: 'Web Developer',
    company: 'FutureOne Global IT Solutions Pvt. Ltd.',
    period: 'April 2026 – Present',
    points: [
      'Build full-stack PHP Laravel applications, creating CRMs and business software with backend logic, database design and responsive Blade interfaces.',
      'Develop features for a US-based SaaS platform on Laravel, including database changes, server-side logic and frontend screens across multiple business modules.',
      'Led a team of 5 developers to deliver around 10 projects successfully, from requirements through to delivery.',
      'Translate business requirements into new features and refine them as needs change.',
    ],
  },
  {
    role: 'Junior Web Developer (Internship)',
    company: 'FutureOne Global IT Solutions Pvt. Ltd.',
    period: 'October 2025 – April 2026',
    points: [
      'Built and customized CRM and business software modules in PHP, covering both server-side logic and user interfaces.',
      'Designed and built a WooCommerce/WordPress website, from layout and design through to product setup.',
      'Integrated Razorpay and PayU payments, Shiprocket shipping and MSG91 OTP verification.',
    ],
  },
]

export const achievements = [
  'Led a team of 5 to deliver around 10 projects successfully.',
  'Converted from intern to full-time Web Developer within 6 months.',
  'Shipped CRM and business software that client teams now use day to day.',
]

export const skillGroups = [
  {
    title: 'Core',
    skills: ['PHP', 'Laravel', 'Blade', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Also',
    skills: ['REST APIs', 'MVC', 'Java', 'Spring Boot', 'Python', 'C', 'C++'],
  },
  {
    title: 'Platforms',
    skills: ['WordPress', 'WooCommerce'],
  },
  {
    title: 'Integrations',
    skills: ['Razorpay', 'PayU', 'Shiprocket', 'MSG91', 'SMTP', 'SFTP'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'MySQL Workbench', 'VS Code', 'IntelliJ IDEA', 'Eclipse'],
  },
]

export const projects = [
  {
    title: 'US-Based SaaS Platform — POS, Fuel & Lottery Management',
    type: 'Professional Project',
    description: [
      'Develop a Laravel-based SaaS platform for US retail and fuel-station businesses, with POS, fuel management and lottery management modules.',
      'Worked on shift-control logic that restricts each station terminal to one open employee shift at a time.',
      'Built the service layer and database changes to sync a state lottery’s scratcher game catalog into the lottery terminal.',
      'Developing a weekly tobacco scan-data export that generates a 34-field pipe-delimited file, maps product UPCs, uploads over SFTP with a demo-to-production switch set through configuration, and runs on the Laravel Scheduler.',
    ],
    tech: ['PHP', 'Laravel', 'Blade', 'MySQL', 'JavaScript', 'SFTP'],
  },
  {
    title: 'Laravel CRM & Business Software',
    type: 'Professional Project',
    description: [
      'Created CRMs and business software in Laravel, with database design and responsive Blade interfaces.',
      'Turned client workflows into working modules and refined them against business requirements.',
    ],
    tech: ['PHP', 'Laravel', 'Blade', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Data Center Migration & Relocation CRM',
    type: 'Client Project',
    description: [
      'Added and customized a new CRM module tailored to the workflows of a company offering data center migration and relocation services.',
      'Took the module from requirement to deployment across backend and frontend, and delivered it for production use.',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Hair & Wig Manufacturer CRM',
    type: 'Client Project',
    description: [
      'Developed a new CRM module to manage the internal company data of a hair and wig manufacturer.',
      'Built the backend and frontend around the client’s internal workflow; their team now uses it day to day.',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'WooCommerce Websites (8–10 Delivered)',
    type: 'Client Projects',
    description: [
      'Built and delivered 8–10 WooCommerce websites covering layout and design, product setup and store configuration.',
      'Integrated Razorpay and PayU payments, Shiprocket shipping and MSG91 OTP-based verification.',
    ],
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Razorpay', 'PayU', 'Shiprocket', 'MSG91'],
  },
  {
    title: 'AI Email Writer',
    type: 'Personal Project',
    description: ['Developed an AI-powered email assistant that generates context-aware replies and stores conversations for later reference.'],
    tech: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    title: 'Frontend Website with SMTP Integration',
    type: 'Personal Project',
    description: ['Built a frontend website and configured SMTP so that form submissions are delivered as emails.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SMTP'],
  },
  {
    title: 'Real-Time Weather Website',
    type: 'Personal Project',
    description: ['Created a weather app that fetches and displays live weather data through API integration.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Personal Project',
    description: ['Designed and published a portfolio website showcasing skills, projects, knowledge and education.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
  },
]

export const education = [
  {
    degree: 'B.Sc. (Information Technology)',
    school: 'University of Mumbai',
    result: '8.2 CGPA',
    year: '2025',
  },
  {
    degree: 'HSC',
    school: 'Maharashtra State Board',
    result: '46.67%',
    year: '2022',
  },
  {
    degree: 'SSC',
    school: 'Maharashtra State Board',
    result: '72.20%',
    year: '2020',
  },
]

export const certifications = [
  'HTML Training — Spoken Tutorial, IIT Bombay (2023)',
  'PHP & MySQL Training — Spoken Tutorial, IIT Bombay (2023)',
  'C++ Training — Spoken Tutorial, IIT Bombay (2023)',
  'Programming in Java — Anudip Foundation (2025)',
]

export const services = [
  {
    title: 'Full-Stack Laravel Development',
    text: 'End-to-end web applications — database design, server-side logic, service layers and responsive Blade frontends.',
    icon: 'layers',
  },
  {
    title: 'CRM & Business Software',
    text: 'Custom CRMs built around real client workflows, from requirements gathering through to production deployment.',
    icon: 'grid',
  },
  {
    title: 'E-Commerce Development',
    text: 'WooCommerce and WordPress stores — layout, product setup, store configuration and ongoing refinement.',
    icon: 'cart',
  },
  {
    title: 'Payment, Shipping & OTP Integrations',
    text: 'Razorpay, PayU, Shiprocket and MSG91 wired into production sites with SMTP and SFTP automation.',
    icon: 'plug',
  },
]

export const journey = [
  {
    period: 'October 2025',
    title: 'Started as a Web Developer Intern',
    text: 'Joined FutureOne Global IT Solutions and began building CRM and business software modules in PHP.',
  },
  {
    period: 'April 2026',
    title: 'Promoted to full-time Web Developer',
    text: 'Converted from intern to full-time in 6 months after shipping modules clients relied on daily.',
  },
  {
    period: '2026',
    title: 'Leading a team of 5',
    text: 'Took on team leadership and delivered around 10 projects from requirements through to delivery.',
  },
  {
    period: 'Now',
    title: 'Building a US-based SaaS platform',
    text: 'Developing POS, fuel and lottery management modules for a US retail SaaS product on Laravel.',
  },
]

export const proficiency = [
  { name: 'PHP', level: 92 },
  { name: 'Laravel', level: 90 },
  { name: 'MySQL', level: 87 },
  { name: 'Blade & Bootstrap', level: 90 },
  { name: 'JavaScript', level: 78 },
  { name: 'HTML & CSS', level: 92 },
  { name: 'WordPress / WooCommerce', level: 82 },
  { name: 'Java & Spring Boot', level: 65 },
]

export const faqs = [
  {
    q: 'Are you available for full-time roles?',
    a: 'Yes — I am open to full-time web developer roles (PHP/Laravel) as well as selected freelance projects. The fastest way to reach me is by email or the contact form.',
  },
  {
    q: 'What is your typical response time?',
    a: 'I usually reply within 24 hours on working days. For urgent matters, calling is the quickest option.',
  },
  {
    q: 'Where are you located and can you work remotely?',
    a: 'I am based in Mumbai, India (IST) and have experience working with remote teams, including a US-based product team.',
  },
  {
    q: 'What technologies do you work with?',
    a: 'Primarily PHP, Laravel, Blade, MySQL, JavaScript and Bootstrap — plus WordPress/WooCommerce, REST APIs and integrations like Razorpay, PayU, Shiprocket and MSG91.',
  },
]
