/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.prismic.io"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
