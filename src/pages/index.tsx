import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";
import Blob from "../components/Blob/Blob";

const query = graphql`
  query {
    sandImage: file(relativePath: { eq: "sand.jpeg" }) {
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
      <SEO title="Home" />
      <Blob color="lemon" xsX={-23} xsY={336} mdX={-37} mdY={478} />
      <Hello
        title="labas"
        img={data?.sandImage?.childImageSharp?.fluid}
        story={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut ridiculus ipsum sit. 
          Pulvinar porta sem ut sit. Velit non vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed mi porttitor. 
          Tincidunt vel eget posuere mi nisl elementum maecenas quis lacinia. 
          Duis mattis pulvinar felis, sed adipiscing venenatis sem aliquet volutpat.
        `}
      />
    </Layout>
  );
}
