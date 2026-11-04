import type { Profile } from '~/types/profile'

export const PROFILE: Profile = {
    name: 'Juan Hincapie',
    roles: [
        'Full Stack Engineer',
        'Web UI Developer',
        'DevOps Enthusiast',
    ],
    tagline: 'I build fast, polished web products, from the UI down to the infrastructure.',
    careerStart: '2024-09',
    portrait: {
        src: '/Hero/juan.webp',
        alt: 'Portrait of Juan Hincapie',
    },
    socials: [
        { platform: 'github', label: 'GitHub', url: 'https://github.com/juanhincapieh' },
        { platform: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/juanhincapieh' },
        { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/juanhincapieh' },
    ],
    cvUrl: '/Files/cv.pdf',
}
