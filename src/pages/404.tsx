import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Hello from "../components/Hello/Hello";
import Blob from "../components/Blob/Blob";

export default function() {
  return (
    <Layout>
      <SEO title="404 - Not Found" />
      <Blob color="lemon" xsX={15} xsY={336} mdX={7} mdY={538} />
      <Hello
        title="404"
        story={`
          Not found
        `}
      />
    </Layout>
  );
}
