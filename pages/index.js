import Head from 'next/head'
import usePhrases from 'hooks/use-phrases'

const Page = () => {
  const phrase = usePhrases()

  return (
    <>
      <Head>
        <title>Diz aí, Paulo Sorrentino</title>
        <link rel="shortcut icon" href="/paulo-sorrentino.png" type="image/x-icon" />
      </Head>
      <main>
        {phrase && (
          <>
            <blockquote>
              <p>{phrase}</p>
            </blockquote>
            <small>- Sorrentino, Paulo.</small>
          </>
        )}
        <img src="/paulo-sorrentino.png" alt="Paulo Sorrentino" className="paulo-sorrentino" />
        <a href="https://github.com/matheusho/paulosorrentino.com.br" title="Github" target="_blank" className="github">
          <img src="/github.svg" alt="Github" width="42" height="auto" />
        </a>
      </main>
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

          main {
            width: 70%;
            margin: 0 auto;
            padding: 15px;
          }

          blockquote {
            font-size: 60px;
            color: #fff;
          }

          small {
            float: right;
            color: #fff;
            text-align: right;
            font-size: 24px;
            font-style: italic;
          }

          img.paulo-sorrentino {
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: -1;
          }

          a {
            position: fixed;
            bottom: 10px;
            right: 10px;
          }

          a.github {
            position: fixed;
            bottom: 15px;
            right: 15px;
          }

          @media only screen and (max-width: 720px) {
            div {
              width: 100%;
            }

            blockquote {
              font-size: 36px;
            }

            small {
              font-size: 18px;
            }

            img.paulo-sorrentino {
              max-height: 50%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
