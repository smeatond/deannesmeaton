import { Link } from "react-router-dom";
import websiteDetails from "../config/website-details.json";
import MetaTags from "../components/MetaTags";

function Home() {
  return (
    <>
      <MetaTags
        title={websiteDetails.pagesMetaDetails.home.title}
        description={websiteDetails.pagesMetaDetails.home.description}
        type={websiteDetails.pagesMetaDetails.home.type}
        image={websiteDetails.pagesMetaDetails.home.image}
      />
      <section>
        <h1 lang="mi">Kia ora</h1>
        <p>
          <span lang="mi">Kia ora</span> and welcome to my corner of the digital
          realm! I'm Deanne, a passionate full-stack developer and educator from
          the picturesque landscapes of Mid Canterbury, New Zealand.
        </p>
        <p>
          For an insight into my journey and endeavors, delve into the{" "}
          <Link to="about">About Me</Link> section. Alternatively, explore my
          most recent posts right here. Thanks for stopping by!
        </p>
      </section>
      <section>
        <h2>Latest Blog Posts</h2>
        <p>Watch this space, this is coming soon!</p>
      </section>
    </>
  );
}

export default Home;
