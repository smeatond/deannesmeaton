import MetaTags from "../components/MetaTags";
import { SocialTypes } from "../helpers/Const";

function UnderConstruction() {
  return (
    <>
      <MetaTags
        title="Coming soon"
        description="Website or page under construction."
        type={SocialTypes.Website}
      />
      <h1>Coming soon!</h1>
      <p>
        This page is currently under construction. Please check back later for
        updates.
      </p>
    </>
  );
}

export default UnderConstruction;
