import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import dispatcher from './dispatcher';
import connector from './connector';

export default connect(connector, dispatcher)(HeaderMenu);
