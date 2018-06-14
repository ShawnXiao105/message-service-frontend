import * as React from 'react';

// export interface Props {
//     id: number;
//     from: string;
//     to: string;
//     subject: string;
//     body: string;
// }

class Email extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        // var value = HubConnectivity.coerceFieldValue(props);
        // this.state = { email_id: null };
    }

    render() {
        return (
            <div className="email">
                <dl className="meta dl-horizontal">
                    <dt>From</dt>
                    <dd>{this.props.from}</dd>

                    <dt>To</dt>
                    <dd>{this.props.to}</dd>

                    <dt>Subject</dt>
                    <dd>{this.props.subject}</dd>
                </dl>
                <div className="body" dangerouslySetInnerHTML={{__html: this.props.body}}/>
            </div>
        );
    }
}

export default Email;