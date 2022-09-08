import Layout from '../components/Layout';
import React from 'react';
import { ProjectDetail } from '../components/ProjectDetail';

import gadgetMaster from '../public/projects/gadgetMaster.png';
import mobileGadgetMaster from '../public/projects/mobileGadgetMaster.png';

export default function Portfolio() {
  return (
    <Layout title="Project Business Agency">
      <ProjectDetail
        title="Gadget Masters"
        tech="Next JS & Taiwind Css"
        githuburl="/"
        hosturl="/"
        img={gadgetMaster}
        mobileimg={gadgetMaster}
      ></ProjectDetail>
    </Layout>
  );
}
