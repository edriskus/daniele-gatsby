import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";
import Blob from "../components/Blob/Blob";
import Section from "../components/Section/Section";
import { Typography } from "@material-ui/core";
import Post from "../components/Post/Post";
import Timeline from "../components/Timeline/Timeline";

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
      <Blob color="lips" xsX={-41} xsY={948} mdX={-40} mdY={1230} />
      <Blob color="lemon" xsX={231} xsY={1449} mdX={448} mdY={1804} />
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
          <Timeline
            events={[
              {
                date: "2019-2021",
                title: "Master’s Student of Engineering and Computer Graphics",
                story: "Vilniaus Gediminas Technical University"
              },
              {
                date: "2015-2019",
                title: "Bachelor’s degree of Bioengineering",
                story: "Vilniaus Gediminas Technical University"
              }
            ]}
          />
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
