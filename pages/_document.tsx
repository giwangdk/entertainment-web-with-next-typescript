import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}