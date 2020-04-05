import React, { useCallback, memo, useRef, useState } from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import Blob from "../components/Blob/Blob";
import Section from "../components/Section/Section";
import { Work } from "../utils/Work";
import Showcase from "../components/Showcase/Showcase";
import { useStaticQuery, graphql } from "gatsby";
import PositionListener from "../components/PositionListener/PositionListener";
import { useTheme, useMediaQuery } from "@material-ui/core";

const works: Work[] = [
  {
    title: "OmNiam",
    type: "Mobile App",
    subtitle:
      "OnNiam - clear solution to find, try and share recipes in a couple of taps.",
    cover: "omniamMobile",
    story: `
      The main goal was to design a clean looking mobile application, using Material UI specifications. 
      In this app You can explore and share your favourite recipes.
    `
  },
  {
    title: "OmNiam",
    type: "Admin Panel",
    subtitle:
      "OnNiam - clear solution to find, try and share recipes in a couple of taps.",
    cover: "omniamAdmin",
    story: `
      The main goal was to learn how to design more difficult WEB systems like admin panel. 
      In this system I’ve created dashboard and table of all recipes. 
      This admin panel has two colour modes - dark and light. 
      The mode depends on OS colour mode which user is using. 
      Also, user can change mode manually.
    `
  },
  {
    title: "Quaractive",
    type: "Web App",
    subtitle:
      "The web application for those who unexpectedly for them ended up locked up at their homes.",
    cover: "quaractive",
    story: `
      This web app was created during online hackathon - Hack the Crisis, which took place in 20 - 22nd of March. 
      The main goal of this app was to help users to maintain heir mental health, 
      daily routines and stay connected to their social circles in a fun and positive way even during quarantine. 
      The WEB app is responsive for all three types of devices - mobile, tablet and desktop. 
      The design was created using progressive enhancement principle. 
    `
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

const memoShowcase = memo(Showcase);

export default function() {
  const data = useStaticQuery(query);
  const [closestImage, setClosestImage] = useState<string>(
    works[0]?.cover ?? ""
  );
  const imagePositions = useRef<Record<string, number>>({});

  const handleWorkPosition = useCallback(
    (work: Work) => (position: number) => {
      if (Object.keys(imagePositions.current).length >= works.length) {
        imagePositions.current = {
          [work.cover]: position
        };
      } else {
        imagePositions.current[work.cover] = position;
        if (Object.keys(imagePositions.current).length >= works.length) {
          const midpoint = (window?.innerHeight ?? 0) / 2;
          const closest = Object.keys(imagePositions.current).reduce(
            (prev, key) => {
              const value = imagePositions.current[key];
              return prev.value !== null &&
                Math.abs(value - midpoint) > Math.abs(prev.value - midpoint)
                ? prev
                : { key, value };
            },
            { key: "", value: null }
          );
          setClosestImage(closest.key);
        }
      }
    },
    []
  );

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      <SEO title="Works" />
      <Blob color="lips" xsX={214} xsY={363} mdX={459} mdY={146} />
      <Blob color="lemon" xsX={-23} xsY={981} mdX={-68} mdY={1078} />
      <Blob color="sea" xsX={207} xsY={2245} mdX={537} mdY={1682} />
      <Hello
        title="works"
        bottomNavigation={true}
        imgFit="contain"
        img={isMd ? data?.[closestImage]?.childImageSharp?.fluid : null}
        story={`
          As I mentioned before, I am really interested in WEB design during my free time. 
          Especially in the latest trends of graphic elements, colours and design systems. 
          Also, I just love when WEB design is user friendly. 
          <br/><br/>
          All of my examples, which you will find above, are created using specifications of Material UI.
        `}
      >
        {works.map((work, i) => (
          <Section title={work.title} key={i}>
            <PositionListener
              reportPosition={handleWorkPosition(work)}
              component={memoShowcase}
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
