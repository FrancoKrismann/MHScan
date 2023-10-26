import { LinkStyle } from "@/styled-components";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems:"center",
        width:"100%",
        height:"99vh",
      }}
      id="error-page"
    >
      <h1>Oops!</h1>
      <strong>error 404</strong>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br/>
      <LinkStyle to={"/"}>Regresar al Home</LinkStyle>
    </div>
  );
}
