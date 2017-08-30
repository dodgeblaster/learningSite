import Link from 'next/link'

const renderLink = (chapter, section) => (
    <Link href={{ pathname: '/chapter', query: { section: section, chapter: chapter.number }}}>
        <a
            href={chapter.link}
            style={style.link}>
            {chapter.number}. {chapter.name}
        </a>
    </Link>
)

const renderSection = section => (
    <div>
        <p style={style.title}>{section.name}</p>
        <div style={Object.assign({}, style.chapterBlock, {borderLeftColor: section.color})}>
            {section.chapters.map(x => renderLink(x, section.name))}
        </div>
    </div>
)

export default ({ sections, selected }) => (
    <div>
        <div style={style.chapterBlockContainer}>
            { sections.map(x => renderSection(x)) }
        </div>
    </div>
)

const style = {
    chapterBlockContainer: {
        padding: '10px 40px 40px 40px'
    },

    chapterBlock: {
        borderLeftStyle: 'solid',
        borderLeftWidth: '4px',
        fontFamily: "'Lato', sans-serif",
        padding: '0 0 0 15px'
    },

    title: {
        fontWeight: 900,
        margin: '40px 0 10px 0'
    },

    link: {
        fontWeight: 300,
        color: '#222',
        display: 'block',
        margin: '5px 0'
    }
}
