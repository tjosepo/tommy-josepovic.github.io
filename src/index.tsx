import { Fragment, h, render } from 'preact';
import { Header, Main, Footer } from './components'
import './style.scss';


const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;