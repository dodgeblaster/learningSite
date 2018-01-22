const sass = {
    ready: true,
    number: '31',
    name: 'Sass',
    resources: (
        <ul>
            <li><a href='/static/SassBook.pdf'>Sass Class Book</a></li>
            <li><a href='/static/sassstartercode.zip'>Sass Starter Code</a></li>
            <li><a href='/static/gulpfile.zip'>Gulp File</a></li>
            <li><a href='https://docs.npmjs.com/getting-started/semantic-versioning'>How NPM versioning works</a></li>
        </ul>
    ),

    exercise: (
        <div>
            <p>Convert the sassproject folder in our starter files into a Sass project. I will be looking for the following:</p>
            <ul>
                <li>1. Have you setup gulp correctly to convert sass into css</li>
                <li>2. Do you have Sass variables</li>
                <li>3. Do you have classes nested</li>
                <li>4. Do you have sass files seperated into partial files</li>
            </ul>

        </div>
    )



}


export default {
    name: 'Sass',
    color: '#FECC94',
    chapters: [
        sass
    ]
}
