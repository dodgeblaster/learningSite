import Head from 'next/head'

export default ({ children }) => (
  <div style={{background: '#F5F3F6'}}>
    <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,900" rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css" />
    </Head>

    { children }

    <style jsx global>{`
      a {
        font-weight: bold;
        color: rgb(253, 48, 111);
      }

      li {
        list-style: none;
      }
    `}</style>

  </div>
)
