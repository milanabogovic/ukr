import { useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import './css/Article.css';

const Article = ({ news }) => {
    const { article } = useParams();
    return ( 
        <div className="Article">
            <Header />
            { news.filter((_article) => {
                return _article.id === Number(article);
            }).map((_article) => {
                return (
                    <div className="news__article" key={_article.id}>
                        <small className="category">{ _article.category }</small>
                        <h2>{ _article.title }</h2>
                        <img src={ require(`./img/${ _article.image }`) }></img>
                        <small className="subtitle">{ _article.subtitle }</small>
                        <p>{ _article.content }</p>
                    </div>
                )
            }) }
        </div>
     );
}
 
export default Article;