import Header from '../components/Header'
import Layout from '../components/MyLayout.js'
import Head from 'next/head'



var halt = 'alkdjf'
export default class Example extends React.Component {

  constructor(props, context) {
    super(props, context);
  }
  render () {
    return (
      <div>
      <Layout>
          <p>{halt}</p>
        </Layout>
      </div>
    )
  }

}


Example.getInitialProps = async function() {
  const res  = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}