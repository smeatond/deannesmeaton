import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";
import { SocialTypes } from "../helpers/Const";

function Home() {
  return (
    <>
      <MetaTags
        title=""
        description="Deanne Smeaton's corner of the digital relm, a full-stack developer from Mid Canterbury, New Zealand."
        type={SocialTypes.Website}
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
