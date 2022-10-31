import { Link } from "react-router-dom";
import './../css/ArticleBig.css';

const ArticleBig = ({ article }) => {
    const { title, subtitle, image } = article;
    return ( 
        <div className="ArticleBig">
            <small className='description'>LATEST</small>
            <div className="image">
                <img src={require(`./../img/${ image }`)}></img>
            </div>
            <h3 className="title">{ title }</h3>
            <small className='subtitle'>{ subtitle }</small>
            <Link to='/news/article/0' className='Button'>Read more</Link>
        </div>
    );
}
 
export default ArticleBig;