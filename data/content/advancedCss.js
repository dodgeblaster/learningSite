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
    ready: true,
    number: '23',
    name: 'CSS Weight',

    resources: (
        <ul>
            <li><a href='https://s3.amazonaws.com/htmlbasicsresources/cssweight.mp4'>CSS Weight Video</a></li>
        </ul>
    ),
    exercise: (
        <div>

        </div>
    )
}

const positioning = {
    ready: true,
    number: '24',
    name: 'Positioning',

    exercise: (
        <div>
            <p>Recreate <a href='/static/exercises/05/position.png'>this mock</a>. The image should already be setup for you in the card-image class in the starter file. Hint, the box underneath the image is not position static.</p>
        </div>
    )
}

const animation = {
    ready: true,
    number: '25',
    name: 'Animation',
    resources: (
        <ul>
            <li><a href='https://tympanus.net/Development/HoverEffectIdeas/'>Hover Animation Examples</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <p>Recreate <a href='/static/exercises/05/animation.png'>this mock</a>.</p>
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
