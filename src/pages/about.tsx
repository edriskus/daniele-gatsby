import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import { useStaticQuery, graphql } from "gatsby";
import Blob from "../components/Blob/Blob";
import Section from "../components/Section/Section";
import Post from "../components/Post/Post";
import Timeline from "../components/Timeline/Timeline";
import Skills from "../components/Skills/Skills";

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
      <Blob color="sea" xsX={87} xsY={35} mdX={40} mdY={146} />
      <Blob color="lips" xsX={15} xsY={1148} mdX={7} mdY={1230} />
      <Blob color="lemon" xsX={90} xsY={1749} mdX={43} mdY={1804} />
      <Hello
        title="Danielė"
        bottomNavigation={true}
        img={data?.danieleImage?.childImageSharp?.fluid}
        story={`
          Okay, my name is Daniele. I am working, studying and living in Vilnius. 
          Four things which can describe me - Photography, Music, WEB and Graphic design. 
          I am very interested in photography, especially using film. 
          <br/><br/>
          Music takes a really big part in my life. Unfortunately, 
          I am not singing or playing any kind of instrument. 
          However, I am a vinyl collector. My goal is to collect all LPs of Pink Floyd. 
          I am a huge fan of this band. Sometimes I think that I should be born in 60s, 
          because I live in the rhythm of 70s - 80s. 
          <br/><br/>
          The last two things  - WEB and Graphic design. These things were my hobbies. 
          I thought that I will be a bioengineer because I was studying this discipline. 
          But in the 2nd course of studies, I realised that I don’t want to work in laboratories. 
          So, I thought that I should spend more of my free time to expand my knowledge in graphic and WEB design. 
          So, that’s how I became a graphic - UI/UX designer. 
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
              Currently, I am working as Graphic Designer in one of the biggest IoT companies of Lithuania - Teltonika. 
              During this time, I’ve done various projects - from booths of exhibitions designs to WEB design. 
              The main projects were designs of banners, datasheets, catalogues, 
              exhibitions booths and drawings of topologies, icons and illustrations. 
              Recently, I am creating the WEB design of control system of devices. 
              I am using the specifications of  Material UI to create user friendly system. 
            `}
          />
        </Section>
        <Section title="skills">
          <Skills
            skills={[
              { type: "primary", strength: 4, title: "Adobe Illustrator" },
              { type: "primary", strength: 4, title: "Adobe Photoshop" },
              { type: "primary", strength: 4, title: "Adobe Xd" },
              { type: "primary", strength: 4, title: "Figma" },
              { type: "secondary", strength: 3, title: "Adobe InDesign" },
              { type: "secondary", strength: 3, title: "Adobe Lightroom" }
            ]}
          />
        </Section>
      </Hello>
    </Layout>
  );
}
