import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const useForm = email => {
    const [values, setValues] = useState(email);

    const updateValue = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log('sending...', values)
    }
    return [updateValue, submitHandler];
}

function App() {
    const [updateValue, submitHandler] = useForm({});

    return (
      <div className="App">
          <h2>example of hook</h2>
          <form onSubmit={submitHandler}>
              <input name="email" placeholder="your email" onChange={updateValue}/>
              <button type="submit">Send</button>
          </form>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));