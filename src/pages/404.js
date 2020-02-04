import React from "react";
import Layout from "../components/layout";
import Section from "../components/sections/layout";
const NotFoundPage = () => (
  <Layout>
    <Section sectionName={"404"} sectionTitle={"404"}>
      <h3 style={{ textAlign: "center" }}>We can't seem to find the page you're looking for!</h3>
    </Section>
  </Layout>
);

export default NotFoundPage;
