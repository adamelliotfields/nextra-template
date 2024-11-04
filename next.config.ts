import nextra from 'nextra'

const { NODE_ENV } = process?.env ?? {}

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: {
    renderer: 'mathjax'
  }
})

// https://nextra.site/docs/guide/static-exports
export default withNextra({
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  basePath: NODE_ENV === 'production' ? '/nextra-template' : '' // TODO: change this!
})
