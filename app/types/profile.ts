export type SocialPlatform = 'github' | 'linkedin' | 'instagram'

export interface Social {
    platform: SocialPlatform
    label: string
    url: string
}

export interface Portrait {
    src: string
    alt: string
}

export interface Profile {
    name: string
    /** Rotated in the Hero, first one is shown before hydration. */
    roles: string[]
    tagline: string
    /** First professional role, as `YYYY-MM`. Used to compute years of experience. */
    careerStart: string
    portrait: Portrait
    socials: Social[]
}

export interface ProfileStat {
    value: string
    label: string
}

export interface CurrentRole {
    role: string
    company: string
}
