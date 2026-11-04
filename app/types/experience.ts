export interface Role {
    role: string
    location: string
    startDate: string
    /** Use `'Present'` for the current role. */
    endDate: string
    /** Most important technologies, in display order. Labels match `data/skills.ts` to show a logo. */
    technologies: string[]
    description: string
}

export interface Experience {
    company: string
    roles: Role[]
}

/** A single role together with its company, e.g. one row in a list. */
export interface RoleEntry extends Role {
    company: string
}
