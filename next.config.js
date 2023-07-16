/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data-staging.wobbjobs.com",
        port: "",
        pathname: "/companies/**"
      },
      {
        protocol: "https",
        hostname: "assets.wobbjobs.com",
        port: "",
        pathname: "/images/about_us/hiroes-2022/**"
      }
    ]
  }
};

module.exports = nextConfig;
