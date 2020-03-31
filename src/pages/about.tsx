import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";
import Blob from "../components/Blob/Blob";
import Section from "../components/Section/Section";
import { Typography } from "@material-ui/core";
import Post from "../components/Post/Post";

const query = graphql`
  query {
    danieleImage: file(relativePath: { eq: "daniele.jpeg" }) {
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
      <SEO title="About" />
      <Blob color="sea" xsX={221} xsY={115} mdX={459} mdY={146} />
      <Hello
        title="Danielė"
        img={data?.danieleImage?.childImageSharp?.fluid}
        story={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut ridiculus ipsum sit. 
          Pulvinar porta sem ut sit. Velit non vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed mi porttitor. 
          Tincidunt vel eget posuere mi nisl elementum maecenas quis lacinia. 
          Duis mattis pulvinar felis, sed adipiscing venenatis sem aliquet volutpat.
        `}
      >
        <Section title="education">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            ut ridiculus ipsum sit. Pulvinar porta sem ut sit. Velit non
            vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed
            mi porttitor. Tincidunt vel eget posuere mi nisl elementum maecenas
            quis lacinia. Duis mattis pulvinar felis, sed adipiscing venenatis
            sem aliquet volutpat.
          </Typography>
        </Section>
        <Section title="experience">
          <Post
            title="Graphic Designer"
            tags={["Teltonika", "Full time", "2019 - Current"]}
            story={`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Venenatis ut ridiculus ipsum sit. Pulvinar porta sem ut sit. 
              Velit non vulputate suspendisse sodales aliquam eget sed etiam. 
              Amet diam sed mi porttitor. Tincidunt vel eget posuere mi nisl 
              elementum maecenas quis lacinia. Duis mattis pulvinar felis, 
              sed adipiscing venenatis sem aliquet volutpat.
            `}
          />
        </Section>
        <Section title="skills">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            ut ridiculus ipsum sit. Pulvinar porta sem ut sit. Velit non
            vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed
            mi porttitor. Tincidunt vel eget posuere mi nisl elementum maecenas
            quis lacinia. Duis mattis pulvinar felis, sed adipiscing venenatis
            sem aliquet volutpat.
          </Typography>
        </Section>
      </Hello>
    </Layout>
  );
}
