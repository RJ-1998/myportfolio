const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Rishabh Jain', // Navigation and Site Title
  siteTitleAlt: 'Rishabh Jain', // Alternative Site title for SEO
  siteTitleShort: 'Rishabh Jain', // short_name for manifest
  siteHeadline: 'Portfolio website for Rishabh Jain', // Headline for schema.org JSONLD
  siteUrl: 'https://cara.lekoarts.de', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '', // Used for SEO and manifest
  siteDescription: 'Rishabh Jain, Full Stack Web Developer',
  author: 'Rishabh', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@cara', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
