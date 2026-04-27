import "../Header/Header.css";

const template = () => {
  return `
  <header class="container">
    <h1 class="logo">Paloma Sánchez</h1>

    <nav aria-label="Main navigation">
      <ul class="nav-list">

        <li>
          <a href="#" id="nav-about" class="nav-link">About me</a>
        </li>

        <li>
          <a href="#" id="nav-education" class="nav-link">Education</a>
        </li>

        <li>
          <a href="#" id="nav-experience" class="nav-link">Experience</a>
        </li>

        <li>
          <a href="#" id="nav-projects" class="nav-link">Projects</a>
        </li>

      </ul>
    </nav>
  </header>
  `;
};

const Header = () => template();

export default Header;
