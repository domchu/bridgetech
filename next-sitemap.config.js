// const siteUrl = "https://www.bridgekode.com";

module.exports = {
  siteUrl: "https://www.bridgekode.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/project" },
      { userAgent: "*", allow: "/" },
    ],
  },
  exclude: ["/project"],
};
