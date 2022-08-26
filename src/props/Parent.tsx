import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="blue" onClick={() => console.log("clicked")}>
      children
    </Child>
  );
};

export default Parent;
