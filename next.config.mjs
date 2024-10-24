/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "suitshop.com", // Replace with your desired URL host
        port: "", // Optionally specify the port, if applicable
        pathname: "/**", // Use wildcard to allow all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
