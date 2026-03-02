/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://dehawk.xyz",
  generateRobotsTxt: true, // (optional) generate a robots.txt file
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
};
