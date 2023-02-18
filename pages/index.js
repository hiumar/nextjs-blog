
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {

  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p ><b>Software Engineer</b></p>
        <div>
<p>
        As a .NET developer with microservices architecture experience, I have a proven track record of developing and maintaining scalable and secure applications. With expertise in C#, ASP.NET, and .NET Core, I am well-versed in building microservices-based solutions that can handle the demands of modern, data-intensive applications.
         I have a deep understanding of object-oriented programming concepts,
          design patterns, and software development methodologies like Agile and DevOps.
          </p>

        </div>
        
       <p>
       I have experience integrating microservices with databases using SQL, ensuring the smooth and efficient handling of data. Additionally,
        I have a good understanding of cloud computing concepts and have experience deploying applications to the cloud using Microsoft Azure

        </p>
        <p>

        I am a team player with excellent communication skills, and I am always eager to learn new technologies and stay updated with industry trends.
         My experience in microservices architecture and .NET development make me a valuable asset to any organization looking for a talented and experienced developer.
         
        </p>
        <p> <a href="https://github.com/hiumar"><strong>Umar's portfolio</strong></a></p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}