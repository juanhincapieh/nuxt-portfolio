export interface Project {
    title: string
    description: string
    /** Labels match `data/skills.ts` to get a color. */
    technologies: string[]
    /** Live site, if deployed. */
    url?: string
    /** GitHub repository, if public. */
    repo?: string
}
