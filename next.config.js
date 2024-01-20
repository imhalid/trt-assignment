/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-i.pr.trt.com.tr',
            }
        ]
    }
}

module.exports = nextConfig
