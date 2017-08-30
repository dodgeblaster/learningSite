export default ({ children }) => (
  <div>
    <div className='navigation'>
        <p>HTML+CSS</p>
        <p>SASS</p>
    </div>

  <style jsx>{`
    .navigation {
        width: 100%;
        height: 60px;
        background: white;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        display: flex;
        justify-content: start;
        align-items: center;
        padding-left: 20px;
    }

    .navigation p {
        margin: 0 20px 0 0;
        font-size: 1.3em;
    }

  `}</style>

  </div>
)
