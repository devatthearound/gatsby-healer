import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


const config: GatsbyConfig = {
  siteMetadata: {
    title: `test-healer`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        "accessToken": "MX16uuIbH99_GOB_gHxUpwKu3T8Ik0EV-HuwBLvwZIY",
        "spaceId": "1ntbwoeygnby"
      }
    },
    "gatsby-plugin-styled-components", 
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // }
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `https://immcoachtest.kinsta.cloud/graphql`,
    //     html: {
    //       useGatsbyImage: false
    //     }
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-firebase',
    //   options: {
    //     credentials: {
    //       apiKey: process.env.FIREBASE_APIKEY,
    //       authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    //       projectId: process.env.FIREBASE_PROJECTID,
    //       storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    //       messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    //       appId: process.env.FIREBASE_APPID
    //     }
    //   }
    // },
    "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};

export default config;
