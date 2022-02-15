export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}


export interface ProjectInterface {
    _id: string
    name: string
    description: string
    technologies: Array<string>
    outcome: Array<string>
    contribution: Array<string>
    link?: string
    github?: string
}