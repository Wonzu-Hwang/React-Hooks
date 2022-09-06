export const App = () => {
  const sayHello = () => console.log("Hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(() => {
    sayHello();
  }, [number]);
  return (
    <div className="App">
      <div>Hello</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};
