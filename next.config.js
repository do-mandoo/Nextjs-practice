/** @type {import('next').NextConfig} */
const nextConfig = {
  // next/image의 Image태그에서 url에 https를 사용하기 위해서 아래의 설정을 해줘야 한다.
  images: {
    domains: ['via.placeholder.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
// module.exports = {
//   images: {
//     domains: ['assets.example.com'],
//   },
//   reactStrictMode: true,
//   swcMinify: true,
// };
