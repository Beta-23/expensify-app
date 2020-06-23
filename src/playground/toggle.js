console.log('App is loading...Testing babel');

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() { 
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
        console.log('handleToggleVisibility updated state');
    }

    render() {
        return(
        <div>
            <h1>Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    { this.state.visibility ? 'HIDE DETAILS' : 'SHOW DETAILS' }
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Your Details Here!</p>
                    </div>
                )}    
        </div> 
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

