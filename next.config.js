/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env: {
    // customKey: 'my-value',
    API_URL : "https://eth-goerli.g.alchemy.com/v2/BJYX90Ktxksw0OELSV2cnemZfAH0zQMB",
    PRIVATE_KEY : "1cb396c761b43a57bab81129f8f79139becbc8eacde33fba049027ae632ee2fd"
  }

}
