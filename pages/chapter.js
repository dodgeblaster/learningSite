import Page         from '../components/Page.js'
import NavBar       from '../components/NavBar.js'
import SideBar      from '../components/ChapterPage/SideBar.js'
import Hero         from '../components/ChapterPage/Hero.js'
import SlideShow    from '../components/ChapterPage/SlideShow.js'
import Section      from '../components/ChapterPage/Section.js'
import sections     from '../data/sections.js'
import Sa from './SlideShow.js'

const renderSlideshow   = x => x.slideshow  ? <SlideShow url={x.slideshow}/> : ''
const renderNotes       = x => x.notes      ? <Section title={'Notes'}><a href={ x.notes }>GitBook Notes</a></Section> : ''
const renderCode        = x => x.code       ? <Section title={'Code'}><a href={ x.code }>GitHub Code</a></Section> : ''
const renderResources   = x => x.resources  ? <Section title={'Resources'}>{ x.resources }</Section> : ''
const renderExercise    = x => x.exercise   ? <Section title={'Exercise'}>{ x.exercise }</Section> : ''

const renderContent = chapter => (
    <div>

        { renderNotes(chapter) }
        { renderCode(chapter) }
        { renderResources(chapter) }
        { renderExercise(chapter) }
    </div>
)

const renderNotReadyYet = () => (
    <Section title={'Chapter content coming soon'}>
    </Section>
)

export default ({url}) => {
    const sectionName   = sections.find(x => x.name === url.query.section).name
    const chapters      = sections.find(x => x.name === url.query.section).chapters
    const chapter       = chapters.find(x => x.number == url.query.chapter)

    const images = [
      { original: '/static/slideshows/01basics/01intro/red01.png' },
      { original: '/static/slideshows/01basics/01intro/red02.png' },
      { original: '/static/slideshows/01basics/01intro/red03.png' },
      { original: '/static/slideshows/01basics/01intro/red04.png' },
      { original: '/static/slideshows/01basics/01intro/red05.png' },
      { original: '/static/slideshows/01basics/01intro/red06.png' },
      { original: '/static/slideshows/01basics/01intro/red07.png' },
      { original: '/static/slideshows/01basics/01intro/red08.png' },
      { original: '/static/slideshows/01basics/01intro/red09.png' },
      { original: '/static/slideshows/01basics/01intro/red10.png' },
      { original: '/static/slideshows/01basics/01intro/red11.png' },
      { original: '/static/slideshows/01basics/01intro/red12.png' },
      { original: '/static/slideshows/01basics/01intro/red13.png' },
      { original: '/static/slideshows/01basics/01intro/red14.png' },
      { original: '/static/slideshows/01basics/01intro/red15.png' },
      { original: '/static/slideshows/01basics/01intro/red16.png' }
    ]

    return (
    <Page>
        <NavBar/>

        <div style={style.mainContainer}>
            <div style={style.sidebarContainer}>
                <SideBar sections={sections}/>
            </div>

            <div style={style.contentContainer}>
                <Hero
                    section={sectionName}
                    chapter={`${chapter.number}. ${chapter.name}`}
                />
                <Sa
                    images={chapter.slideshow}
                />
                { chapter.ready ? renderContent(chapter) : renderNotReadyYet() }
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
