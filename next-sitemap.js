const siteUrl = "https://www.bridgekode.com";


module.exports = {
  siteUrl: process.env.SITE_URL || siteUrl,
  generateRobotsTxt: true,
};