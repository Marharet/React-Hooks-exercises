import React, { useReducer } from "react";

function reducer(prevState, action){
    switch(action.type){
        case "CHANGE": {
            return {
                ...prevState,
                [action.value.name] : action.value.value
            };
        }; 
        default: throw new Error("invalid type");
    }
};

export default function ControlledForm(){

    const [form, dispatchForm] = useReducer(reducer, { name: '', email: '', age: '' });
 
    function submitForm(event){
        event.preventDefault();
        console.log(form);
    };

    function formChange(event){
        console.log(event.target.value);
        dispatchForm({type:"CHANGE", value: {name: event.target.name, value: event.target.value}})
    };

    return(
        <form onSubmit={submitForm} onChange={formChange}>
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="age" type="number" placeholder="Age" />
            <button type="submit">Submit</button>
        </form>
    );
};