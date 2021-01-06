import { h } from 'preact';
import './profile.scss';

const Profile = () => {
  return (
    <section class="profile">
      <h1 class="profile__name">Tommy Josepovic</h1>
      <img class="profile__image" src="/assets/profile-image.jpg" alt="Me" />
      <p class="profile__bubble">
        Hey, I'm Tommy Josepovic. I'm a Software Engineering student from Concordia University, Montreal. My passions include web development, history, and philosophy.
      </p>
    </section>
  );
}

export default Profile;