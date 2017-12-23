import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import Header from '../components/Header';
import ProjectInfo from '../components/ProjectInfo';

const Default = props => (
  <App>
    <Helmet>
      <title>
        {props.title !== ''
          ? `${props.title} :: RAN! React . GraphQL . Next.js Toolkit`
          : 'RAN! React . GraphQL . Next.js Toolkit'}
      </title>
    </Helmet>
    <Header pathname={props.url.pathname} />
    <ProjectInfo />
    {props.children}
  </App>
);

Default.propTypes = {
  title: PropTypes.string,
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Default.defaultProps = {
  title: ''
};

export default Default;
