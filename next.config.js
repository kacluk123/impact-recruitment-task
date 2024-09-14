module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/categories',
        permanent: true,
      },
    ]
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/*",
      },
    ],
  }
}