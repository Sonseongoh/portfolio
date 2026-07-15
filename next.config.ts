import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // 상위 폴더(coding/son)의 잡동사니 package-lock.json 때문에
    // 워크스페이스 루트가 잘못 추론되는 것을 방지
    root: path.join(__dirname),
  },
};

export default nextConfig;
