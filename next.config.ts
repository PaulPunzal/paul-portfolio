import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = {
  // allowedDevOrigins: [process.env.DEV_ORIGIN!],
  allowedDevOrigins: ["192.168.56.1", "192.168.100.209"],
}

export default nextConfig;
