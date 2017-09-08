import Page         from '../../components/Page.js'
import NavBar       from '../../components/NavBar.js'
import SideBar      from '../../components/ChapterPage/SideBar.js'
import Hero         from '../../components/ChapterPage/Hero.js'
import Section      from '../../components/ChapterPage/Section.js'
import sections     from '../../data/sections.js'



export default ({url}) => {
    return (
    <Page>
        <NavBar/>

        <div style={style.mainContainer}>
            <div style={style.sidebarContainer}>
                <SideBar sections={sections}/>
            </div>

            <div style={style.contentContainer}>
                <Hero
                    section='Intro'
                    chapter='B. Things Need'
                />

                <Section title={'1. Font and Color - 13%'}>
                    <p>Create 5 pages. Each page is going to have a header, hr, and paragraph text.
                    Each page is going to have a different theme. You need to choose a font pairing from
                    google fonts, and a color pairing that matches the theme. The themes are:</p>

                    <p>
                        Sophisticated<br/>
                        Energetic<br/>
                        Relaxed<br/>
                        Corporate<br/>
                        Fun
                    </p>

                    <p>
                    I will be giving 5 points for each page:<br/>

                    1 - Is the HTML and CSS properly indented<br/>
                    2 - Do all the links work on the page<br/>
                    3 - Are the fonts properly imported<br/>
                    4 - Is the font easy to read<br/>
                    5 - Are the colors put together in such a way that the text is easy to read
                    </p>
                </Section>


                <Section title={'2. Basic Homepage Layout - 13%'}>
                    <p>In this assignment, we will make use of all the layout techniques we learned
                    about in the layout section and the practical sections. Your job is to make a home
                    page that has the following:</p>

                    <p>
                    1. A header. It should have a font awesome icon as the 'company logo', and 4 navigation links (they dont need to be hooked up to anything)<br/>
                    2. A hero section with an unsplash pic as the background. (use a gradient if you want to go the extra mile)<br/>
                    3. A footer with font awesome social media icon links<br/>
                    4. Everything should be responsive
                    </p>

                    <p>
                    What I will be giving marks for:<br/>
                    1 - Is the HTML and CSS properly indented<br/>
                    2 - Can I see a hamburger menu at some point when I size down the browser width to phone width<br/>
                    3 - Is the CSS files, google fonts, img file properly linked<br/>
                    4 - Is there social media icons in the footer<br/>
                    5 - Is there a hero section with an image
                    </p>
                </Section>

                <Section title={'3. Convert a mockup into an HTML file - 13%'}>

                    <p>Turn this mockup into an html page. The font is sans-serif, and the colors used in this mock up are: #b22222, #ddd, and #fff.</p>

                    <p>What I will be giving marks for:</p>
                    <ul>
                        <li>1 - Is there a table with the correct number of cells with the correct data inside from the mockup</li>
                        <li>2 - Do the colors match the mockup</li>
                        <li>3 - Does the font match the mockup</li>
                        <li>4 - Does the table have a box shadow</li>
                    </ul>

                    <p><a href='/static/exercises/04/tablemock.png'>Click here to see the mock.</a></p>
                </Section>

                <Section title={'4. Four Page Website - 40%'}>
                    <p>Feel free to use lorem ipsum for the content. I will be marking this project
                    based on the following things:</p>

                    <p>
                    - 4 pages: Home, About, Products, Contact.<br/>
                    - Home page should be a summary of the company or product<br/>
                    - About page should be either a description of the company, or employee bio<br/>
                    - Products page should have a list of products.<br/>
                    - Contact page should have an email input and a text area for comments, and a submit button (this does not need to be hooked up to a backend server)<br/>
                    - Nav should include a Logo<br/>
                    - All links should work<br/>
                    - Include Hero section<br/>
                    - Include Footer with social icons<br/>
                    - Site should be responsive<br/>
                    - Site should have a mobile menu
                    </p>
                </Section>





            </div>
        </div>
    </Page>
)}

const style = {
    blockContainer: {
        padding: '20px 0 80px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainContainer: {
        display: 'flex',
        height: 'calc(100vh - 60px)',
        minWidth: '1000px'
    },

    sidebarContainer: {
        flex: '0 300px',
        overflowY: 'scroll'
    },

    contentContainer: {
        flex: 1,
        background: 'white',
        overflowY: 'scroll'
    },

    link: {
        fontWeight: 'bold',
        color: 'rgb(253, 48, 111)'
    }
}
