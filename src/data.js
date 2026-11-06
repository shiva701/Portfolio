// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Shiva Shukla',
  firstName: 'Shiva',
  role: 'Software Engineer',
  location: 'King of Prussia, PA',
  phone: '(703) 364-9625',
  phoneHref: 'tel:+17033649625',
  email: 'shiva27295@gmail.com',
  linkedin: 'https://linkedin.com/in/shivashuklagmu',
  github: 'https://github.com/shiva701',
  resume: `${import.meta.env.BASE_URL}Shiva_Shukla_Resume.pdf`,
  heroPhoto: `${import.meta.env.BASE_URL}hero.jpg`,
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
    'I specialize in microservices, REST APIs, OAuth2/JWT security, Redis caching and OpenTelemetry observability, the pieces that keep production systems fast and reliable.',
    'I ship through CI/CD with GitHub Actions, GitLab, Jenkins, Helm, Terraform and Azure Kubernetes, working closely with Agile teams from design to deployment.',
  ],
  stat: { value: '80%', label: 'Test coverage on the RA AI tool, up from 30%' },
};

export const featuredWork = [
  {
    title: 'FastMCP Agent Gateway',
    tag: 'Python · Azure',
    desc: 'JSON-RPC 2.0 and REST gateway exposing agent tools, with JWT auth and a Redis-cached registry.',
    art: 'sage',
  },
  {
    title: 'Requirement Assistant AI Tool',
    tag: 'Java · Lit · LLM',
    desc: 'Spring Boot plugin and WAI-ARIA web components connecting users to LLM services. 25% higher throughput.',
    art: 'sand',
  },
  {
    title: 'Production Observability',
    tag: 'OpenTelemetry',
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
    period: 'Feb 2026 – Oct 2026',
    summary: 'Full-stack with Python, Java, TypeScript, Lit, Azure and SQL. Building AI agent infrastructure.',
    tags: ['Python', 'Azure', 'AI'],
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
    period: 'Aug 2023 – Jan 2026',
    summary: 'Built the Requirement Assistant AI tool end to end, from web components to LLM services.',
    tags: ['Java', 'Lit', 'LLM'],
    highlights: [
      'Designed localized, WAI-ARIA-compliant TypeScript and Lit web components, increasing accessibility by 50%.',
      'Developed the RA plugin with Spring Boot, OAuth2/JWT and Postgres, improving request throughput by 25%.',
      'Co-developed a FastAPI + LangChain app to rewrite requirements per INCOSE standards: 25% lower token cost, 22% better F1.',
      'Consolidated BlackDuck, Checkmarx and Invicti Jenkins pipelines, reducing redundancy by 80%.',
    ],
  },
  {
    company: 'GlobalLogic',
    title: 'Software Engineer',
    period: 'Jul 2018 – Aug 2021',
    summary: 'Backend engineer working with Java, Spring Boot/WebFlux and NoSQL.',
    tags: ['Java', 'Kafka'],
    highlights: [
      'Developed reactive REST APIs with Spring Boot, Kafka and Couchbase; improved test coverage by 40% with JUnit, Mockito and StepVerifier.',
      'Implemented Kafka with Spring Cloud Streams and retries, improving microservice reliability by 30%.',
      'Optimized Couchbase N1QL queries with composite indexes: 25% faster lookups across 5 high-traffic endpoints.',
      'Authored consumer contracts with Spring Cloud Contract, reducing early requirement gaps by 20%.',
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'], art: 'sage' },
  { group: 'Frameworks', items: ['Spring Boot', 'Spring Cloud', 'FastAPI', 'Hibernate', 'Lit', 'Playwright', 'JUnit', 'Mockito'], art: 'sand' },
  { group: 'AI', items: ['MCP', 'FastMCP', 'AI Agents', 'LangChain', 'LLMs', 'Prompt Engineering', 'Claude', 'GitHub Copilot'], art: 'lilac' },
  { group: 'Cloud & DevOps', items: ['Azure AKS', 'Azure Storage', 'AWS', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'GitLab', 'Jenkins'], art: 'clay' },
  { group: 'Security', items: ['OAuth2', 'JWT', 'Spring Security', 'HashiCorp Vault', 'Wiz', 'BlackDuck', 'Checkmarx', 'SonarQube'], art: 'sage' },
  { group: 'Data & Observability', items: ['PostgreSQL', 'MySQL', 'Couchbase', 'Redis', 'Kafka', 'Snowflake', 'OpenTelemetry', 'Prometheus', 'Datadog'], art: 'sand' },
];

export const education = [
  {
    school: 'George Mason University',
    degree: 'Master of Science, Computer Science',
    detail: 'GPA 3.93',
    period: 'Aug 2021 – May 2023',
    place: 'Fairfax, VA',
    art: 'lilac',
  },
  {
    school: 'Harcourt Butler Technological Institute',
    degree: 'Bachelor of Technology, Information Technology',
    detail: 'GPA 3.8',
    period: 'Aug 2014 – Jun 2018',
    place: 'Kanpur, India',
    art: 'clay',
  },
];
