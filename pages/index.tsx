import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

type ArticlesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home({ articles }: { articles: ArticlesInterface[] }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>NextJs Practice</title>
        <meta name="keywords" content="web development, programming, nextjs" />
      </Head>
      {articles.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};
