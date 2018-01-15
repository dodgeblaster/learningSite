const inlineMethod = {
    ready: true,
    number: '10',
    name: 'Inline Method',
    slideshow: [
        { original: '/static/slideshows/03layout/10/10-01.png' },
        { original: '/static/slideshows/03layout/10/10-02.png' },
        { original: '/static/slideshows/03layout/10/10-03.png' },
        { original: '/static/slideshows/03layout/10/10-04.png' },
        { original: '/static/slideshows/03layout/10/10-05.png' },
        { original: '/static/slideshows/03layout/10/10-06.png' },
        { original: '/static/slideshows/03layout/10/10-07.png' },
        { original: '/static/slideshows/03layout/10/10-08.png' },
        { original: '/static/slideshows/03layout/10/10-09.png' },
        { original: '/static/slideshows/03layout/10/10-10.png' },
        { original: '/static/slideshows/03layout/10/10-11.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/7-css-layout.html',
    // resources: (
    //     <ul>
    //         <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
    //     </ul>
    // ),
    exercise: (
        <div>
            <p>
                Use '3 Columns' in the '01 Inline Method Folder' from your downloaded starter code.
                Add a third column so that it matches <a href='/static/exercises/03/01.png'>this</a> picture.
            </p>
            <p>
                Use '4 Columns' in the '01 Inline Method Folder' from your downloaded starter code.
                Add a third column so that it matches <a href='/static/exercises/03/02.png'>this</a> picture.
            </p>

        </div>
    )
}

const floatMethod = {
    ready: true,
    number: '11',
    name: 'Float Method',
    slideshow: [
        { original: '/static/slideshows/03layout/11/11-01.png' },
        { original: '/static/slideshows/03layout/11/11-02.png' },
        { original: '/static/slideshows/03layout/11/11-03.png' },
        { original: '/static/slideshows/03layout/11/11-04.png' },
        { original: '/static/slideshows/03layout/11/11-05.png' },
        { original: '/static/slideshows/03layout/11/11-06.png' },
        { original: '/static/slideshows/03layout/11/11-07.png' },
        { original: '/static/slideshows/03layout/11/11-08.png' },
        { original: '/static/slideshows/03layout/11/11-09.png' },
        { original: '/static/slideshows/03layout/11/11-10.png' },
        { original: '/static/slideshows/03layout/11/11-11.png' },
        { original: '/static/slideshows/03layout/11/11-12.png' },
        { original: '/static/slideshows/03layout/11/11-13.png' },
        { original: '/static/slideshows/03layout/11/11-14.png' },
        { original: '/static/slideshows/03layout/11/11-15.png' },
        { original: '/static/slideshows/03layout/11/11-16.png' },
        { original: '/static/slideshows/03layout/11/11-17.png' },
        { original: '/static/slideshows/03layout/11/11-18.png' },
        { original: '/static/slideshows/03layout/11/11-19.png' },
        { original: '/static/slideshows/03layout/11/11-20.png' },
        { original: '/static/slideshows/03layout/11/11-21.png' },
        { original: '/static/slideshows/03layout/11/11-22.png' },
        { original: '/static/slideshows/03layout/11/11-23.png' },
        { original: '/static/slideshows/03layout/11/11-24.png' },
        { original: '/static/slideshows/03layout/11/11-25.png' },
        { original: '/static/slideshows/03layout/11/11-26.png' },
        { original: '/static/slideshows/03layout/11/11-27.png' },
        { original: '/static/slideshows/03layout/11/11-28.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/7-css-layout.html',
    reading: (
        <ul>
            <li><a href='http://www.hongkiat.com/blog/css-floats/'>Article on how Float works</a></li>
            <li><a href='https://designshack.net/articles/css/everything-you-never-knew-about-css-floats/'>9 Rules of Float</a></li>
        </ul>
    ),

    exercise: (
        <div>
            <p>
                Use '3 Columns' in the '02 Float Method Folder' from your downloaded starter code.
                Add a third column so that it matches <a href='/static/exercises/03/01.png'>this</a> picture.
            </p>
            <p>
                Use '4 Columns' in the '02 Float Method Folder' from your downloaded starter code.
                Add a third column so that it matches <a href='/static/exercises/03/02.png'>this</a> picture.
            </p>


        </div>
    )
}

const mediaQueries = {
    ready: true,
    number: '12',
    name: 'Media Queries',
    slideshow: [
        { original: '/static/slideshows/03layout/12/12-01.png' },
        { original: '/static/slideshows/03layout/12/12-02.png' },
        { original: '/static/slideshows/03layout/12/12-03.png' },
        { original: '/static/slideshows/03layout/12/12-04.png' },
        { original: '/static/slideshows/03layout/12/12-05.png' },
        { original: '/static/slideshows/03layout/12/12-06.png' },
        { original: '/static/slideshows/03layout/12/12-07.png' },
        { original: '/static/slideshows/03layout/12/12-08.png' },
        { original: '/static/slideshows/03layout/12/12-09.png' },
        { original: '/static/slideshows/03layout/12/12-10.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/8-css-media-queries.html',
    // resources: (
    //     <ul>
    //         <li><a href='https://developer.mozilla.org/en-US/docs/Web/CSS/length'>MDN Docs on Length</a></li>
    //     </ul>
    // ),
    exercise: (
        <div>
        <p>Take either the Inline Method project or Float project, and apply medium and small media queries to the four columns so they properly fit at all sizes.
        For example, at medium width there could be 2 divs instead of 4 across, and at small width every div takes up 100%.</p>

        </div>
    )
}

const floatGrid = {
    ready: true,
    number: '13',
    name: 'Float Grid',
    slideshow: [
        { original: '/static/slideshows/03layout/13/13-01.png' },
        { original: '/static/slideshows/03layout/13/13-02.png' },
        { original: '/static/slideshows/03layout/13/13-03.png' },
        { original: '/static/slideshows/03layout/13/13-04.png' },
        { original: '/static/slideshows/03layout/13/13-05.png' },
        { original: '/static/slideshows/03layout/13/13-06.png' },
        { original: '/static/slideshows/03layout/13/13-07.png' },
        { original: '/static/slideshows/03layout/13/13-08.png' },
        { original: '/static/slideshows/03layout/13/13-09.png' },
        { original: '/static/slideshows/03layout/13/13-10.png' },
        { original: '/static/slideshows/03layout/13/13-11.png' },
        { original: '/static/slideshows/03layout/13/13-12.png' },
        { original: '/static/slideshows/03layout/13/13-13.png' },
        { original: '/static/slideshows/03layout/13/13-14.png' },
        { original: '/static/slideshows/03layout/13/13-15.png' },
        { original: '/static/slideshows/03layout/13/13-16.png' },
        { original: '/static/slideshows/03layout/13/13-17.png' },
        { original: '/static/slideshows/03layout/13/13-18.png' },
        { original: '/static/slideshows/03layout/13/13-19.png' },
        { original: '/static/slideshows/03layout/13/13-20.png' },
        { original: '/static/slideshows/03layout/13/13-21.png' },
        { original: '/static/slideshows/03layout/13/13-22.png' },
        { original: '/static/slideshows/03layout/13/13-23.png' },
        { original: '/static/slideshows/03layout/13/13-24.png' },
        { original: '/static/slideshows/03layout/13/13-25.png' },
        { original: '/static/slideshows/03layout/13/13-26.png' },
        { original: '/static/slideshows/03layout/13/13-27.png' },
        { original: '/static/slideshows/03layout/13/13-28.png' },
        { original: '/static/slideshows/03layout/13/13-29.png' },
        { original: '/static/slideshows/03layout/13/13-30.png' },
        { original: '/static/slideshows/03layout/13/13-31.png' },
        { original: '/static/slideshows/03layout/13/13-32.png' },
        { original: '/static/slideshows/03layout/13/13-33.png' },
        { original: '/static/slideshows/03layout/13/13-34.png' },
        { original: '/static/slideshows/03layout/13/13-35.png' },
        { original: '/static/slideshows/03layout/13/13-36.png' },
        { original: '/static/slideshows/03layout/13/13-37.png' },
        { original: '/static/slideshows/03layout/13/13-38.png' },
        { original: '/static/slideshows/03layout/13/13-39.png' }
    ],
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/9-css-grid-system.html',
    resources: (
        <ul>
            <li><a href='http://www.simplegrid.io/'>Simple Grid</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <p>
                Use '05 Grid System' project in course code.
                Apply the grid system to the HTML so that:<br/>
                - At large width, it looks like <a href='/static/exercises/03/grid/large.png'>this</a><br/>
                - At medium width, it looks like <a href='/static/exercises/03/grid/medium.png'>this</a><br/>
                - At small width, it looks like <a href='/static/exercises/03/grid/small.png'>this</a>
            </p>
        </div>
    )
}

const flexBox = {
    ready: true,
    number: '14',
    name: 'FlexBox',
    resources: (
        <ul>
            <p>Coming soon...</p>
         {/*   <li><a href='https://s3.amazonaws.com/htmlbasicsresources/flex1.mp4'>FlexBox 1</a></li>
            <li><a href='https://s3.amazonaws.com/htmlbasicsresources/flex2.mp4'>FlexBox 2</a></li>
        */}</ul>
    )
}


export default {
    name: 'Layout',
    color: '#3ECC94',
    chapters: [
        inlineMethod,
        floatMethod,
        mediaQueries,
        floatGrid,
        flexBox
    ]
}
