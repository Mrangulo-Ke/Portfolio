import Layout from '../components/Layout';
import React from 'react';
import { ProjectDetail } from '../components/ProjectDetail';

import linkMasters from '../public/projects/linkMasters.png';

export default function Portfolio() {
  return (
    <Layout title="E-commerce web app">
      <ProjectDetail
        title="Link Masters"
        tech="Next JS, MongoDB & Taiwind Css"
        githuburl="/"
        hosturl="/"
        img={linkMasters}
        mobileimg={linkMasters}
      ></ProjectDetail>
    </Layout>
  );
}
