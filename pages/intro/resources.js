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

                <Section title={'General'}>
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/">Mozilla Developers Network</a></li>
                        <li><a href="https://github.com/">Github</a></li>
                        <li><a href="http://stackoverflow.com/">Stack Overflow</a></li>
                        <li><a href="https://css-tricks.com/">CSS Tricks</a></li>
                        <li><a href="http://caniuse.com/">Can I Use</a></li>
                    </ul>
                </Section>

                <Section title={'Color'}>
                    <ul>
                        <li><a href="https://dribbble.com/">Dribbble</a></li>
                        <li><a href="https://color.adobe.com/">Kuler</a></li>
                        <li><a href="http://www.webpagefx.com/web-design/hex-to-rgb/">Hex to RGB Convertor</a></li>
                        <li><a href="https://material.io/guidelines/style/color.html#color-color-palette">Google Material Design Color</a></li>
                    </ul>
                </Section>

                <Section title={'Fonts'}>
                    <ul>
                        <li><a href="https://fonts.google.com/">Google Fonts</a></li>
                    </ul>
                </Section>

                <Section title={'Design'}>
                    <ul>
                        <li><a href="http://facebook.design/">Facebook Design</a></li>
                        <li><a href="https://design.google.com/">Google Material Design</a></li>
                    </ul>
                </Section>

                <Section title={'Inspiration'}>
                    <ul>
                        <li><a href="https://dribbble.com/">Dribbble</a></li>
                        <li><a href="https://www.behance.net/">Behance</a></li>
                        <li><a href="https://tympanus.net/codrops/">Codrops</a></li>
                    </ul>
                </Section>

                <Section title={'Youtube Channels'}>
                    <ul>
                        <li><a href="https://www.youtube.com/user/DevTipsForDesigners">DevTips</a></li>
                        <li><a href="https://www.youtube.com/user/learncodeacademy">Learn Code Academy</a></li>
                        <li><a href="https://www.youtube.com/user/LevelUpTuts">LevelUp Tuts</a></li>
                        <li><a href="https://www.youtube.com/channel/UCZi-0WJPUNb_LQocFMJw5dA">Brad Westfall</a></li>
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
