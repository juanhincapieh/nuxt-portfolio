export interface AboutPhoto {
    src: string
    /** Shown if `src` fails to load (e.g. the file hasn't been added yet). */
    fallbackSrc: string
    alt: string
}

export interface AboutIntro {
    title: string
    paragraphs: string[]
    photo: AboutPhoto
}
