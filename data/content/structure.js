const unitsAndMeasurements = {
    ready: true,
    number: '6',
    name: 'Units and Measurements',
    slideshow: [ { original: '/static/slideshows/01basics/01intro/red07.png' } ],
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

const boxModel = {
    ready: false,
    number: '7',
    name: 'Box Model',
    slideshow: [ { original: '/static/slideshows/01basics/01intro/red07.png' } ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    exercise: (
        <div>
            <h2>Exercise - Try out the Box Model</h2>
            <p>Make a new project with an index.html file.
            Inside this index file we will have 3 containing divs: a header, section, and footer div, each with a different background color.
            Each Section should have an h1 tag labeling the section, and each section should have some padding to give some white space between the text and the edge of the container.
            Click <a href="../../img/boxmodelmockup.png">here</a> for a reference.
            </p>

        </div>
    )
}

const displayType = {
    ready: false,
    number: '8',
    name: 'Display Type',
    slideshow: '',
    notes: '',
    resources: (
        <div>

        </div>
    ),
    exercise: (
        <div>

        </div>
    )
}

const positioning = {
    ready: false,
    number: '9',
    name: 'Positioning',
    slideshow: '',
    notes: '',
    resources: (
        <div>

        </div>
    ),
    exercise: (
        <div>

        </div>
    )
}

const images = {
    ready: false,
    number: '10',
    name: 'Images',
    slideshow: [ { original: '/static/slideshows/01basics/01intro/red07.png' } ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/6-html-images.html',
    resources: (
        <ul>
            <li><a href="https://github.com/dodgeblaster/landing-page">Landing Page Code</a></li>
            <li><a href="https://material.io/guidelines/style/imagery.html#imagery-ui-integration">Google Guidelines on Images</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <h2>Exercise - Make a Landing Page</h2>
            <p>
                For this excercise, we are going to make a landing page. This should an image from unsplash as the background.
                The image should resize itself when you adjust the width fo the browser window and stay cetnered. This page should have
                an h1 tag and some lorem ipsum text, along with an anchor tag that looks like a button.
                Click <a href="../../img/imgmock.png">here</a> for reference.
            </p>

        </div>
    )
}


export default {
    name: 'Structure',
    color: '#AA30FD',
    chapters: [
        unitsAndMeasurements,
        boxModel,
        displayType,
        positioning,
        images
    ]
}
