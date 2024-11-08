/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgur.com", "res.cloudinary.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Optional: This enables viewBox for SVGs
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
