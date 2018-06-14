import * as React from 'react';

export interface Props {
    from: string;
    to: string;
    subject: string;
    on_click?: () => void;
}

class EmailListItem extends React.Component<Props, object> {
    render() {
        return (
            <tr onClick={this.props.on_click.bind(null)}>
                <td>{this.props.subject}</td>
                <td>{this.props.from}</td>
                <td>{this.props.to}</td>
            </tr>
        );
    }
}

export default EmailListItem;