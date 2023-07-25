/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data-staging.wobbjobs.com",
        port: "",
        pathname: "/companies/**",
      },
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/data-staging.wobbjobs.com/**",
      },
      {
        protocol: "https",
        hostname: "assets.wobbjobs.com",
        port: "",
        pathname: "/images/about_us/hiroes-2022/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN,
  },
};

module.exports = nextConfig;
