import { useState, useEffect } from "react";

function ComponentLifecycle() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender((prev) => !prev);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [render]);
  return render ? <MyComponent /> : <div></div>;
}

function MyComponent() {
  useEffect(() => {
    console.log("component mounted");

    return () => console.log("component unmounted");
  }, []);

  return (
    <div>
      <h1>Hello from My component</h1>
    </div>
  );
}

export default ComponentLifecycle;
