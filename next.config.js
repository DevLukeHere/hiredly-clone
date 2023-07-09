/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data-staging.wobbjobs.com",
        port: "",
        pathname: "/companies/**"
      }
    ]
  }
};

module.exports = nextConfig;
