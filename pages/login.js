import Head from 'next/head';
import { Fragment, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Fragment>
      <Head>
        <title>Login</title>
        <link rel="" href="" />
      </Head>
      <Layout>
        <h1>Login</h1>
        <form>
          <input
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button>Login</button>
        </form>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Layout>
      ;
    </Fragment>
  );
}
