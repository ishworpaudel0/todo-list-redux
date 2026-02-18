import './Header.css';
import { Link } from 'react-router-dom';
interface HeaderProps{
    title: string;
    description: string;
}

const Header = ({title, description}: HeaderProps) => {
    return (
        <div className='header-container'>
            <div className='header-text-container'>
                <h1 className='header-title'>{title}</h1>
                <p className='header-description'>{description}</p>
            </div>
            <div className='header-nav-container'>
                <nav className="nav-menu">
                    <Link to="/viewList"><button className="nav-button">View Tasks</button></Link>
                    <Link to="/form"><button className="nav-button">Add New Task</button></Link>
      </nav>
            </div>


        </div>
    )
}
export default Header;