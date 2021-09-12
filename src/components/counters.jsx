import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        // console.log("Counters - Rendered");

        const { onReset, onResetAll, onAdd, onDeleteAll, counters, onIncrement, onDecrement, onDelete } = this.props;

        return (
            <div>

                <button
                    onClick={onResetAll}
                    className="btn btn-primary btn-sm m-2"
                    disabled={counters.length === 0 ? true : false}>
                    Reset All Items
                </button>

                <button
                    onClick={onAdd}
                    className="btn btn-success btn-sm m-2">
                    Add an Item
                </button>

                <button
                    onClick={onDeleteAll}
                    className="btn btn-danger btn-sm m-2"
                    disabled={counters.length === 0 ? true : false}>
                    Delete All Items
                </button>

                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                        onReset={onReset}
                        counter={counter}
                    />
                ))}
            </div>
        );

    }
}

export default Counters;