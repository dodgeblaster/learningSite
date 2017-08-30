import basics from './content/basics.js'
import structure from './content/structure.js'

const intro = {
    name: 'Intro',
    color: '#FD306F',
    chapters: [
        { number: 'A', name: 'Introduction',    link: 'google.com' },
        { number: 'B', name: 'Things We Need',  link: 'google.com' },
        { number: 'C', name: 'Assignments',     link: 'google.com' },
        { number: 'D', name: 'Resources',       link: 'google.com' },
        { number: 'E', name: 'Extra Help',      link: 'google.com' }
    ]
}

const layout = {
    name: 'Layout',
    color: '#3ECC94',
    chapters: [
        { number: '11', name: 'Inline Method',      link: 'google.com' },
        { number: '12', name: 'Float Method',       link: 'google.com' },
        { number: '13', name: 'Media Queries',      link: 'google.com' },
        { number: '14', name: 'Float Grid',         link: 'google.com' },
        { number: '15', name: 'FlexBox',            link: 'google.com' }
    ]
}

const components = {
    name: 'Components',
    color: '#3ECC94',
    chapters: [
        { number: '16', name: 'Navigation',     link: 'google.com' },
        { number: '17', name: 'Hero',           link: 'google.com' },
        { number: '18', name: 'Footer',         link: 'google.com' },
        { number: '19', name: 'Home Page',      link: 'google.com' },
        { number: '20', name: 'About Page',     link: 'google.com' },
        { number: '21', name: 'Price Page',     link: 'google.com' },
        { number: '22', name: 'Contact Page',   link: 'google.com' },
    ]
}

const advancedCss = {
    name: 'Advanced CSS',
    color: '#3ECC94',
    chapters: [
        { number: '23', name: 'Advanced Selectors',   link: 'google.com' },
        { number: '24', name: 'CSS Weight',           link: 'google.com' },
        { number: '25', name: 'CSS Animations',       link: 'google.com' },
        { number: '26', name: 'CSS Frameworks',       link: 'google.com' },

    ]
}

const practical = {
    name: 'Practical',
    color: '#3ECC94',
    chapters: [
        { number: '27', name: 'Remake facebook.design',   link: 'google.com' },
        { number: '28', name: 'Remake beats.com',           link: 'google.com' },

    ]
}

const deployment = {
    name: 'Deployment',
    color: '#3ECC94',
    chapters: [
        { number: '29', name: 'Optimization',   link: 'google.com' },
        { number: '30', name: 'Accessibility',  link: 'google.com' },
        { number: '31', name: 'Hosting',        link: 'google.com' },

    ]
}



export default [
    intro,
    basics,
    structure,
    layout,
    components,
    advancedCss,
    practical,
    deployment
]
