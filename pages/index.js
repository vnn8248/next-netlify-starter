import Head from 'next/head'
import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Header from '@components/Header'
import Footer from '@components/Footer'

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
  
        <main>
          <Header title="Welcome to my app!" />
          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
  
        <Footer />
      </div>
    )
  }
}
