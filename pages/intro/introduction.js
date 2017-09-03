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
                    chapter='A. Introduction'
                />

                <Section title={'About the Instructor'}>
                    <p>Name: Gary Jennings<br/>
                       Email: gary.jennings@sait.ca<br/>
                       Job: FullStack Developer at RallyEngine</p>
                </Section>

                <Section title={'About this course'}>
                    <p>Over the next 10 days we'll cover:<br/>
                       HTML (structure of websites)<br/>
                       CSS (presentation of websites)<br/>
                       How to use HTML and CSS to create responsive websites</p>
                </Section>

                <Section title={'What makes up your grade'}>
                    <p>40% - Three Assignments (13.33% each)<br/>
                       40% - Final Project<br/>
                       20% - Attendence</p>
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
    }
}
