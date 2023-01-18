const useInput = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const errorHandler = (e) => {
    setInputTouched(true);
  };

  return {};
};

export default useInput;
