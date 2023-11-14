import websiteDetails from "../src/config/website-details.json"  assert  { type: "json" };

const GetPageDetails = (url) => {
  //todo error check url
  let details = {};
  switch (url) {
    case "/blog":
      console.log("blog");
      //todo update when blog added
      details = {
        title: GetTitle(
          websiteDetails.pagesMetaDetails.underConstruction.title
        ),
        description:
          websiteDetails.pagesMetaDetails.underConstruction.description,
        type: websiteDetails.pagesMetaDetails.underConstruction.type,
        image: websiteDetails.pagesMetaDetails.underConstruction.image,
      };
      break;
    case "/about":
      console.log("abou");
      details = {
        title: GetTitle(websiteDetails.pagesMetaDetails.about.title),
        description: websiteDetails.pagesMetaDetails.about.description,
        type: websiteDetails.pagesMetaDetails.about.type,
        image: websiteDetails.pagesMetaDetails.about.image,
      };
      break;
    case "/privacy":
      console.log("provacy");
      details = {
        title: GetTitle(websiteDetails.pagesMetaDetails.privacy.title),
        description: websiteDetails.pagesMetaDetails.privacy.description,
        type: websiteDetails.pagesMetaDetails.privacy.type,
        image: websiteDetails.pagesMetaDetails.privacy.image,
      };
      break;
    default:
      console.log("default");
      details = {
        title: GetTitle(websiteDetails.pagesMetaDetails.home.title),
        description: websiteDetails.pagesMetaDetails.home.description,
        type: websiteDetails.pagesMetaDetails.home.type,
        image: websiteDetails.pagesMetaDetails.home.image,
      };
  }
  return details;
};

const GetTitle = (title) => {
  return title ? `Deanne Smeaton - ${title}` : `Deanne Smeaton`;
};


export { GetPageDetails };
