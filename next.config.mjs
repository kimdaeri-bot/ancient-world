/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 유적 배경 이미지를 외부(원 AR 회사) CDN에서 가져올 수 있도록 허용.
  // 실제 도입 시 원 회사가 제공하는 호스트로 교체.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
