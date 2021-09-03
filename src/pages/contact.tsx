import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";
import Blob from "../components/Blob/Blob";
import Contact from "../components/Contact/Contact";

const query = graphql`
  query {
    birdsImage: file(relativePath: { eq: "purpleLomo.JPG" }) {
      childImageSharp {
        fluid(maxHeight: 2240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    FBIcon: file(relativePath: { eq: "FB.png" }) {
      childImageSharp {
        fluid(maxHeight: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    IGIcon: file(relativePath: { eq: "IG.png" }) {
      childImageSharp {
        fluid(maxHeight: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BehanceIcon: file(relativePath: { eq: "Behance.png" }) {
      childImageSharp {
        fluid(maxHeight: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LinkedInIcon: file(relativePath: { eq: "LinkedIn.png" }) {
      childImageSharp {
        fluid(maxHeight: 72) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function() {
  const data = useStaticQuery(query);
  return (
    <Layout>
      <SEO
        title="Contact"
        url="https://daniele.krauze.lt/contact/"
        description={`
          So, the last thing - if you are impressed with my works, you can leave me a message. 
          “I’ll be there for YOU! :)”
        `}
        img="seo/birds.jpeg"
      />
      <Blob color="grey" xsX={15} xsY={336} mdX={7} mdY={538} />
      <Hello
        title="contact"
        img={data?.birdsImage?.childImageSharp?.fluid}
        story={`
          So, the last thing - if you are impressed with my works, you can leave me a message. 
          “I’ll be there for YOU! :)”
        `}
        featured={
          <Contact
            contacts={[
              {
                title: "Facebook",
                icon: data?.FBIcon?.childImageSharp?.fluid,
                link: "https://www.facebook.com/danielekrauze31",
              },
              {
                title: "Instagram",
                icon: data?.IGIcon?.childImageSharp?.fluid,
                link: "https://www.instagram.com/danielekrau/",
              },
              {
                title: "Behance",
                icon: data?.BehanceIcon?.childImageSharp?.fluid,
                link: "https://www.behance.net/danielkrauze",
              },
              {
                title: "LinkedIn",
                icon: data?.LinkedInIcon?.childImageSharp?.fluid,
                link: "https://www.linkedin.com/in/daniel%C4%97-ri%C5%A1k%C4%97-66475311a/",
              },
            ]}
          />
        }
      />
    </Layout>
  );
}
