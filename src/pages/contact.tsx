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
      <Blob color="lemon" xsX={-23} xsY={336} mdX={-37} mdY={538} />
      <Hello
        title="contact"
        img={data?.birdsImage?.childImageSharp?.fluid}
        story={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut ridiculus ipsum sit.
        `}
        featured={<Contact />}
      ></Hello>
    </Layout>
  );
}
