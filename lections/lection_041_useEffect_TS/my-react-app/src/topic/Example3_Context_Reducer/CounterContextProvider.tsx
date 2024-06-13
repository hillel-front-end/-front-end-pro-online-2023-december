import {createContext, useContext, useReducer } from "react";


/// create context
export interface ModalCounterContext {
    counter: number,
    incrementCounter: (c: number) => void,
    decrementCounter: (c: number) => void,
    visibility: boolean,
    onToggleVisibility: (isVisible: boolean) => void,
}

const initialStateContext: ModalCounterContext = {
    counter: 0,
    visibility: false,
    incrementCounter: () => true,
    decrementCounter: () => true,
    onToggleVisibility: () => false
};

export const ModalCounterContext = createContext<ModalCounterContext>(initialStateContext);

export const useModalCounterContext = (): ModalCounterContext => useContext(ModalCounterContext);

// use context
// Data Provider Pattern
interface State {
    counter: number,
    visibility: boolean
}

const initialState: State = {
    counter: 0,
    visibility: false
}

enum ACTION {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    DECREMENT_COUNTER = 'DECREMENT_COUNTER',
    TOGGLE_VIS_MODAL = 'TOGGLE_VIS_MODAL'
}

type Action = {
    action: ACTION,
    value: any
}

const reducerModalCounter = (model: State, payload: Action) => {
    switch (payload.action) {
        case ACTION.INCREMENT_COUNTER: {
            let newModel = {
                ...model,
                counter: model.counter + (payload.value as number)
            };

            if (newModel.counter >= 3) {
                newModel = {...newModel, visibility: true }
            }

            return newModel;
        }
        case ACTION.DECREMENT_COUNTER: {
            let value: number = model.counter;

            if (payload.value > model.counter) {
                value = 0;
            }

            return {
                ...model,
                counter: model.counter - value
            }
        }
        case ACTION.TOGGLE_VIS_MODAL: {
            return {
                ...model,
                visibility: payload.value
            }
        }
    }

    return model;
};

const ModalCounterProvider = ({children}: any) => {
    // const [counter, setCounter] = useState<ModalCounterContext['counter']>(0);
    // const [visible, setVisible] = useState<ModalCounterContext['visibility']>(false);
    const [model, dispatch] = useReducer(reducerModalCounter, initialState);

    console.log(model, 'model');

    const context: ModalCounterContext = {
        counter: model.counter,
        visibility: model.visibility,
        incrementCounter: (count: number) => {
            dispatch({
                action: ACTION.INCREMENT_COUNTER,
                value: count
            })
        },
        decrementCounter: (count: number) => {
            dispatch({
                action: ACTION.DECREMENT_COUNTER,
                value: count
            });
        },
        onToggleVisibility: (isVisible: boolean) => (
            dispatch({
                action: ACTION.TOGGLE_VIS_MODAL,
                value: isVisible
            })
        )
    }

    return (
        <ModalCounterContext.Provider value={context}>
            {children}
        </ModalCounterContext.Provider>
    )
};

export default ModalCounterProvider;
