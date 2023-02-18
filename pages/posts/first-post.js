import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script'
import Layout from '../../components/layout';
import styles from '../../components/layout.module.css';
export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>First post</title>
     
    </Head>
    <Script
         src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" strategy="lazyOnload"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script has been loaded`);
        }}

         onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />
      
      <h2>
        <Link href="/">Back to home</Link>
        <br></br>
        <Link href="/posts/third-party.js">third party js</Link>
      </h2>

      
    </Layout>
  );
}