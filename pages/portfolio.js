import Layout from '../components/Layout';
import React from 'react';
import { ProjectDetail } from '../components/ProjectDetail';

import portfolio from '../public/projects/portfolio.png';

export default function Portfolio() {
  return (
    <Layout title="Project Portfolio">
      <ProjectDetail
        title="My Portfolio"
        tech="Next JS & Taiwind Css"
        githuburl="/"
        hosturl="/"
        img={portfolio}
        mobileimg={portfolio}
      ></ProjectDetail>
    </Layout>
  );
}
