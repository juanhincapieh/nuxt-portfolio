import type { Experience } from '~/types/experience'

export const EXPERIENCE: Experience[] = [
    {
        company: "Globant",
        roles: [
            {
                role: "Web UI Developer",
                location: "Medellín, Colombia",
                startDate: "Sep. 2026",
                endDate: "Present",
                technologies: ["Vue", "TypeScript", "Tailwind", "DotNet"],
                description: 'Web UI Developer on a customer management platform, building and maintaining features across both Vue 2 and Vue 3 codebases. I craft responsive, reusable interfaces with Tailwind CSS and TypeScript, integrating them with .NET services to deliver reliable workflows for managing client data and relationships.'
            }
        ]
    },
    {
        company: "Unergy",
        roles: [
            {
                role: "Lead Software Developer",
                location: "Medellín, Colombia",
                startDate: "Feb. 2026",
                endDate: "Sep. 2026",
                technologies: ["Nuxt", "Svelte", "Django", "PostgreSQL", "Docker", "AWS", "GCP"],
                description: 'Versatile Full Stack Developer & DevOps Specialist experienced in architecting scalable APIs with Django and Express, alongside modern frontends in Nuxt 4. I bridge the gap between code and infrastructure by automating CI/CD pipelines, managing GCP/on-premise networks, and ensuring high availability through Docker and NGINX for robust, production-ready applications.'
            },
            {
                role: "Frontend Developer",
                location: "Medellín, Colombia",
                startDate: "Oct. 2025",
                endDate: "Feb. 2026",
                technologies: ["Nuxt", "Flutter", "GCP"],
                description: 'Frontend Developer & Infrastructure Lead with a focus on high-performance systems. I architected custom Flutter mobile apps and scalable Vue 3/Nuxt platforms, while simultaneously leading a strategic overhaul of network infrastructure and DevOps pipelines across AWS/GCP to maximize team efficiency and system reliability.'
            }
        ]
    },
    {
        company: "Universidad Nacional de Colombia",
        roles: [
            {
                role: "Teaching Assistant - Software Engineering Course",
                location: "Medellín, Colombia",
                startDate: "Aug. 2025",
                endDate: "Dec. 2025",
                technologies: ["Notion", "Vercel", "Firebase", "Figma", "Miro"],
                description: 'Mentored student teams through the full software development lifecycle, leading workshops on UML modeling and requirements elicitation. I specialized in bridging academic projects with industry standards by guiding the practical application of SCRUM and ensuring high-quality software analysis and deliverables.'
            },
            {
                role: "Lead Software Developer",
                location: "Medellín, Colombia",
                startDate: "Sep. 2024",
                endDate: "Jul. 2025",
                technologies: ["Svelte", "Node.js", "Firebase"],
                description: "Led the end-to-end development of a university web platform, ensuring seamless frontend-backend integration with Svelte and Apps Script. As Scrum Master, I optimized delivery timelines through agile methodologies and established a robust technical foundation using detailed UML design and consistent software requirements."
            }
        ]
    }
]
