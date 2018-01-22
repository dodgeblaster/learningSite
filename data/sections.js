import basics from './content/basics.js'
import structure from './content/structure.js'
import layout from './content/layout.js'
import components from './content/components.js'
import advancedCss from './content/advancedCss.js'
import hosting from './content/hosting.js'
import sass from './content/sass.js'

const intro = {
    name: 'Intro',
    color: '#FD306F',
    chapters: [
        { number: 'A', name: 'Introduction',    url: '/intro/introduction', ready: true },
        { number: 'B', name: 'Things We Need',  url: '/intro/thingsWeNeed', ready: true },
        { number: 'C', name: 'Assignments',     url: '/intro/assignments', ready: true },
        { number: 'D', name: 'Resources',       url: '/intro/resources', ready: true },
        { number: 'E', name: 'Extra',           url: '/intro/extra', ready: true },
    ]
}

const practical = {
    name: 'Practical',
    color: '#3ECC94',
    chapters: [
        { number: '27', name: 'Remake facebook.design',   ready: false },
        { number: '28', name: 'Remake beatsbydre.com', ready: true,
            resources: (
                <ul>
                    <li><a href='https://www.beatsbydre.com/ca'>Beats Website</a></li>
                    <li><a href='https://s3.amazonaws.com/htmlbasicsresources/beats-assets.zip'>Project Assets</a></li>
                </ul>

            )
        },

    ]
}

const deployment = {
    name: 'Deployment',
    color: '#3ECC94',
    chapters: [
        // { number: '29', name: 'Optimization',   ready: false },
        // { number: '30', name: 'Accessibility',  ready: false },
        { number: '29', name: 'Hosting',        ready: false },

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
    hosting,
    sass
]
