import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import Layout from 'components/Layout';
import Layout from 'containers/LayoutContainer';

class App extends Component {
    
    render() {
        return(
           <Layout />
        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app)