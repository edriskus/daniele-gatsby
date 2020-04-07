import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";
import Blob from "../components/Blob/Blob";
import Contact from "../components/Contact/Contact";

const query = graphql`
  query {
    birdsImage: file(relativePath: { eq: "birds.jpeg" }) {
      childImageSharp {
        fluid {
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
      <SEO title="Contact" />
      <Blob color="lemon" xsX={15} xsY={336} mdX={7} mdY={538} />
      <Hello
        title="contact"
        img={data?.birdsImage?.childImageSharp?.fluid}
        story={`
          So, the last thing - if you are impressed with my works, you can leave me a message. 
          “I’ll be there for YOU! :)”
        `}
        featured={<Contact />}
      />
    </Layout>
  );
}
