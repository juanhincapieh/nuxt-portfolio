export interface Role {
    role: string
    location: string
    startDate: string
    /** Use `'Present'` for the current role. */
    endDate: string
    description: string
}

export interface Experience {
    company: string
    roles: Role[]
}
