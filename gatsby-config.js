module.exports = {
  siteMetadata: {
    title: 'The Dev Blog of Yang Lorenzana',
    author: 'Yang Lorenzana',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-120605896-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Dev Blog of Yang Lorenzana',
        short_name: 'YL Dev Blog',
        start_url: '/',
        background_color: '#2C3E50',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/assets/avatar.png',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`ubuntu\:400,500,700`],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/avatar.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
