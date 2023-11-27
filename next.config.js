const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ref. https://nextjs.org/docs/pages/building-your-application/deploying/static-exports,
  basePath: isProd ? "/simple-quiz-webapp" : undefined,
};

module.exports = nextConfig;
