console.log('App is loading...Testing babel');

// JXS - JavaScript XML extensions

const app = {
    title: 'iLearnx App',
    subtitle: 'What Should I learn next?',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(`random index option: ${randomNum}`);
};

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{app.subtitle }</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What course should I take?</button>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}:</p>
            <ol>
            {/*map over app.options getting back an array of list */}
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }    
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Your Course Choice</button>
                <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();