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

                <Section title={'1. You will need an editor'}>
                    <p>Any editor will do. If you are already comfortable with a certain editor,
                    feel free to use it. If you have never coded before, I suggest using Atom, that
                    will be the editor I will be using in this course.</p>
                    <a style={style.link} href='https://atom.io/'>Atom Editor</a>
                    <p>If you are curious, click <a style={style.link} href='https://dodgeblaster.gitbooks.io/sait-course/content/chapter1.html'>here</a> for my atom settins.</p>
                </Section>

                <Section title={'2. You will need some browsers'}>
                    <p>We will primarily be using the chrome web browser for this course, but
                    its a good idea to have a few browsers installed. Here are a few you should get:</p>
                    <a style={style.link} href='https://www.google.com/chrome/browser/desktop/index.html'>Chrome</a><br/>
                    <a style={style.link} href='https://www.mozilla.org/en-US/firefox/'>FireFox</a><br/>
                    <a style={style.link} href='https://support.apple.com/downloads/safari'>Safari</a>
                </Section>

                <Section title={'3. You will need the course code'}>
                    <p>
                    Each chapter will let you know what code you need for the topic, but if you would like
                    to see all the code, you can see it all here:
                    <a style={style.link} href='https://github.com/dodgeblaster/HtmlCourse'>Course Code</a>
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
        // color: 'rgb(253, 48, 111)'
    }
}
