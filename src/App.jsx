import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counter/couterSlice";
import Navbar from "./component/Navbar";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="card">
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        the total Click is : {count}
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
