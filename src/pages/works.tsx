import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import Blob from "../components/Blob/Blob";
import Section from "../components/Section/Section";
import { Typography } from "@material-ui/core";

export default function() {
  return (
    <Layout>
      <SEO title="Works" />
      <Blob color="lips" xsX={214} xsY={363} mdX={459} mdY={146} />
      <Hello
        title="works"
        story={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut ridiculus ipsum sit. 
          Pulvinar porta sem ut sit. Velit non vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed mi porttitor. 
          Tincidunt vel eget posuere mi nisl elementum maecenas quis lacinia. 
          Duis mattis pulvinar felis, sed adipiscing venenatis sem aliquet volutpat.
        `}
      >
        <Section title="OmNiam">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            ut ridiculus ipsum sit. Pulvinar porta sem ut sit. Velit non
            vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed
            mi porttitor. Tincidunt vel eget posuere mi nisl elementum maecenas
            quis lacinia. Duis mattis pulvinar felis, sed adipiscing venenatis
            sem aliquet volutpat.
          </Typography>
        </Section>
        <Section title="OmNiam">
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            ut ridiculus ipsum sit. Pulvinar porta sem ut sit. Velit non
            vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed
            mi porttitor. Tincidunt vel eget posuere mi nisl elementum maecenas
            quis lacinia. Duis mattis pulvinar felis, sed adipiscing venenatis
            sem aliquet volutpat.
          </Typography>
        </Section>
        <Section title="Quaractive">
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
