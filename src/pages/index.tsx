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
        fluid(maxHeight: 2240) {
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
        title="Labas"
        url="https://daniele.krauze.lt/"
        img="seo/sand.jpeg"
        description={`
          It means "hello" in my native language - Lithuanian.
          This is my portfolio based on web designs and some graphic design elements. 
      `}
      />
      <Blob color="lemon" xsX={15} xsY={336} mdX={7} mdY={478} />
      <Hello
        title="labas"
        img={data?.sandImage?.childImageSharp?.fluid}
        story={`
          is the first word of my portfolio. When I talk with a person for the first time, 
          before I introduce myself, I always start with "labas". 
          It means "hello" in my native language - Lithuanian and
          I just thought you should know this. 
          <br/><br/>
          As I mentioned before, this is my portfolio based on web designs and some graphic design elements. 
        `}
      />
    </Layout>
  );
}
