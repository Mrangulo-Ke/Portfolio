import Layout from '../components/Layout';
import React from 'react';
import { ProjectDetail } from '../components/ProjectDetail';
export default function Portfolio() {
  return (
    <Layout title="Project Chat App">
      <div className="grid gid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-black h-[30vh] lg:h-auto">
          <ProjectDetail
            title="Chat App"
            tech="Next JS & Taiwind Css"
            githuburl="/"
            hosturl="/"
          ></ProjectDetail>
        </div>
        <div className="bg-white h-[70vh] lg:min-h-screen"></div>
      </div>
    </Layout>
  );
}
