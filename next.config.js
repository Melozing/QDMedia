module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "http://admin.localhost:8080/:path*", // Thay đổi port tại đây nếu Express.js đang lắng nghe trên một port khác
      },
    ];
  },
};
