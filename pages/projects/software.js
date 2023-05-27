import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

const software = () => {
  return (
    <>
      <DefaultSeo
        title="Software Details | Bridgekode"
        description="We offers the various IT services such as mobile apps, design websites, HR services, SEO, training,IT setup, IT management etc"
        {...SEO}
      />
    </>
  );
};

export default software;
