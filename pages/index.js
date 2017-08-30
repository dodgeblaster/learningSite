import Page                 from '../components/Page.js'
import NavBar               from '../components/NavBar.js'
import HomePageLinkBlock    from '../components/HomePageLinkBlock.js'
import sections             from '../data/sections.js'

export default () => (
    <Page>
        <NavBar/>
        <div style={style.hero}>
            <p style={style.heroText}>HTML AND <br/>CSS BASICS</p>
        </div>

        <div style={style.blockContainer}>
            <HomePageLinkBlock sections={sections}/>
        </div>
    </Page>
)

const style = {
    blockContainer: {
        padding: '20px 0 80px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    hero: {
        width: '100%',
        height: '400px',
        fontFamily: "'Lato', sans-serif",
        fontWeight: '900',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    heroText: {
        margin: 0,
        lineHeight: 1,
        fontSize: '7em'
    }
}
