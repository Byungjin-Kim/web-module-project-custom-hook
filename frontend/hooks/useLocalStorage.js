import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }

        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    const setSoragedState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }

    return ([state, setSoragedState])

}

export default useLocalStorage;