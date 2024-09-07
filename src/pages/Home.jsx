import React from "react";
import Layout from "../components/Layout";
import { useParams } from 'react-router-dom';
const Home = () => {
  <img src="" alt="" />
  const params = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">หน้าหลัก</h1>
    </Layout>
  );
};

export default Home;
