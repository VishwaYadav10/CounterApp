import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = {
    counters: []
  }

  // constructor() {
  //   super();
  //   console.log("App - Constructor");
  // }


  componentDidMount() {
    document.title = "Counter App"
  }


  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  handleReset = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = 0;
    this.setState({ counters });
  }

  handleResetAll = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleAdd = () => {
    var lastCounterId;

    if (this.state.counters.length === 0) {
      lastCounterId = 0;
    }
    else {
      lastCounterId = this.state.counters.at(-1).id;
    }
    let counters = [...this.state.counters];
    counters.push({ id: lastCounterId + 1, value: 0 });
    this.setState({ counters });
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); // since both state var and const var is same which is counter, we can use simply "counter"

  }

  handleDeleteAll = () => {
    this.setState({ counters: [] });
  }

  render() {
    // console.log("App - Rendered");
    return (

      <React.Fragment>

        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />

        <main className="container">

          <Counters
            counters={this.state.counters}
            onAdd={this.handleAdd}
            onDeleteAll={this.handleDeleteAll}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onResetAll={this.handleResetAll}
            onDelete={this.handleDelete}
          />

        </main>

      </React.Fragment >
    );
  }
}

export default App;
