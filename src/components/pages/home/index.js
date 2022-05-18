import { connect } from 'react-redux';
import Home from './Home';
import dispatcher from './dispatcher';
import connector from './connector';

export default connect(connector, dispatcher)(Home);
