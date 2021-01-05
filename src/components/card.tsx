import { h } from 'preact';

interface Props {
  src: string,
  title: string,
  description: string,
  href: string
}

const Card = ({ src, title, description, href }: Props) => {
  const url: URL = new URL(href);
  return (
    <a class="card" href={href} target="_blank">
      <div class="card__thumb" style={{ backgroundImage: `url(${src})` }} />
      <div class="card__body">
        <h5 class="card__body__title">{title}</h5>
        <p class="card__body__description">{description}</p>
      </div>
    </a>
  );
}

export default Card;