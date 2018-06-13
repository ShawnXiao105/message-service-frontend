// src/containers/Hello.tsx

import Hello, { Props } from '../components/Hello';
import * as actions from '../actions/';
import { HelloStoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: HelloStoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect<Props>(mapStateToProps, mapDispatchToProps)(Hello);