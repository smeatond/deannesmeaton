import photo from "/images/deanne.png";
import cv from "/docs/DeanneSmeaton_UpdatedCV2023_public.pdf";
import "./About.css";
function About() {
  return (
    <>
      <h1>About Me</h1>{" "}
      <section>
        <img
          src={photo}
          alt="Photo of Deanne Smeaton"
          className="about-photo"
        />
        <p>
          Hello there, I'm Deanne, a seasoned full-stack developer with nearly a
          decade of hands-on experience and a passion for crafting pragmatic
          solutions that address real-world needs. My journey in software
          development has been guided by a commitment to delivering secure,
          high-performance solutions that prioritize an exceptional user
          experience.
        </p>
        <p>
          Throughout my career, I've honed my skills in various technology
          stacks, primarily focusing on the .NET ecosystem. Additionally, I've
          ventured into the realms of MERN (Mongo, Express, React, Node.js) and
          PERN (PostgreSQL, Express, React, Node.js) stacks, expanding my
          toolkit to meet diverse project requirements. My expertise extends to
          creating comprehensive MVC solutions, architecting APIs using .NET
          Core, and working with Microsoft SQL for robust database management.
        </p>
        <p>
          My experience in deploying applications spans various cloud platforms,
          with a primary focus on Azure, although I'm well-versed in other cloud
          providers as well. When it comes to crafting modern front-end
          experiences, I thrive on JavaScript libraries like ReactJS and
          TypeScript, using them to create engaging user interfaces. My
          proficiency in modern CSS, including CSS Grid, Flexbox, and
          utilization of frameworks like Bootstrap, ensures that these
          interfaces are not only visually appealing but also responsive and
          user-friendly.
        </p>
        <p>
          Beyond my role in Agile development teams, I've taken on the
          responsibility of mentoring and nurturing the next generation of
          developers in recent years. Sharing knowledge and experience has
          become a rewarding aspect of my journey.
        </p>
        <p>
          If you'd like to connect or collaborate, please don't hesitate to
          reach out to me via{" "}
          <a href="mailto:deanne.smeaton@gmail.com">email</a> or connect with me
          on <a href="https://www.linkedin.com/in/smeatond/">LinkedIn</a>. Let's
          explore new horizons in the world of technology together.{" "}
        </p>
      </section>
      <section>
        <h2>My Experience</h2>
        <p>
          I kickstarted my professional journey as part of the Auckland Council
          Graduate Programme, an experience that laid the foundation for my
          career growth. After the program I joined the Web & Mobile team, and
          my dedication and consistent delivery of successful projects propelled
          me to the position of Senior Software Developer in just two years.
          During my tenure at Auckland Council, I was involved in a multitude of
          projects, with a primary focus on customising content management
          system (CMS) solutions in SharePoint 2013 and Umbraco
        </p>
        <p>
          Subsequently, I transitioned to a pivotal role at the Developers
          Institute, where I embarked on a rewarding journey as a mentor. In
          this capacity, I took on the responsibility of training and guiding
          aspiring developers pursuing Level 5 & 6 diplomas. These comprehensive
          programs covered a wide spectrum of topics, course I delierved
          included client-side and server-side development, full-stack
          expertise, and application security. My role extended beyond
          traditional teaching, encompassing activities such as conducting code
          reviews, providing one-on-one mentoring sessions, and facilitating
          interactive workshops.
        </p>
        <p>
          <a href={cv}>View my latest CV</a>
        </p>
      </section>
    </>
  );
}

export default About;
