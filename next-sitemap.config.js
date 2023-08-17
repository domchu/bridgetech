const myWebsiteUrl = process.env.siteUrl;

module.exports = {
  siteUrl: "https://www.bridgekode.com" || myWebsiteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/project" },
      { userAgent: "*", allow: "/" },
    ],
  },
  exclude: ["/project"],
};
