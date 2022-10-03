import { Notify } from 'notiflix/build/notiflix-notify-aio';
const { useState } = require("react");
export const useForm = ({ initialState, onSubmit }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const newValue = value;
        setState(prevState => ({
            ...prevState, 
            [name]:newValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
           if (e.name) {
            return Notify.warning('Please fill all fields');
        }
        onSubmit({ ...state });
        setState({ ...initialState });
    }

    return {state,setState, handleChange, handleSubmit}
}