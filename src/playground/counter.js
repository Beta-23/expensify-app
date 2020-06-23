
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

     // Lifecycle methods
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count })); 
            console.log('Component mounted sucessfully!');
        }  
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
            console.log('Saving count Data to Local Storage!');
        }  
    }
    
    handleAddOne() { 
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log('handleAddOne updated state');
    }

    handleMinusOne() {
        this.setState((prevState) => {
            if (prevState.count >=1)
            return {
                count: prevState.count - 1
            };
            return alert('Count is at Zero');
        });
        console.log('handleMinusOne updated state');
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
        console.log('handleReset updated state');
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <br />
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));