import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter.value);
  return <div>This is the value in the Navbar the count : {count}</div>;
};

export default Navbar;
