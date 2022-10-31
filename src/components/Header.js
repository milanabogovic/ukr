import ukraineFlag from './../img/ukraine_flag.png';
import './../css/Header.css';

const Header = () => {
    return (
        <> 
        <header>
            <img src={ukraineFlag} alt='Ukraine flag'></img>
            <h1>Invasion of Ukraine</h1>
            <p>News from the battlefield, territory control maps, battle details, and more.</p>
            <hr></hr> 
        </header>
        </>
    );
}
 
export default Header;