const headers = require('./headers');

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async headers() {
		return [
			{
				source: '/(.*)',
				headers
			}
		];
	}
};

module.exports = nextConfig;
