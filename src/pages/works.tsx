import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import Blob from "../components/Blob/Blob";
import Section from "../components/Section/Section";
import { Work } from "../utils/Work";
import Showcase from "../components/Showcase/Showcase";
import { useStaticQuery, graphql } from "gatsby";

const works: Work[] = [
  {
    title: "OmNiam",
    type: "Mobile App",
    subtitle:
      "OnNiam - clear solution to find, try and share recipes in a couple of taps.",
    cover: "omniamMobile",
    story:
      "The main goal was to design a clean looking mobile application, using Material UI specifications. In this app You can explore and share your favourite recipes."
  },
  {
    title: "OmNiam",
    type: "Admin Panel",
    subtitle:
      "OnNiam - clear solution to find, try and share recipes in a couple of taps.",
    cover: "omniamAdmin",
    story:
      "The main goal was to design a clean looking mobile application, using Material UI specifications. In this app You can explore and share your favourite recipes."
  },
  {
    title: "Quaractive",
    type: "Web App",
    subtitle:
      "OnNiam - clear solution to find, try and share recipes in a couple of taps.",
    cover: "quaractive",
    story:
      "The main goal was to design a clean looking mobile application, using Material UI specifications. In this app You can explore and share your favourite recipes."
  }
];

const query = graphql`
  query {
    omniamMobile: file(relativePath: { eq: "omniamMobile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    omniamAdmin: file(relativePath: { eq: "omniamAdmin.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quaractive: file(relativePath: { eq: "quaractive.png" }) {
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
      <SEO title="Works" />
      <Blob color="lips" xsX={214} xsY={363} mdX={459} mdY={146} />
      <Hello
        title="works"
        story={`
          Kaip jau minėjau, laisvu laiku domiuosi šiuolaikinėmis WEB dizaino technologijomis. 
          Visas mano susidomėjimas atsispindi žemiau pateiktuose darbų pavyzdžiuose. 
          Šie WEB projektai sukurti remiantis Material UI sistema bei naujausiomis dizaino tendencijomis.
        `}
      >
        {works.map((work, i) => (
          <Section title={work.title} key={i}>
            <Showcase
              title={work.title}
              type={work.type}
              subtitle={work.subtitle}
              img={data?.[work.cover]?.childImageSharp?.fluid}
              story={work.story}
            />
          </Section>
        ))}
      </Hello>
    </Layout>
  );
}
