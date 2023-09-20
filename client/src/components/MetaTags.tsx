import { Helmet } from "react-helmet-async";
import defaultImage from "../assets/branding/ds-logo-lightmode-lge.svg";

interface iMetaTagsProps {
  title: string;
  description: string;
  type: string;
  image?: string;
}
function MetaTags(props: iMetaTagsProps) {
  let title: string = props.title
    ? `Deanne Smeaton - ${props.title}`
    : `Deanne Smeaton`;
  const url: string = window.location.href;
  let img: string = props.image ? props.image : defaultImage;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content={props.type} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={`${url.replace(/\/$/, "")}${img}`} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </>
  );
}

export default MetaTags;
