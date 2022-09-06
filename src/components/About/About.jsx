const About = () => {
  return (
    <div className="container">
      <h1 className="my-3">About Me</h1>
      <h2>This Project Created by (MAHMOUD MOHAMED ABDALLAH SALEM)</h2>
      <p>Using React Js , Bootstrap , Axios , React Router Dom </p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mahmoud-mohamed-8312311a5/"
            className="text-danger text-decoration-none"
          >
            LinkedIn
          </a>
        </li>
        <li className="my-2">
          <a
            href="https://github.com/mahmoudsalem1907"
            className="text-decoration-none text-danger"
          >
            GitHup
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/mahmoud.bibo.7370"
            className="text-danger text-decoration-none"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
