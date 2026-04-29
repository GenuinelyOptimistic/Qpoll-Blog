import { useStaticQuery, graphql } from "gatsby";

export function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          twitterHandle
        }
      }
    }
  `);
  return site.siteMetadata;
}
