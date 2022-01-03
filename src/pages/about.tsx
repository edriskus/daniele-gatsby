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
    danieleImage: file(relativePath: { eq: "danieleLomo.JPG" }) {
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
        title="About"
        img="seo/danieleLomo.JPG"
        url="https://daniele.krauze.lt/about/"
        description={`
          Okay, my name is Danielė. 
          Four things that describe me best: Photography (especially using analog film), 
          Music, web and Graphic design.  
      `}
      />
      <Blob color="lightGrey" xsX={87} xsY={35} mdX={40} mdY={146} />
      <Blob color="darkGrey" xsX={15} xsY={1148} mdX={7} mdY={1230} />
      <Blob color="grey" xsX={90} xsY={1749} mdX={43} mdY={1804} />
      <Hello
        title="Danielė"
        bottomNavigation={true}
        img={data?.danieleImage?.childImageSharp?.fluid}
        story={`
          Okay, my name is Danielė. I am working, studying and living in Vilnius. 
          Four things that describe me best: Photography (especially using analog film), 
          Music, web and Graphic design. 
          <br/><br/>
          Music is a huge part of my life - to support my favourite bands I collect vinyl records. 
          My goal is to collect all LPs of Pink Floyd, because I just adore this band. 
          Sometimes I think that I should've been born in 60s, because I live in the rhythm of 70s - 80s. 
          <br/><br/>
          Then, there's web and Graphic design - my long-time hobby.
          At first I thought that I would be a bioengineer because I was studying this discipline. 
          But in the 2nd course of studies, I realised that I don’t want to work in a laboratory. 
          So, I thought I should spend more of my free time to expand my knowledge in graphic and web design. 
          So, that’s the story of how I became a graphic - UI/UX designer. 
        `}
      >
        <Section title="education">
          <Timeline
            events={[
              {
                date: "2019-Current",
                title: "Master’s Student of Engineering and Computer Graphics",
                story: "Vilniaus Gediminas Technical University",
              },
              {
                date: "2015-2019",
                title: "Bachelor’s degree of Bioengineering",
                story: "Vilniaus Gediminas Technical University",
              },
            ]}
          />
        </Section>
        <Section title="experience">
        <Post
            title="UX Specialist"
            tags={["Mediapark", "2021 Oct - Now"]}
            story={`
            Currently, I’m working as UX Designer in Mediapark which is digital solutions company.
            Here I’m working with various clients and projects. Also, I’ve gained some skills working with
            Axure application which is intended for detailed prototypes.
            `}
          />
          <Post
            title="UI/UX Designer"
            tags={["Surfshark", "2020 Aug - 2021 Oct"]}
            story={`
              I was working in Surfshark which is one of the best-known cybersecurity products in the world. 
              I have experience working with cross-platform apps because our product is compatible with different operating systems - 
              iOS, macOS, Android, Windows, Android TV and extensions of browsers (Such as Google Chrome and Mozilla Firefox). 
              Also, I'm working with the Growth marketing team, whose biggest goal is users retention. 
              During this time I've done various projects, for example - iOS and Android widgets, notification centre, 
              Antivirus in Windows, extension redesign, components libraries for our design files and etc.
            `}
          />
          <Post
            title="Graphic Designer"
            tags={["Teltonika", "2019 Mar - 2020 Aug"]}
            story={`
              I was working as a Graphic Designer in one of the biggest IoT companies of Lithuania - Teltonika. 
              During this time, I’ve done various projects - from exhibition booth designs to web prototypes. 
              I've also designed banners, datasheets, catalogues, drawings of topologies, icons and illustrations. 
              One of the largest projects was creating the web design of a device control system, 
              based on Material Design language for better user experience and accessibility.
            `}
          />
        </Section>
        <Section title="skills">
          <Skills
            skills={[
              { type: "primary", strength: 4, title: "Figma" },
              { type: "primary", strength: 4, title: "Adobe Xd" },
              { type: "primary", strength: 4, title: "Adobe Illustrator" },
              { type: "primary", strength: 4, title: "Adobe Photoshop" },
              { type: "primary", strength: 4, title: "Adobe Lightroom" },
              { type: "primary", strength: 2, title: "Axure" },
            ]}
          />
        </Section>
      </Hello>
    </Layout>
  );
}
