import React from 'react';
import { connect } from 'react-redux';
import { func, shape, arrayOf, string, bool, any } from 'prop-types';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as actions from '../actions';
import Dashboard from './Dashboard/Dashboard';
import Home from './Dashboard/Home';

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

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { data, isLoading, error } = this.props;

    return (
      <Router>
        <div className="app">
          {`data retreived is ${JSON.stringify(data)}, ${isLoading}, ${error &&
            error.message}`}
          <br />
          <Link style={{ margin: '20px' }} to="/dashboard">
            Go to Dashboard
          </Link>
          <Link to="/dashboard/profile">Go to Profile</Link>

          <Switch>
            <Route path="/dashboard" component={Dashboard} />
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
