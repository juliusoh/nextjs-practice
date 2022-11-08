import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ArticleList from "../components/ArticleList";

type ArticlesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home({ articles }: { articles: ArticlesInterface[] }) {

  return (
    <div>
      <Head>
        <title>NextJs Practice</title>
        <meta name="keywords" content="web development, programming, nextjs" />
      </Head>
      <ArticleList articles={articles} />
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
