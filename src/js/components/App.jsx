import React from 'react';
import { connect } from 'react-redux';
import { func, shape, arrayOf, string, bool, any } from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as actions from '../actions';
import Dashboard from './Dashboard/Dashboard';
import Home from './Dashboard/Home';
import Form from './Form';
import Students from './Students';

export class App extends React.Component {
  static propTypes = {
    fetchData: func.isRequired,
    data: arrayOf(any).isRequired,
    isLoading: bool.isRequired,
    error: shape({
      message: string
    })
  };

  static defaultProps = {
    error: null
  };

  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
    const token = localStorage.getItem('token');
    console.log('token', token);

    if (token) {
      console.log('token');
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    const { data, isLoading, error } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <Router>
        <div className="app">
          {`data retreived is ${JSON.stringify(data)}, ${isLoading}, ${error &&
            error.message}`}
          <br />
          <Link style={{ margin: '20px' }} to="/dashboard">
            Go to Dashboard
          </Link>
          {isAuthenticated && (
            <Link to="/dashboard/profile">Go to Profile</Link>
          )}
          <Link to="/form">Go to Form</Link>
          <br />
          <Link to="/students">Students</Link>

          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/form" component={Form} />
            <Route path="/students" component={Students} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data: data.data,
    isLoading: data.isLoading,
    error: data.error
  };
}

export default connect(mapStateToProps, { fetchData: actions.fetchData })(App);
