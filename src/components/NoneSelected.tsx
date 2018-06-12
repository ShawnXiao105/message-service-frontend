import * as React from 'react';

interface Props {
    text: string
}

class NoneSelected extends React.Component<Props, object> {
    render() {
        return (
            <div className="none-selected alert alert-warning" role="alert">
                <span>No {this.props.text} selected.</span>
            </div>
        );
    }
}

export default NoneSelected;