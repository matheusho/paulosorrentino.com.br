import Head from 'next/head'

export default function MyApp({ Component, ...pageProps }) {
  return (
    <>
      <Head>
        <title>Diz aí, Paulo Sorrentino</title>
        <link rel="shortcut icon" href="/paulo-sorrentino.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          body {
            background-color: #000;
          }
        `}
      </style>
    </>
  )
}
