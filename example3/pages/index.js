import Layout from '../components/layout';
import PostLink from '../components/PostLink';

export default () => (
    <Layout>
        <h1>Yazilarim</h1>

        <ul>
            <PostLink id="ilk-yazi" title="Ilk yazi"/>
            <PostLink id="ikinci-yazi" title="Ikinci yazi"/>
            <PostLink id="ucuncu-yazi" title="Ucuncu yazi"/>
        </ul>
    </Layout>
)