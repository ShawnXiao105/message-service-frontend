import * as React from 'react';

class MailboxList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        var mailbox_list = this.props.mailboxes.map(function(mailbox) {
            return (
                <li className="list-group-item"
                    key={mailbox.id}
                    onClick={this.props.onSelectMailbox.bind(null, mailbox.id)}>
          <span className="badge">
            {mailbox.emails.length}
          </span>
                    {mailbox.name}
                </li>
            );
        }.bind(this));

        return (
            <div className="col-md-2">
                <ul className="mailboxes list-group">
                    {mailbox_list}
                </ul>
            </div>
        );
    }
}

export default MailboxList;