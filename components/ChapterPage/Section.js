export default ({ title, children }) => (
  <div style={style.sectionContainer}>

    <div style={style.innerContainer}>
    <h1 style={style.font}>{ title }</h1>
        { children }
    </div>
  </div>
)

const style = {
    sectionContainer: {
        margin: '40px 40px',
    },

    font: {
        fontWeight: 900,
        fontSize: '1.7em'
    },

    innerContainer: {
        background: '#eee',
        width: '100%',
        padding: '30px'
    }
}
