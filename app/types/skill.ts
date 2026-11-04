export interface Skill {
    logo: string
    label: string
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'other'

export type SkillGroups = Record<SkillCategory, Skill[]>
