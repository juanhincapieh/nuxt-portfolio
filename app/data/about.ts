import type { AboutIntro } from '~/types/about'

/**
 * About page intro.
 * DRAFT: written from the experience data; rewrite the paragraphs in your own voice.
 */
export const ABOUT_INTRO: AboutIntro = {
    title: 'About me',
    paragraphs: [
        "I'm Juan, a Full Stack Software Engineer based in Medellín, Colombia. I like building products end to end: from the interface people use to the APIs and infrastructure that keep it running.",
        'Today I work as a Web UI Developer at Globant. Before that, at Unergy, I grew from Frontend Developer to Software Developer, building Nuxt and Flutter apps, Django and Express APIs, and the CI/CD pipelines, Docker setups and cloud networks behind them.',
        'It all started at Universidad Nacional de Colombia, where I led the development of a university web platform as Scrum Master, and later mentored student teams as a teaching assistant in Software Engineering.',
    ],
    photo: {
        // 3:4 portrait. Add the file at public/About/juan.webp; until then the Hero photo is used.
        src: '/About/juan.webp',
        fallbackSrc: '/Hero/juan.webp',
        alt: 'Portrait of Juan Hincapie',
    },
}
