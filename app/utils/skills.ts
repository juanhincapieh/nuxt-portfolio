import { SKILLS } from '~/data/skills'
import type { Skill } from '~/types/skill'

const SKILLS_BY_LABEL = new Map(
    Object.values(SKILLS).flat().map(skill => [skill.label.toLowerCase(), skill]),
)

/** Finds a skill by its label (case-insensitive). Unknown labels come back without a logo. */
export function getSkill(label: string): Pick<Skill, 'label'> & Partial<Skill> {
    return SKILLS_BY_LABEL.get(label.toLowerCase()) ?? { label }
}
