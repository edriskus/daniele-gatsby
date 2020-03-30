import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";

export default function() {
  return (
    <Layout>
      <SEO title="Works" />
      <Hello
        title="works"
        story={`
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis ut ridiculus ipsum sit. 
          Pulvinar porta sem ut sit. Velit non vulputate suspendisse sodales aliquam eget sed etiam. Amet diam sed mi porttitor. 
          Tincidunt vel eget posuere mi nisl elementum maecenas quis lacinia. 
          Duis mattis pulvinar felis, sed adipiscing venenatis sem aliquet volutpat.
        `}
      />
    </Layout>
  );
}
