import React from "react";
import Layout from "../components/Layout";
import { useParams } from 'react-router-dom';
const Home = () => {
  <img src="" alt="" />
  const params = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">หน้าหลัก</h1>
      <br />
      <img src="https://arit.pcru.ac.th/trainingroom/img/photos/com102/shots102_1.jpg" alt="" />
    </Layout>
  );
};

export default Home;
