import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const parms = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">Contact</h1>
      <hr />
      <p className="mt-8 mb-20 text-blue-950">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta accusantium adipisci magnam in nesciunt suscipit sed doloribus vero rerum asperiores distinctio corrupti quisquam fuga dolore, tempora ad labore deserunt perferendis?
      </p>
      <h1>Name = {parms.name}</h1>
    </Layout>
  )
}

export default Contact