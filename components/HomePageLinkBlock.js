import Link from 'next/link'

const Chapter = ({number, name, color, link, section}) => {
    const chapterNumberStyle = Object.assign(
        style.chapterNumber,
        { background: color }
    )

    return (
        <Link href={{ pathname: '/chapter', query: { section: section, chapter: number }}}>
            <a href={ link } style={style.chapterContainer}>
                <div style={chapterNumberStyle}>{number}</div>
                <div style={style.chapterName}>{name}</div>
            </a>
        </Link>
    )
}

const Section = ({ name, color, chapters }) => {
    return (
        <div style={style.container}>
            <p style={style.title}>{name}</p>
            { chapters.map(x => (
                <Chapter
                    number={x.number}
                    name={x.name}
                    color={color}
                    link={x.link}
                    section={name}
                />
            )) }
        </div>
    )
}

export default ({ sections }) => (
  <div>
    { sections.map(x => (
        <Section
            name={x.name}
            color={x.color}
            chapters={x.chapters}
        />
    )) }
  </div>
 )

 const style = {
     container: {
         fontFamily: "'Lato', sans-serif",
         color: '#3B3B3B',
         fontWeight: 'bold',
         width: '600px',
         marginBottom: '40px'
     },
     title: {
         fontFamily: "'Lato', sans-serif",
         fontSize: '1.6em'

     },

     chapterContainer: {
         display: 'flex',
         marginBottom: '5px'
     },

     chapterNumber: {
         height: '80px',
         width: '80px',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         color: 'white',
         fontSize: '2em'
     },

     chapterName: {
         height: '80px',
         display: 'flex',
         justifyContent: 'start',
         alignItems: 'center',
         paddingLeft: '20px',
         fontSize: '2em',
         color: '#3B3B3B',

     }

 }
