import { EXPERIENCE } from '~/data/experience'
import type { RoleEntry } from '~/types/experience'

/** Every role as its own entry, newest first (same order as the data). */
export function getRoleEntries(): RoleEntry[] {
    return EXPERIENCE.flatMap(({ company, roles }) =>
        roles.map(role => ({ ...role, company })),
    )
}
