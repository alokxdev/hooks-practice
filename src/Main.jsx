import { createRoot } from "react-dom/client";
import ComponentLifecycle from "./componentLifecycle";
import Debounce from "./Debounce";

createRoot(document.getElementById("root")).render(
  //<ComponentLifecycle />
  <Debounce />,
);
