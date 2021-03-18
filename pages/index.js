import usePhrases from 'hooks/use-phrases'

const Page = () => {
  const phrase = usePhrases()

  return (
    <div>
      {phrase && (
        <>
          <blockquote>
            <p>{phrase}</p>
          </blockquote>
          <small>- Sorrentino, Paulo.</small>
        </>
      )}
      <img src="/paulo-sorrentino.png" alt="Paulo Sorrentino" />
      <a href="https://github.com/matheusho/paulosorrentino.com.br" title="Github" width="42px" height="auto">
        <img src="/github.svg" alt="Github" />
      </a>
      <style jsx>
        {`
          div {
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

          img {
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

          a img {
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

            img {
              max-height: 50%;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Page
