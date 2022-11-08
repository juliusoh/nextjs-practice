import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// ##### Data Fetching
// Pre-rendering is the process of generating HTML at build time using data that was fetched at build time.
// 

const Article = ({ article }: any) => {
  //   const router = useRouter()
  //   const { id } = router.query
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// ##### function getServerSideProps
// Next.js will pre-render this page on each request using the data returned by getServerSideProps.
// Only use if data is dynamic and needs to be fetched on each request.

// export const getServerSideProps = async (context: any) => {
//   console.log(context);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// ##### function getStaticPaths
// Next.js will statically pre-render all pages specified by getStaticPaths.
// Data comes from headless CMS
// Data comes from a database
// Data comes from a file system
// Data can be publicy cached (not use-specific)


export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  
    const articles = await res.json();
  
    const ids = articles.map((article: any) => article.id);
    const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));
    
    // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    return {
      paths,
      fallback: false,
    };
  };


// ##### function getStaticProps
// Next.js will pre-render this page at build time using the props returned by getStaticProps.
// If the data required to render the page is available at build time ahead of a user's request
// Comes from headless CMS

export const getStaticProps = async (context: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};


export default Article;
