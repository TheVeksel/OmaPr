import { Link } from 'react-router-dom';
import './hamburgerContent.scss';

interface HamburgerContentProps {
  onClose: () => void;
}

export default function HamburgerContent({ onClose }: HamburgerContentProps): JSX.Element {
  return (
    <div className="hamburger__wrapper">
      <div className="hamburger__content">
        <div className="hamburger__content-search">
          <div className="hamburger__search">
            <p>Hae Ylen sisältöä</p>
            <img className="hamburger__search-img" src="/photo/lataus.png" alt="img" />
          </div>
        </div>
        <div className="hamburger__content-themes">
          <h2 className="hamburger__content-header">Pinnalla nyt</h2>
          <ul>
            <Link to={`/headerMainThemes/0`} onClick={onClose}><li>Venäjän hyökkäys</li></Link>
            <Link to={`/headerMainThemes/1`} onClick={onClose}><li>Lähi-itä</li></Link>
            <Link to={`/headerMainThemes/2`} onClick={onClose}><li>Yhdysvaltain presidentinvaalit 2024</li></Link>
          </ul>
        </div>
        <div className="other__news">
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
          <ul>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
