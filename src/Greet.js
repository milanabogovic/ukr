import { Link, useNavigate } from 'react-router-dom';
import ukraineFlag from './img/ukraine_flag.png';
import warIllustration from './img/war_illustration.jpg';
import './css/Greet.css';
import 'animate.css';

const Greet = () => {
    const navigate = useNavigate();
    const showGreet = (show) => {
        localStorage.setItem("showGreet", show);
    }
    return ( 
        <div className='Greet animate__animated animate__fadeIn'>
            <span><img src={ukraineFlag} alt='Ukraine flag'></img> INFO UKRAINE</span>
            <img src={warIllustration} alt='Ukraine invasion illustration' className='animate__animated animate__bounceIn' ></img>
            <span>2022</span>
            <h1>Invasion of Ukraine</h1>
            <p>News from the battlefield, territory control maps, battle details, and more.</p>
            <Link to='/home' className='Button'>Enter</Link>
            <Link to='/home' onClick={ () => { showGreet(false) } } className='link__small'>Do not show this screen again</Link>
        </div>
     );
}

export default Greet;