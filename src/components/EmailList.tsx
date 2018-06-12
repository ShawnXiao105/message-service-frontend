import * as React from 'react';
import EmailListItem from "./EmailListItem";

// export interface Props {
//     emails: Email[];
// }

class EmailList extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        // var value = HubConnectivity.coerceFieldValue(props);
        this.state = { email_id: null };
    }

    render() {
        var emailList = this.props.emails.map(function(mail) {
            return (
                <EmailListItem
                    key={mail.id} from={mail.from} to={mail.to} subject={mail.subject}
                    on_click={this.props.onSelectEmail.bind(null, mail.id)} />
            );
        }.bind(this));

        return (
            <table className="email-list table table-striped table-condensed">
                <thead>
                <tr>
                    <th>Subject</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                </thead>
                <tbody>
                {emailList}
                </tbody>
            </table>
        );
    }
}

export default EmailList