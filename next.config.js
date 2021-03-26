const appName = "nextjs-blog";
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProd ? `/${appName}` : "",
  env: {
    basePath: isProd ? `/${appName}` : "",
  }
}