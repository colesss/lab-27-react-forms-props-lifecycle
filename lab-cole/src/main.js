'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from ''//Research footer in regards to search app. 
import Footer from ''//Research footer in regards to search app.
import SearchList from ''//Research list in regards to search app.
import SearchDetail from ''//Research detail in regards to search app.

import './style/main.scss'

const searchAPI = "https://someAPI.com";//Find something to build a search app with. 

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: "loading",
      searchList: [],
      searchedItem: {},
    }
    this.selectedItem = this.selectedItem.bind(this)
  }

  componentDidMount() {
    console.log("__STATE__", this.state);
  }

  componentWillMount() {
    let loading = "loading";
    this.setState({loading})

    //call api...once I have one to call and search...
  }

  selectedItem() {
    let loading = "loading";
    this.setState({loading})

    //call api...once I have one to call and search...
  }

  render() {
    return (
      <div>
        <Header />
        <div id="searchWrapper" className={this.state.loading}>
          <SearchList
            searchList={this.state.searchList}
            handler={this.selectedItem}
            />
        </div>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));//Shouldn't <App/> aactually be <App />? It's a self closing tag, yeah?