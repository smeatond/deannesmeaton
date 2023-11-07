import websiteDetails from "../config/website-details.json";
import MetaTags from "../components/MetaTags";
function UnderConstruction() {
  return (
    <>
      <MetaTags
        title={websiteDetails.pagesMetaDetails.underConstruction.title}
        description={
          websiteDetails.pagesMetaDetails.underConstruction.description
        }
        type={websiteDetails.pagesMetaDetails.underConstruction.type}
        image={websiteDetails.pagesMetaDetails.underConstruction.image}
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
