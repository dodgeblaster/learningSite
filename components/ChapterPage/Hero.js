export default ({ section, chapter }) => (
  <div style={style.hero}>
    <div>
        <h1 style={style.font}>{section}</h1>
        <h1 style={style.font}>{chapter}</h1>
    </div>
  </div>
)

const style = {
    hero: {
        width: '100%',
        height: '350px',
        display: 'flex',
        justifyContent: 'start',
        paddingLeft: '20%',
        alignItems: 'center',
        backgroundImage: 'url("/static/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        color: 'white',
    },

    font: {
        fontWeight: 900,
        fontSize: '3.6em'
    }
}
