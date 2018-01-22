const unitsAndMeasurements = {
    ready: true,
    number: '6',
    name: 'Units and Measurements',
    slideshow: [
          { original: '/static/slideshows/02structure/06/06-01.png' },
          { original: '/static/slideshows/02structure/06/06-02.png' },
          { original: '/static/slideshows/02structure/06/06-03.png' },
          { original: '/static/slideshows/02structure/06/06-04.png' },
          { original: '/static/slideshows/02structure/06/06-05.png' },
          { original: '/static/slideshows/02structure/06/06-06.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/4-css-font-and-color.html',
    resources: (
        <ul>
            <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <p>Make a new project with an index.html file.<br/>
            - Make 3 steelblue divs with absolute widths of 200px, 500px, and 900px<br/>
            - Make 3 orange divs with relative widths of 20&, 50&, and 90&<br/>
            Click <a href="/static/exercises/02/01.png">here</a> for a reference.
            </p>
        </div>
    )
}


const displayType = {
    ready: true,
    number: '7',
    name: 'Display Type',
    slideshow: [
          { original: '/static/slideshows/02structure/07/07-01.png' },
          { original: '/static/slideshows/02structure/07/07-02.png' },
          { original: '/static/slideshows/02structure/07/07-03.png' },
          { original: '/static/slideshows/02structure/07/07-04.png' },
          { original: '/static/slideshows/02structure/07/07-05.png' },
          { original: '/static/slideshows/02structure/07/07-06.png' },
          { original: '/static/slideshows/02structure/07/07-07.png' },
          { original: '/static/slideshows/02structure/07/07-08.png' },
          { original: '/static/slideshows/02structure/07/07-09.png' },
          { original: '/static/slideshows/02structure/07/07-10.png' },
          { original: '/static/slideshows/02structure/07/07-11.png' },
          { original: '/static/slideshows/02structure/07/07-12.png' },
          { original: '/static/slideshows/02structure/07/07-13.png' },
          { original: '/static/slideshows/02structure/07/07-14.png' },
          { original: '/static/slideshows/02structure/07/07-15.png' }
    ],
    exercise: (
        <div>
            <p>Make a new project with an index.html file.<br/>
            - Make a steelblue div that is display block and 90% of the width<br/>
            - Make 8 orange divs that are display inline<br/>
            - Make 8 orange divs that are display inline-block<br/>
            Click <a href="/static/exercises/02/02.png">here</a> for a reference.
            </p>
        </div>
    )
}

const boxModel = {
    ready: true,
    number: '8',
    name: 'Box Model',
    slideshow: [
          { original: '/static/slideshows/02structure/08/08-01.png' },
          { original: '/static/slideshows/02structure/08/08-02.png' },
          { original: '/static/slideshows/02structure/08/08-03.png' },
          { original: '/static/slideshows/02structure/08/08-04.png' },
          { original: '/static/slideshows/02structure/08/08-05.png' },
          { original: '/static/slideshows/02structure/08/08-06.png' },
          { original: '/static/slideshows/02structure/08/08-07.png' },
          { original: '/static/slideshows/02structure/08/08-08.png' },
          { original: '/static/slideshows/02structure/08/08-09.png' },
          { original: '/static/slideshows/02structure/08/08-10.png' },
          { original: '/static/slideshows/02structure/08/08-11.png' },
          { original: '/static/slideshows/02structure/08/08-12.png' },
          { original: '/static/slideshows/02structure/08/08-13.png' },
          { original: '/static/slideshows/02structure/08/08-14.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/5-box-model.html',
    reading: 'Chapter 13',
    exercise: (
        <div>
            <p>Make a new project with an index.html file.
            Inside this index file we will have 3 containing divs: a header, section, and footer div, each with a different background color.
            Each Section should have an h1 tag labeling the section, and each section should have some padding to give some white space between the text and the edge of the container.
            Click <a href="/static/exercises/02/03.png">here</a> for a reference.
            </p>
        </div>
    )
}

const images = {
    ready: true,
    number: '9',
    name: 'Images',
    slideshow: [
          { original: '/static/slideshows/02structure/09/09-01.png' },
          { original: '/static/slideshows/02structure/09/09-02.png' },
          { original: '/static/slideshows/02structure/09/09-03.png' },
          { original: '/static/slideshows/02structure/09/09-04.png' },
          { original: '/static/slideshows/02structure/09/09-05.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/6-html-images.html',
    resources: (
        <ul>
            <li><a href="https://material.io/guidelines/style/imagery.html#imagery-ui-integration">Google Guidelines on Images</a></li>
            <li><a href='https://image-test-nmazhqdcqx.now.sh/'>Img Example Full Size</a></li>
            <li><a href='https://image-test-nmazhqdcqx.now.sh/'>Img Example Sized Down</a></li>
            <li><a href='https://tinypng.com/'>Image Compressor</a></li>
            <li><a href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images'>MDN Responseive Images</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <p>
                For this exercise, we are going to make a landing page. This should use an image from unsplash for the background.
                The image should resize itself when you adjust the width of the browser window and stay centered. This page should have
                an h1 tag and some lorem ipsum text, along with an anchor tag that looks like a button.
                Click <a href="/static/exercises/02/04.png">here</a> for reference.
            </p>

        </div>
    )
}


export default {
    name: 'Structure',
    color: '#AA30FD',
    chapters: [
        unitsAndMeasurements,
        displayType,
        boxModel,
        images
    ]
}
