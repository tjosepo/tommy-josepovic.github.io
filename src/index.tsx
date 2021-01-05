import { Fragment, h } from 'preact';
import { Header, Profile, Projects, Footer } from './sections'
import './style.scss';

const App = () => {
  return (
    <Fragment>
      <main>
        <Profile />
        <Projects />
      </main>
    </Fragment>
  );
}

export default App;