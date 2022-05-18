import { connect } from 'react-redux';
import Post from './Post';
import dispatcher from './dispatcher';
import connector from './connector';

export default connect(connector, dispatcher)(Post);
