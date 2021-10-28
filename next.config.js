/** @type {import('next').NextConfig} */
module.exports = {
	i18n: { locales: ["ja"], defaultLocale: "ja" },
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		formats: ["image/avif", "image/webp"],
	},
};
