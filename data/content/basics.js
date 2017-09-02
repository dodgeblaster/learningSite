const htmlBasics = {
    ready: true,
    number: '1',
    name: 'HTML Basics',
    slideshow: 'https://docs.google.com/presentation/d/1peUHXBMunTooH0323bC37DlJ_yaVtM9dCBw3Yjq8TH8/embed?start=false&loop=false&delayms=3000',
    code: 'https://github.com/dodgeblaster/html-basics/tree/master/01%20Basics/01%20HTML%20Intro',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/1-html-basics.html',
    exercise: (
        <div>
            <p>
                Make a starter file. We will be adding to this starter file
                as go along in this course. Make sure its named
                <strong>index.html</strong>
            </p>
        </div>
    )
}

const htmlElements = {
    ready: true,
    number: '2',
    name: 'HTML Elements',
    slideshow: 'https://docs.google.com/presentation/d/1PXdq9qoC9F84t6JUOTw_b6Ios1U1jJmQx01WHCgbUIM/embed?start=false&loop=false&delayms=3000',
    code: 'https://github.com/dodgeblaster/html-basics/tree/master/01%20Basics/02%20HTML%20Elements',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/2-html-elements.html',
    exercise: (
        <div>
            <p>
                Make 3 html pages. Each page should have links to the other 2 pages as
                well as an external link to a website. Each page should use at least 1
                container element (div, section, header, footer).
            </p>
        </div>
    )
}

const cssBasics = {
    ready: true,
    number: '3',
    name: 'CSS Basics',
    slideshow: 'https://docs.google.com/presentation/d/1thxP0oEYmFpeACoNDx88nKc0Oq3WsjwoTZTRAvPDyeg/embed?start=false&loop=false&delayms=3000',
    code: 'https://github.com/dodgeblaster/html-basics/tree/master/01%20Basics/03%20CSS%20Intro',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/3-css-basics.html',
    resources: (
        <div>
            <h2>CSS Reset URL</h2>
            <p>Search 'css reset cdn' in google, and look for a CDN site hosting it</p>
            <h2>Base CSS URL</h2>
            <p>https://rawgit.com/dodgeblaster/basecss/master/base.css</p>
        </div>
    ),
    exercise: (
        <div>
            <p>Make a 3 page project. Each page will have some text inside.</p>
            <ul>
                <li>1 page should color the text using inline styles.</li>
                <li>1 page should color the text using internal styles.</li>
                <li>1 page should color the text using the proper and recommended way, external styles.</li>
            </ul>
            <br/>
            <p>All 3 pages should include reset.css and base.css in the header section</p>
        </div>
    )
}

const cssFont = {
    ready: true,
    number: '4',
    name: 'CSS Font',
    slideshow: 'https://docs.google.com/presentation/d/1hDBAVHZxvYlixH8_29E0HpvMRHrwJAsgbYqthxMAUvo/embed?start=false&loop=false&delayms=3000',
    code: 'https://github.com/dodgeblaster/html-basics/tree/master/01%20Basics/04%20CSS%20Font',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/4-css-font-and-color.html',
    resources: (
        <ul>
            <li><a href="https://fonts.google.com/">Google Fonts</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <p>
                None for this one.
            </p>
        </div>
    )
}

const cssColor = {
    ready: true,
    number: '5',
    name: 'CSS Color',
    slideshow: 'https://docs.google.com/presentation/d/1hDBAVHZxvYlixH8_29E0HpvMRHrwJAsgbYqthxMAUvo/embed?start=false&loop=false&delayms=3000',
    code: 'https://github.com/dodgeblaster/html-basics/tree/master/01%20Basics/05%20CSS%20Color',
    notes: 'https://dodgeblaster.gitbooks.io/sait-course/content/4-css-font-and-color.html',
    resources: (
        <ul>
            <li><a href="https://color.adobe.com/create/color-wheel/?copy=true&base=1&rule=Monochromatic&selected=1&name=Copy%20of%20Flat%20UI&mode=rgb&rgbvalues=0.0673647392217112,0.2640767183182476,0.45098039215686275,0.14205173270665186,0.5568574277580438,0.9509803921568627,0.43101720645640573,0.7018354343723179,0.9591503267973855,0.20265885686877005,0.3299941735719928,0.45098039215686275,0.11217693531267557,0.43974514398212516,0.7509803921568625&swatchOrder=0,2,1,3,4">Kuler</a></li>
            <li><a href="https://dribbble.com/">Dribbble</a></li>
            <li><a href="https://www.behance.net">Behance</a></li>
            <li><a href="http://colorsupplyyy.com/">Color Supply</a></li>
            <li><a href="../../img/colorexample.pdf">Color Example PDF</a></li>
        </ul>
    ),
    exercise: (
        <div>
            <h2>Assignment: Font and Color - 10%</h2>
            <p>Create 5 pages. Each page is going to have a header, hr, and paragraph text. Each page is going to have a different theme. You need to choose a font pairing from google fonts, and a color pairing that matches the theme. The themes are:</p>
            <ul>
                <li>Sophisticated</li>
                <li>Energetic</li>
                <li>Relaxed</li>
                <li>Corporate</li>
                <li>Fun</li>
            </ul>
            <br/>

            <p>I will be giving 5 points for each page:</p>

            <ul>
                <li>1 - Is the HTML and CSS properly indented </li>
                <li>2 - Do all the links work on the page</li>
                <li>3 - Are the fonts properly imported </li>
                <li>4 - Is the font easy to read</li>
                <li>5 - Are the colors put together in such a way that the text is easy to read </li>
            </ul>
        </div>
    )
}

export default {
    name: 'Basics',
    color: '#3054FD',
    chapters: [
        htmlBasics,
        htmlElements,
        cssBasics,
        cssFont,
        cssColor
    ]
}
