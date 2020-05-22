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
import { useTheme, useMediaQuery, Box } from "@material-ui/core";

const works: Work[] = [
  {
    title: "OmNiam",
    type: "Mobile App",
    link: "/pdfs/OmNiam-Presentation.pdf",
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
    link: "/pdfs/OmNiam-AdminPanel-Presentation.pdf",
    subtitle:
      "OnNiam - clear solution to find, try and share recipes in a couple of taps.",
    cover: "omniamAdmin",
    story: `
      The main goal was to learn how to design more difficult web systems like admin panel. 
      In this system I’ve created dashboard and table of all recipes. 
      This admin panel has two colour modes - dark and light. 
      The mode depends on OS colour mode which user is using. 
      Also, user can change mode manually.
    `
  },
  {
    title: "Quaractive",
    type: "Web App",
    link: "https://www.quaractive.com/",
    subtitle:
      "A web app that helps to maintain mental health, daily routines and stay socially connected",
    cover: "quaractive",
    story: `
      This web app was created during online hackathon - Hack the Crisis, which took place in 20 - 22nd of March. 
      The main goal of this app was to help users to maintain heir mental health, 
      daily routines and stay connected to their social circles in a fun and positive way even during quarantine. 
      The web app is responsive for all three types of devices - mobile, tablet and desktop. 
      The design was created using mobile-first principle. 
    `
  },
  {
    title: "Postus",
    type: "Web App",
    link: "/pdfs/PostUs-Presentation.pdf",
    subtitle: "A Web App for easier parcel tracking and sending",
    cover: "postus",
    story: `
      The main goal was to analyse and redesign one of the most popular parcel sending and tracking systems in my country. 
      Original system is an ideal example of unfriendly UX/UI design. 
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
    postus: file(relativePath: { eq: "postus.png" }) {
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
      <SEO
        title="Works"
        url="https://daniele.krauze.lt/works/"
        description={`
          I am really interested in web design, 
          especially the latest trends of graphic elements, colours and design systems. 
      `}
        img="seo/omniamMobile.jpeg"
      />
      <Blob color="lips" xsX={87} xsY={363} mdX={40} mdY={146} />
      <Blob color="sea" xsX={15} xsY={981} mdX={7} mdY={1078} />
      <Blob color="lemon" xsX={90} xsY={2245} mdX={43} mdY={1682} />
      <Hello
        title="works"
        bottomNavigation={true}
        imgFit="contain"
        img={isMd ? data?.[closestImage]?.childImageSharp?.fluid : null}
        story={`
          As I mentioned before, I am really interested in web design, 
          especially the latest trends of graphic elements, colours and design systems. 
          Also, I just love when websites are user friendly. 
          <br/><br/>
          All of my personal projects (which you will find below) are created using the Material Dasign language.
        `}
      >
        {works.map((work, i) => (
          <Box paddingTop={isMd ? 10 : 0} key={i}>
            <Section title={work.title}>
              <PositionListener
                reportPosition={handleWorkPosition(work)}
                component={memoShowcase}
                title={work.title}
                type={work.type}
                link={work.link}
                subtitle={work.subtitle}
                img={data?.[work.cover]?.childImageSharp?.fluid}
                story={work.story}
              />
            </Section>
          </Box>
        ))}
      </Hello>
    </Layout>
  );
}
