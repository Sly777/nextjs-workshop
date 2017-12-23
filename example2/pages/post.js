import Layout from '../components/layout'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>Blog yazisi</p>
    </Layout>
)