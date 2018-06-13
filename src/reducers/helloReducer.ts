// // src/reducers/helloReducer.tsx

// import { EnthusiasmAction } from '../actions';
// import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';


// // Reducers
// export interface State {
//     languageName: string;
//     enthusiasmLevel: number;
// }

// export function enthusiasm(state: HelloStoreState, action: EnthusiasmAction): StoreState {
//     switch (action.type) {
//         case INCREMENT_ENTHUSIASM:
//             return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//         case DECREMENT_ENTHUSIASM:
//             return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
//     }
//     return state;
// }
