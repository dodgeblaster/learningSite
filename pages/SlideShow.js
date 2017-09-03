import React from 'react'
import ImageGallery from 'react-image-gallery'
import Section from '../components/ChapterPage/Section.js'

class MyComponent extends React.Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    // const images = [
    //   { original: '/static/slideshows/01basics/01intro/red01.png' },
    //   { original: '/static/slideshows/01basics/01intro/red02.png' },
    //   { original: '/static/slideshows/01basics/01intro/red03.png' },
    //   { original: '/static/slideshows/01basics/01intro/red04.png' },
    //   { original: '/static/slideshows/01basics/01intro/red05.png' },
    //   { original: '/static/slideshows/01basics/01intro/red06.png' },
    //   { original: '/static/slideshows/01basics/01intro/red07.png' },
    //   { original: '/static/slideshows/01basics/01intro/red08.png' },
    //   { original: '/static/slideshows/01basics/01intro/red09.png' },
    //   { original: '/static/slideshows/01basics/01intro/red10.png' },
    //   { original: '/static/slideshows/01basics/01intro/red11.png' },
    //   { original: '/static/slideshows/01basics/01intro/red12.png' },
    //   { original: '/static/slideshows/01basics/01intro/red13.png' },
    //   { original: '/static/slideshows/01basics/01intro/red14.png' },
    //   { original: '/static/slideshows/01basics/01intro/red15.png' },
    //   { original: '/static/slideshows/01basics/01intro/red16.png' }
    //
    // ]

    return (
        <div style={style.slideshowContainer}>
          <h1 style={style.font}>Slideshow</h1>
          <div style={style.innerContainer}>

      <ImageGallery
        items={this.props.images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}
        showNav={true}
        showThumbnails={false}
        showPlayButton={false}
        />
        </div>
      </div>
    );
  }
}

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

export default MyComponent
