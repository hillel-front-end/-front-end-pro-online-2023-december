// import Example_useEffect from "./topic/Example1_use-effect.tsx";
import { useState } from "react";
// import Modal from "./topic/Example2_styled-component.tsx";
// import Example3 from "./topic/Example3_Context_Reducer/Example3.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./topic/ReactRouter/router.tsx";

function App() {
  const [visible, setVisible] = useState(true);

  const onCloseModal = (visible: boolean) => {
      setVisible(visible);
  }

  return (
    <>
        {/*/------- Example 1 useEffect --------*/}
        {/*<input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} />*/}
        {/*{visible && (*/}
        {/*    <Example_useEffect />*/}
        {/*)}*/}

        {/*/------- Example 2 Styled - Component --------*/}
        {/*<Modal visible={visible} onClose={onCloseModal}>*/}
        {/*    <header className="modal__header"></header>*/}
        {/*    <div className="modal__main">*/}
        {/*        Hello world*/}
        {/*    </div>*/}
        {/*    <div className="modal__footer"></div>*/}
        {/*</Modal>*/}

        {/* -------  Example 3 -------- */}

        {/*<Example3 />*/}
        <RouterProvider router={router}/>
    </>
  )
}

export default App
