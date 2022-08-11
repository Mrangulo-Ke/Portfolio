import Layout from '../components/Layout';
import React from 'react';
import { ProjectDetail } from '../components/ProjectDetail';

import mobileSummerX from '../public/projects/mobileSummerX.png';
import summerX from '../public/projects/summerX.png';

export default function Portfolio() {
  return (
    <Layout title="Project SummerX App">
      <ProjectDetail
        title="SummerX"
        tech="Next JS & Taiwind Css"
        githuburl="/"
        hosturl="/"
        img={mobileSummerX}
        mobileimg={summerX}
      ></ProjectDetail>
    </Layout>
  );
}
