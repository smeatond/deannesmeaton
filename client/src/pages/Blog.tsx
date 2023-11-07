import websiteDetails from "../config/website-details.json";
import MetaTags from "../components/MetaTags";
function Blog() {
  return (
    <>
      <MetaTags
        title={websiteDetails.pagesMetaDetails.blog.title}
        description={websiteDetails.pagesMetaDetails.blog.description}
        type={websiteDetails.pagesMetaDetails.blog.type}
        image={websiteDetails.pagesMetaDetails.blog.image}
      />
      <p>blog</p>{" "}
    </>
  );
}

export default Blog;
