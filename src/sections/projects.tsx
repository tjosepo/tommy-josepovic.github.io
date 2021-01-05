import { h } from 'preact';
import { Card } from '../components';
import './projects.scss';

const Projects = () => {
  return (
    <section class="projects container">
      <h2>Projects</h2>
      <div class="projects__grid">
        <Card
          title="Bemol"
          description="A fast and simple web framework for C#. There is no magic; just code."
          href="https://github.com/tommy-josepovic/bemol"
          src="/assets/bemol.jpg" />

        <Card
          title="Shoppies v2"
          description="A web app to browse and nominate movies. My second attempt at Shopify Challenge for Web Developer Interns."
          href="https://shoppies-v2.web.app/"
          src="/assets/shoppies-v2.jpg" />

        <Card
          title="ror2-editor"
          description="A web app that to customize Risk of Rain 2 savefiles."
          href="https://riskofrain2-save-editor.web.app/"
          src="/assets/ror2-editor.jpg" />

        <Card
          title="Shoppies"
          description="A web app to browse and nominate movies. Part of Shopify Challenge for Web Developer Interns. Superseded by Shoppies&nbsp;v2."
          href="https://shoppies-challenge.web.app/"
          src="/assets/shoppies.jpg" />
      </div>
    </section>
  );
}

export default Projects;