import React from 'react';
import Directory from '../../components/directory/directory.component';
import Layout from '../../components/layout/layout.component';

export default function Home() {
  return (
    <Layout isMain>
      <Directory />
    </Layout>
  );
}
