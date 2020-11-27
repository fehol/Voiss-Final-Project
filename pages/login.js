import Head from 'next/head';
import { Fragment, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Login() {
  return (
    <Layout>
      <div>Hi</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { getUsers } = await import('../../util/database.js');
  const users = await getUsers();

  return {
    props: {
      users: users,
    },
  };
}
