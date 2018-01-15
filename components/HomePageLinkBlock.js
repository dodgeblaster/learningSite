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

const IntroChapter = ({number, name, color, url, section}) => {
    const chapterNumberStyle = Object.assign(
        style.chapterNumber,
        { background: color }
    )

    return (
        <Link href={{ pathname: url, }}>
            <a href={ url } style={style.chapterContainer}>
                <div style={chapterNumberStyle}>{number}</div>
                <div style={style.chapterName}>{name}</div>
            </a>
        </Link>
    )
}

const renderIntro = ({ name, color, chapters }) => {

    return (
        <div style={style.container}>
            <p style={style.title}>Intro</p>

            { chapters.map(x => (
                <IntroChapter
                    number={x.number}
                    name={x.name}
                    color={color}
                    url={x.url}
                    section={name}
                />
            )) }
        </div>
    )
}

const renderDay = (title, sections) => {
    const containerStyles = {
        padding: 20,
        boxShadow: '10px 10px 42px -23px rgba(0,0,0,0.75)',
        background: 'rgb(62, 204, 147)',
        fontFamily: 'Lato, sans-serif',
        marginBottom: '20px',

    }

    const titleStyles = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.6em'
    }

    const textStyles = {
        marginBottom: '2px',
        fontWeight: 'bold',
        opacity: '0.8'
    }

    return (
        <div style={containerStyles}>
            <p style={titleStyles}>{title}</p>
            {sections.map(x => <p key={x} style={textStyles}>{x}</p>)}
        </div>
    )
}


export default ({ sections }) => {
    const intro = sections[0]
    const sectionsAfterIntro = sections.filter((x, i) => i !== 0)

    return (
        <div>
       
            
                { renderIntro(intro) }
                { sectionsAfterIntro.map(x => (
                    <Section
                        name={x.name}
                        color={x.color}
                        chapters={x.chapters}
                    />
                )) }
            <hr/>
                { renderDay('Jan 15, Monday', [
                    '1. HTML Basics',
                    '2. HTML Elements',
                    '3. CSS Basics'
                ]) }

                { renderDay('Jan 16, Tuesday', [
                    '4. CSS Font',
                    '5. CSS Color',
                    'Assignment #1'
                ]) }

                { renderDay('Jan 17, Wednesday', [
                    '6. Units and Measurement',
                    '7. Display Type',
                    '8. Box Model'
                ]) }

                { renderDay('Jan 18, Thursday', [
                    '9. Images',
                    '10. Inline Method'
                ]) }

                { renderDay('Jan 19, Friday', [
                    '11. Float Method',
                    '12. Media Queries',
                    '13. Float Grid'
                ]) }

                <br/>
                <br/>
                <br/>

                { renderDay('Jan 22, Monday', [
                    '15. Navigation',
                    '16. Hero',
                    'Assignment #2'
                ]) }

                { renderDay('Jan 23, Tuesday', [
                    '17. Footer',
                    '20. HTML Tables',
                    'Assignment #3'
                ]) }

                { renderDay('Jan 24, Wednesday', [
                    '21. HTML Forms',
                    '22. Advanced Selectors',
                    '23. CSS Weight',
                    '24. CSS Positioning',
                    '25. CSS Animations'
                ]) }

                { renderDay('Jan 25, Thursday', [
                    '19. About Page',
                    'JS Intro and Mobile Menu',
                    '26. CSS Frameworks',
                    'Assignment #4'
                ]) }

                { renderDay('Jan 26, Friday', [
                    '29. Hosting',
                    '14. Flexbox',
                    'Assignment #4'
                ]) }



            

            
        </div>
    )
}

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
