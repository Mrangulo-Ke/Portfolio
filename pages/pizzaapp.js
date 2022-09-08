import Layout from '../components/Layout';
import React from 'react';
import { ProjectDetail } from '../components/ProjectDetail';

import pizzaApp from '../public/projects/pizzaApp.png';
import mobilePizzaApp from '../public/projects/mobilePizzaAPP.png';

export default function Portfolio() {
  return (
    <Layout title="Project Resturant Webapp">
      <ProjectDetail
        title="Pizza Delivery App"
        tech="Next JS & Taiwind Css"
        githuburl="/"
        hosturl="/"
        img={pizzaApp}
        mobileimg={pizzaApp}
      ></ProjectDetail>
    </Layout>
  );
}
