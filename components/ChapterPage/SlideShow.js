export default ({ url }) => (
  <div style={style.slideshowContainer}>
    <h1 style={style.font}>Slideshow</h1>
    <div style={style.innerContainer}>
        <iframe
            style={{border: 'none'}}
            src={ url }
            frameborder="0"
            width="840"
            height="460"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
        ></iframe>

    </div>
  </div>
)

const style = {
    slideshowContainer: {
        margin: '40px 40px',
    },

    font: {
        fontWeight: 900,
        fontSize: '1.7em'
    },

    innerContainer: {
        width: '100%',
    }
}
