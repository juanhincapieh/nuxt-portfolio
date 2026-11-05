import type { Project } from '~/types/project'

/** Copy for the Projects page header. */
export const PROJECTS_PAGE = {
    title: 'Projects',
    intro: 'Things I have built, what they do, and the tools behind them.',
}

export const PROJECTS: Project[] = [
    {
        title: 'Serenus',
        description: 'Winner of the OmegaLab 2025 hackathon by NOVA EAFIT and Globant. A platform for universities in Medellín that detects early signs of academic stress, using Gemini to analyze student journals and recommend personalized tools like guided meditation and study planning, plus preventive support through a chatbot.',
        technologies: ['React', 'TypeScript', 'Django', 'Python', 'Tailwind', 'Gemini'],
        repo: 'https://github.com/juanhincapieh/serenus',
    },
]
