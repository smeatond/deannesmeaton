import { Helmet } from "react-helmet-async";

interface iMetaTagsProps {
  title: string;
  description: string;
  type: string;
  image: string;
}
function MetaTags(props: iMetaTagsProps) {
  console.log(props);
  let title: string = props.title
    ? `Deanne Smeaton - ${props.title}`
    : `Deanne Smeaton`;
  const url: string = window.location.href;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={props.type} />
        <meta property="og:description" content={props.description} />
        <meta
          property="og:image"
          content={`${url.replace(/\/$/, "")}${props.image}`}
        />
        <meta property="og:url" content={url} />
      </Helmet>
    </>
  );
}

export default MetaTags;
