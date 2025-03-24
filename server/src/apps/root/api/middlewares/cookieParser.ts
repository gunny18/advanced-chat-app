import cookieParser from "cookie-parser";

function parseCookies() {
  const middlewareFn = cookieParser();
  return middlewareFn;
}

export default parseCookies;
