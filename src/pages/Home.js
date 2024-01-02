import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import banner from '../images/banner.jpeg';
import '../styles/HomeStyle.css'

function Home() {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${banner})`}}>
        <div className='home-container'>
          <h1>Food Website</h1>
          <p>Best Food of Pakistan</p>

          <Link to={'/menu'}>
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
