import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkmode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
    return [darkMode, setDarkMode];
}

export default useDarkmode;