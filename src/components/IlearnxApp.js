import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Footer from './Footer';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IlearnxApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    // Event handler implicit setState object
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    // Event handler
    handlePickOptions = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    // Event handler from child
     handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value for language choice!';
        } else if (this.state.options.indexOf(option) > -1) {
            return ('This language is already in your list of choices!');
        } 

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    };

    // Event handler
    handleDeleteIndividualOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    // Event handler implicit setState object
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    // Lifecycle methods
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (option) {
                this.setState(() => ({ options })); 
            }

            } catch (e) {
                // Do nothing at all  
        }   
    };

    // Lifecycle methods
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving Data to Local Storage!');
        }
        
    };

    // Lifecycle methods
    componentWillUnmount() {
        console.log('App WillUnmount!');
    };

    render() {
        const subtitle = 'Let an al·go·rithm show your learning path!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                    <div className="container">
                        <Action 
                        hasOptions={ this.state.options.length > 0 } 
                        handlePickOptions={ this.handlePickOptions }
                        />

                        <div className="widget">
                            <Options 
                                options={ this.state.options } 
                                handleDeleteOptions={ this.handleDeleteOptions} 
                                handleDeleteIndividualOption={ this.handleDeleteIndividualOption }
                            />
                            <br />
                            <AddOption
                                handleAddOption={ this.handleAddOption }
                            />
                        </div>
                    </div>
                <OptionModal 
                    selectedOption={ this.state.selectedOption }
                    handleClearSelectedOption= { this.handleClearSelectedOption }
                />
                <Footer />
            </div>
        ); 
    }
};

export default IlearnxApp;