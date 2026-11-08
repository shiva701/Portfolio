// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Shiva Shukla',
  firstName: 'Shiva',
  role: 'Full-Stack Software Engineer',
  location: 'King of Prussia, PA',
  phone: '(703) 364-9625',
  phoneHref: 'tel:+17033649625',
  email: 'shiva27295@gmail.com',
  linkedin: 'https://linkedin.com/in/shivashuklagmu',
  github: 'https://github.com/shiva701',
  resume: `${import.meta.env.BASE_URL}Shiva_Shukla_Resume.pdf`,
  heroPhoto: `${import.meta.env.BASE_URL}lead_photo.jpg`,
  headshot: `${import.meta.env.BASE_URL}headshot.jpg`,
};

export const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { value: '6', label: 'Years of experience' },
  { value: '3.93', label: 'M.S. CS GPA', plain: true },
];

export const about = {
  intro:
    "I'm a software engineer with 6+ years of experience building scalable, secure backend systems in Java Spring Boot, Spring WebFlux and Python FastAPI, plus accessible front-end components with Lit and TypeScript. Lately I've been building MCP gateways, AI agents and LLM-based services on Azure.",
  points: [
    'I specialize in Java, Python, Spring, microservices, REST APIs, OAuth2/JWT security, TypeScript, Lit, React, SQL/NoSQL databases, unit/integration testing, Redis caching and OpenTelemetry observability, the pieces that keep production systems fast and reliable.',
    'I ship through CI/CD with GitHub Actions, GitLab, Jenkins, Helm, Terraform and Azure Kubernetes, working closely with Agile teams from design to deployment.',
  ],
  stat: {
    value: '22%',
    label:
      'Higher F1 score on a LangChain + OpenAI app that analyzes and rewrites requirements per INCOSE standards, with 25% lower token costs',
  },
};

export const featuredWork = [
  {
    title: 'Agent Gateway',
    tag: 'Python · Azure · MCP · FastAPI · AI Agents',
    desc: 'JSON-RPC 2.0 and REST gateway exposing agent tools, with JWT auth and a Redis-cached Azure Storage registry.',
    art: 'sage',
  },
  {
    title: 'Requirement Assistant AI Tool',
    tag: 'Java · Lit · TypeScript · FastAPI · LLM',
    desc: 'Spring Boot plugin and WAI-ARIA web components connecting users to LLM services. 25% higher throughput.',
    art: 'sand',
  },
  {
    title: 'Production Observability',
    tag: 'OpenTelemetry · Datadog · Prometheus',
    desc: 'Tracing, logging and alerting with an OTEL collector exporting to Datadog and Prometheus.',
    art: 'lilac',
  },
  {
    title: 'Reactive Learning Platform APIs',
    tag: 'WebFlux · Kafka',
    desc: 'Reactive REST APIs on Couchbase with Kafka retries. Microservices 30% more reliable.',
    art: 'clay',
  },
];

export const experience = [
  {
    company: 'PTC Inc.',
    title: 'Software Engineer Specialist',
    period: 'Feb 2026 - Oct 2026',
    summary:
      'Full-stack with Python, Java, TypeScript, Lit, Azure and SQL. Building AI agent infrastructure.',
    tags: ['Python', 'Azure', 'MCP', 'AI Agents', 'OpenTelemetry', 'Redis'],
    highlights: [
      'Built an Azure-based Python FastMCP gateway exposing agent tools via JSON-RPC 2.0 and REST, with JWT audience verification, Redis and in-memory caching.',
      'Integrated OpenTelemetry tracing, logging and alerting into FastAPI for SLA/SLO compliance, exporting to Datadog and Prometheus.',
      'Provisioned AKS, Storage and Redis with reusable Terraform modules, cutting environment setup time by 20%.',
      'Secured the RA AI tool plugin with Spring Security (OAuth2/JWT), reducing unauthorized requests by 15%.',
      'Raised RA tool test coverage from 30% to 80% with Playwright, JUnit, Pytest and containerized integration tests.',
    ],
  },
  {
    company: 'PTC Inc.',
    title: 'Associate Software Engineer',
    period: 'Aug 2023 - Jan 2026',
    summary:
      'Worked on a manufacturing production management tool and built the Requirement Assistant AI tool end to end, from web components to Backend services using OpenAI LLMs.',
    tags: ['Java', 'Lit', 'TypeScript', 'FastAPI', 'LLM', 'LangChain', 'SaaS'],
    highlights: [
      'Designed and developed localized, WAI-ARIA-compliant TypeScript and Lit web components for the RA AI tool in a software project management application, increasing accessibility by 50%.',
      'Developed the RA AI tool plugin using Java, OOP, Spring Boot, REST APIs, Gradle, OAuth2/JWT, Tomcat and Postgres to mediate communication between the web component and backend LLM services, improving request processing throughput by 25%.',
      'Co-developed a FastAPI application using LangChain and OpenAI LLMs to evaluate and rewrite software requirements per INCOSE standards, reducing token costs by 25% and improving F1 score by 22% through prompt optimization.',
      'Integrated an API in the RA plugin to send API metadata to Snowflake for faster failure triage.',
      'Optimized stored procedures in a MySQL database, improving GET API performance by 30%.',
      'Developed features for users to track and analyze (using machine learning models) site production cycles using ThingWorx, JavaScript, Spring Boot, and Microservices. Used Thingworx for UI development and spring boot microservices for backend services. Used MySQL and Redis for data storage and caching.',
      'Enhanced the stability of system tests on an Azure deployment, reducing the weekly failure rate by 50%.',
      'Automated the detection of outdated Maven dependencies in 6 microservices with Jenkins, reducing security threats by 20%.',
      'Configured Jenkins pipelines to attach visualized TestNG system test reports, speeding up failure analysis by 25%.',
      'Wrote a script to generate weeks of sample production data for Dev/QA testing and feature R&D.',
      'Wrote shell scripts to fetch updates from the Git repository and build the interdependent microservices sequentially.',
    ],
  },
  {
    company: 'GlobalLogic',
    title: 'Senior Software Engineer',
    period: 'Oct 2020 - Aug 2021',
    summary:
      'Led event-driven messaging with Kafka, shaped Agile stories with clients and architects, and mentored a team of six.',
    tags: ['Java', 'Spring WebFlux', 'Kafka', 'Spring Cloud', 'Agile'],
    highlights: [
      'Worked closely with clients and architects to formulate Agile stories, reducing rework by 40%.',
      'Implemented Kafka with the Spring Cloud Streams API and a retry mechanism to improve microservice reliability by 30%.',
      'Optimized Couchbase N1QL queries with composite indexes, improving lookup by 25% across 5 high-traffic REST endpoints.',
      'Mentored and trained 6 employees.',
    ],
  },
  {
    company: 'GlobalLogic',
    title: 'Software Engineer',
    period: 'Jul 2018 - Sep 2020',
    summary:
      'Backend engineer for a learning platform, building reactive REST APIs with Java, Spring Boot and NoSQL.',
    tags: ['Java', 'Spring Boot', 'Spring WebFlux', 'Couchbase', 'Microservices', 'REST'],
    highlights: [
      'Developed REST APIs for a learning platform using Java, Spring Boot, Spring WebFlux (Reactive Streams), Kafka, and the Couchbase NoSQL database; added unit tests with JUnit, Mockito, and StepVerifier, improving code quality by 35% and test coverage by 40%.',
      'Ensured product security with SonarQube, reducing code vulnerabilities by 30%.',
      'Analysed JProfiler and JMeter reports to improve REST API performance by 35%, reaching sub-100 ms response times.',
      'Pioneered 90% of the consumer contracts using Spring Cloud Contracts, reducing early requirement gaps by 20%.',
      'Delivered 25% of priority features and enhancements and resolved 30% of high-severity production issues for the product v1 launch, consistently meeting sprint goals.',
    ],
  },
];

export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS'],
    art: 'sage',
  },
  {
    group: 'Frameworks & Libraries',
    items: [
      'Spring Boot',
      'Spring WebFlux',
      'Spring Cloud',
      'FastAPI',
      'Hibernate',
      'React',
      'Lit',
      'JUnit',
      'Mockito',
      'TestNG',
      'Playwright',
      'ShellSpec',
    ],
    art: 'sand',
  },
  {
    group: 'AI',
    items: [
      'MCP',
      'FastMCP',
      'AI Agents',
      'LangChain',
      'LLMs',
      'Prompt Engineering',
      'Claude',
      'GitHub Copilot',
    ],
    art: 'lilac',
  },
  {
    group: 'Cloud',
    items: [
      'Azure AKS',
      'Azure Storage',
      'AWS S3',
      'AWS EC2',
      'AWS RDS',
      'AWS Lambda',
      'CloudWatch',
    ],
    art: 'clay',
  },
  {
    group: 'DevOps & Build',
    items: [
      'Docker',
      'Kubernetes',
      'Helm',
      'Terraform',
      'GitHub Actions',
      'GitLab',
      'Jenkins',
      'Git',
      'Maven',
      'Gradle',
      'Apache Tomcat',
      'Linux',
    ],
    art: 'sage',
  },
  {
    group: 'Security',
    items: [
      'OAuth2',
      'JWT',
      'Spring Security',
      'HashiCorp Vault',
      'Wiz',
      'BlackDuck',
      'Checkmarx',
      'Invicti',
      'SonarQube',
    ],
    art: 'sand',
  },
  {
    group: 'Databases & Messaging',
    items: [
      'PostgreSQL',
      'MySQL',
      'Couchbase',
      'Redis',
      'DynamoDB',
      'Snowflake',
      'Kafka',
      'Zookeeper',
    ],
    art: 'lilac',
  },
  {
    group: 'Observability',
    items: ['OpenTelemetry', 'Prometheus', 'Datadog', 'Aspire'],
    art: 'clay',
  },
  {
    group: 'Architecture & Practices',
    items: ['Microservices', 'RESTful APIs', 'Swagger', 'Agile'],
    art: 'sage',
  },
];

export const education = [
  {
    school: 'George Mason University',
    degree: 'Master of Science, Computer Science',
    detail: 'GPA 3.93',
    period: 'Aug 2021 - May 2023',
    place: 'Fairfax, VA',
    art: 'lilac',
    roles: [
      {
        title: 'Graduate Teaching Assistant',
        note: 'Data Structures and Algorithms · Jan 2022 - May 2023',
      },
    ],
    awards: [
      {
        title: 'Distinguished Academic Achievement',
        note: 'Department of Computer Science · May 2023',
        image: `${import.meta.env.BASE_URL}academic_achievement_award.jpeg`,
        ratio: '1280 / 970',
      },
    ],
  },
  {
    school: 'Harcourt Butler Technological Institute',
    degree: 'Bachelor of Technology, Information Technology',
    detail: 'GPA 3.8',
    period: 'Aug 2014 - Jun 2018',
    place: 'Kanpur, India',
    art: 'clay',
    awards: [
      {
        title: 'General Quiz, 3rd Place',
        note: 'Certificate of Merit · Infinito 2015',
        image: `${import.meta.env.BASE_URL}quiz_certificate.jpeg`,
        ratio: '800 / 600',
      },
      {
        title: 'Table Tennis Boys Doubles, 1st Prize',
        note: 'Inter-Branch Cluster · 2015-16',
        image: `${import.meta.env.BASE_URL}table_tennis.jpeg`,
        ratio: '800 / 600',
      },
    ],
  },
];
