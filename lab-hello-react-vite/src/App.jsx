import './App.css';
import IronHackLogo from './components/IronhackLogo';
import Menu from './components/Menu';
import Theme from './components/Theme';
import Text from './components/Text';
import Button from './components/Button';
import Icon1 from './components/Icon1';
import Icon2 from './components/Icon2';
import Icon3 from './components/Icon3';
import Icon4 from './components/Icon4';

function App() {
  return (
    <div className='App'>
      <div className='section-one'>
        <nav className='nav-bar'>
          <div className='logo-img'>
            <IronHackLogo />
          </div>
          <div className='menu-img'>
            <Menu />
          </div>
        </nav>
        <section className='header-section'>
          <div className='header'>
            <Theme />
          </div>
          <p className='text-description'>
            <Text />
          </p>
          <Button className='button' />
        </section>
      </div>

      <section className='displayed-section'>
        <div className='icon-one'>
          <Icon1 />
        </div>
        <div className='icon-two'>
          <Icon2 />
        </div>
        <div className='icon-three'>
          <Icon3 />
        </div>
        <div className='icon-four'>
          <Icon4 />
        </div>
      </section>
    </div>
  );
}

export default App;
