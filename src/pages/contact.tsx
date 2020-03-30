import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";

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
      <Hello
        title="contact"
        img={data?.birdsImage?.childImageSharp?.fluid}
        story={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut ridiculus ipsum sit.
        `}
      />
    </Layout>
  );
}
