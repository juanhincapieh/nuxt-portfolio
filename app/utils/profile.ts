import { EXPERIENCE } from '~/data/experience'
import { PROFILE } from '~/data/profile'
import { SKILLS } from '~/data/skills'
import type { CurrentRole, ProfileStat } from '~/types/profile'

/** Full years elapsed since a `YYYY-MM` date. */
export function yearsSince(yearMonth: string, now: Date = new Date()): number {
    const [year = 0, month = 1] = yearMonth.split('-').map(Number)
    const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month)
    return Math.max(0, Math.floor(months / 12))
}

/** The role marked as `'Present'` in the experience data, if any. */
export function getCurrentRole(): CurrentRole | null {
    for (const { company, roles } of EXPERIENCE) {
        const current = roles.find(({ endDate }) => endDate === 'Present')
        if (current) return { role: current.role, company }
    }
    return null
}

/** Headline numbers derived from the content, so they never go stale. */
export function getProfileStats(): ProfileStat[] {
    const technologies = Object.values(SKILLS).flat().length

    return [
        { value: `${yearsSince(PROFILE.careerStart)}+`, label: 'Years of experience' },
        { value: `${EXPERIENCE.length}`, label: 'Companies' },
        { value: `${technologies}`, label: 'Technologies' },
    ]
}
