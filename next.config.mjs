/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/team_afrikanium",
				destination: "/team",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
