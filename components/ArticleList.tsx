import React from "react";
import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

type ArticlesInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ArticleList = ({ articles }: { articles: ArticlesInterface[] }) => {
  return (
    <div className={articleStyles.grid}>
      {" "}
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
