export interface Skill {
    logo: string
    label: string
    /** Brand-inspired color, light enough to read on the dark background. Used by TechChip. */
    color: string
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'other'

export type SkillGroups = Record<SkillCategory, Skill[]>
