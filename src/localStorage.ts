export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined; // let reducers init state if no data
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined; // let reducers init state if catch error.
    }
};

// set serialized redux state to localStorage by key
export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        // api.responseErrorHandler(error);
        // console.log(error)
    }
};