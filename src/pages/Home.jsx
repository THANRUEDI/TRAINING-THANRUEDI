import React from "react";
import Layout from "../components/Layout";
import { useParams } from 'react-router-dom';
const Home = () => {
  const params = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">หน้าหลัก</h1>
      <img src="https://www.skptc.ac.th/wp-content/uploads/2020/09/DSC_0030-840x560.jpg" alt="" />
    </Layout>
  );
};

export default Home;