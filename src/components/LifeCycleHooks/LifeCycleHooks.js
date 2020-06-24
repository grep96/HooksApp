import React, {useState, useEffect} from 'react';

const LifeCycleHooks = (props) => {
    const [counter, setCounter] = useState(props.counterProp);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
        console.log('LifeCycleHooks.js componentDidMount');
        return () => console.log('LifeCycleHooks.js componentWillUnmount');   
    },[]);

    //React Hooks: componentWillReceiveProps, agganciato alla variazione delle proprietà
    useEffect(() => {
            setCounter (props.counterProp);
        },
        [props.counterProp]
    );

    //React Hooks: component componentDidUpdate
    useEffect(() => {
        console.log('LifeCycleHooks.js componentDidUpdate');
    });

    return (
        <div>
            <button onClick={handleClick}>{props.text}</button>
            <h4>Contatore LifeCycleHooks.js: {counter}</h4>
        </div>
    );
}

export default LifeCycleHooks;