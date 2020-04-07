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
      <Blob color="lemon" xsX={15} xsY={336} mdX={7} mdY={478} />
      <Hello
        title="labas"
        img={data?.sandImage?.childImageSharp?.fluid}
        story={`
          I don’t want to introduce myself in the first page of portfolio. 
          That’s because when I talk with person for the first time, 
          the first word actually is labas. Labas is hello in my native language - Lithuanian. 
          I thought you should know this. As I mentioned before, 
          this is my portfolio based on WEB designs and some graphic design elements. 
        `}
      />
    </Layout>
  );
}
