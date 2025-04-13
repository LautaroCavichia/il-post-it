import React from "react";
import { Article } from "../../../types";
import "./Blogs.css";

interface BlogsProps {
    highlightedBlogs: Article[];
}

const articlesPerPage = 3;
const highlightedPage = 0;
const getPageArticles = (articles: Article[], page: number) => {
    const start = page * articlesPerPage;
    const end = start + articlesPerPage;
    return articles.slice(start, end);
};


const Blogs: React.FC<BlogsProps> = ({ highlightedBlogs }) => {
    return (
        <aside className="blogs">
          <div className="blogs-section highlighted">
            <div className="blogs-header">
              <h2 className="blogs-title">BLOGS</h2>
            </div>
            <div className="blogs-content">
              {getPageArticles(highlightedBlogs, highlightedPage).map((article) => (
                <div key={article.id} className="article-card">
                  <div className="article-text">
                    <h3 className="article-title">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      );
    }
export default Blogs;