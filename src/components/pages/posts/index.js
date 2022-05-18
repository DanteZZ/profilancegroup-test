import { connect } from 'react-redux';
import Posts from './Posts';
import dispatcher from './dispatcher';
import connector from './connector';

export default connect(connector, dispatcher)(Posts);
