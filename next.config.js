const sitemap = require('nextjs-sitemap-generator');

sitemap({
	baseUrl: 'https://nurhaq.site',
	pagesDirectory: __dirname + '/pages',
	targetDirectory: 'public/',
});

module.exports = {
	trailingSlash: true,
};
