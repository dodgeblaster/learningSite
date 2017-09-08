const advancedSelectors = {
    ready: false,
    number: '22',
    name: 'Advanced Selectors',
    slideshow: [ { original: '/static/slideshows/02structure/06/06-01.png' },],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    resources: (
        <ul>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
        </ul>
    ),
    exercise: (
        <div>

        </div>
    )
}

const cssWeight = {
    ready: false,
    number: '23',
    name: 'CSS Weight',
    slideshow: [ { original: '/static/slideshows/02structure/06/06-01.png' },],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    resources: (
        <ul>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
        </ul>
    ),
    exercise: (
        <div>

        </div>
    )
}

const positioning = {
    ready: false,
    number: '24',
    name: 'Positioning',
    slideshow: [
          { original: '/static/slideshows/02structure/06/06-01.png' },
          { original: '/static/slideshows/02structure/06/06-02.png' },
          { original: '/static/slideshows/02structure/06/06-03.png' },
          { original: '/static/slideshows/02structure/06/06-04.png' },
          { original: '/static/slideshows/02structure/06/06-05.png' },
          { original: '/static/slideshows/02structure/06/06-06.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    resources: (
        <ul>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
        </ul>
    ),
    exercise: (
        <div>

        </div>
    )
}

const animation = {
    ready: false,
    number: '25',
    name: 'Animation',
    slideshow: [ { original: '/static/slideshows/02structure/06/06-01.png' },],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    resources: (
        <ul>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
        </ul>
    ),
    exercise: (
        <div>

        </div>
    )
}

const frameworks = {
    ready: false,
    number: '26',
    name: 'CSS Frameworks',
    slideshow: [ { original: '/static/slideshows/02structure/06/06-01.png' },],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    resources: (
        <ul>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
        </ul>
    ),
    exercise: (
        <div>

        </div>
    )
}


export default {
    name: 'Advanced CSS',
    color: '#3ECC94',
    chapters: [
        advancedSelectors,
        cssWeight,
        positioning,
        animation,
        frameworks
    ]
}
