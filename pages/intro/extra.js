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
                    chapter='E. Extra'
                />

                <Section title={'Extra Curricular'}>
                    <p>
                        If you are finding yourself finishing the exercises and assignments early, and feel that you are already familiar with HTML and CSS basics, I have some extra curricular assignments for you. These assignments are not for marks, they are meant to give everyone the opportunity to challenge themselves. If you are interested in tackling any of these assignments, talk to me.
                    </p>
                    <ul>
                        <li><a href="https://dodgeblaster.gitbooks.io/sait-course/content/extra---javascript.html">JavaScript</a></li>
                        <li><a href="https://dodgeblaster.gitbooks.io/sait-course/content/extra---css.html">CSS</a></li>
                    </ul>
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
