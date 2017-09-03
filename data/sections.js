import basics from './content/basics.js'
import structure from './content/structure.js'

const intro = {
    name: 'Intro',
    color: '#FD306F',
    chapters: [
        { number: 'A', name: 'Introduction',    url: '/intro/introduction', ready: true },
        { number: 'B', name: 'Things We Need',  url: '/intro/thingsWeNeed', ready: true },
        { number: 'C', name: 'Assignments',     url: '/intro/assignments', ready: true },
        { number: 'D', name: 'Resources',       url: '/intro/resources', ready: true },
    ]
}

const layout = {
    name: 'Layout',
    color: '#3ECC94',
    chapters: [
        { number: '11', name: 'Inline Method',      ready: false },
        { number: '12', name: 'Float Method',       ready: false },
        { number: '13', name: 'Media Queries',      ready: false },
        { number: '14', name: 'Float Grid',         ready: false },
        { number: '15', name: 'FlexBox',            ready: false }
    ]
}

const components = {
    name: 'Components',
    color: '#3ECC94',
    chapters: [
        { number: '16', name: 'Navigation',     ready: false },
        { number: '17', name: 'Hero',           ready: false },
        { number: '18', name: 'Footer',         ready: false },
        { number: '19', name: 'Home Page',      ready: false },
        { number: '20', name: 'About Page',     ready: false },
        { number: '21', name: 'Price Page',     ready: false },
        { number: '22', name: 'Contact Page',   ready: false },
    ]
}

const advancedCss = {
    name: 'Advanced CSS',
    color: '#3ECC94',
    chapters: [
        { number: '23', name: 'Advanced Selectors',   ready: false },
        { number: '24', name: 'CSS Weight',           ready: false },
        { number: '25', name: 'CSS Animations',       ready: false },
        { number: '26', name: 'CSS Frameworks',       ready: false },

    ]
}

const practical = {
    name: 'Practical',
    color: '#3ECC94',
    chapters: [
        { number: '27', name: 'Remake facebook.design',   ready: false },
        { number: '28', name: 'Remake beats.com',           ready: false },

    ]
}

const deployment = {
    name: 'Deployment',
    color: '#3ECC94',
    chapters: [
        { number: '29', name: 'Optimization',   ready: false },
        { number: '30', name: 'Accessibility',  ready: false },
        { number: '31', name: 'Hosting',        ready: false },

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
