import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://api.covid19api.com/total/country/vietnam/status/confirmed')
  const statuses = await res.json()
  console.log(statuses)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      statuses,
    },
  }
}


function Home({ statuses }) {
  const tableData = statuses.map((status) => (
    <tr key={status.Date}>
      <td>{status.Date}</td>
      <td>{status.Cases}</td>
    </tr>
  ))

  return (
    <div className="home">
      <h1>Home page</h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Cases</th>
        </tr>
        {tableData}
      </table>
    </div>
  )
}

export default Home;