import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import websiteDetails from "../config/website-details.json";
import MetaTags from "../components/MetaTags";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;
  let pageNotFound: boolean = false;
  if (isRouteErrorResponse(error)) {
    console.log(error);
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
    pageNotFound = error.status === 404;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <div id="error-page">
      {pageNotFound ? (
        <>
          <MetaTags
            title={websiteDetails.pagesMetaDetails.pageNotFound.title}
            description={
              websiteDetails.pagesMetaDetails.pageNotFound.description
            }
            type={websiteDetails.pagesMetaDetails.pageNotFound.type}
            image={websiteDetails.pagesMetaDetails.pageNotFound.image}
          />
          <h1>Oops! This page cannot be found.</h1>
          <p>Sorry, the page you are trying to find no longer exists. </p>
          <p>
            Please return <Link to="/">Home</Link> to find your place again.
          </p>
        </>
      ) : (
        <>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </>
      )}
    </div>
  );
}
