import { connect } from 'react-redux';
import App from './App';
import dispatcher from './dispatcher';
import connector from './connector';

export default connect(connector, dispatcher)(App);
