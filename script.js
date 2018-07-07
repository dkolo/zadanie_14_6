var Counter = React.createClass({
    getDefaultProps: function() {
        console.log("Tą metodą mogę ustawić domyślne wartości propsów");
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState ({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function () {
        console.log('Wywoływana zaraz przed metodą render');
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter + ' '),
            React.createElement('button', {onClick: this.increment}, 'Dodaj 1'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij 1')
        );
    },
    
    componentDidMount: function () {
        console.log('Komponent został zamontowany na stronie i mogę dokonywać na nim operacji');
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),   
    React.createElement(Counter, {})
    );

ReactDOM.render(element, document.getElementById('app'));