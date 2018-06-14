import * as React from 'react';
import './App.css';
import NoneSelected from './components/Mail/NoneSelected';
import MailboxList from './components/Mail/MailboxList';
import Mailbox from './components/Mail/MailBox';
// import Email from "./components/Email";

// import logo from './logo.svg';

// interface Props {
//     id: number;
//     name: string;
//     emails: Email[];
// }

class App extends React.Component<any, any> {
    constructor(props: any, context) {
        super(props);
        this.state = {mailboxes: this.props.mailboxes, mailbox_id: null};
        this.handleSelectMailbox = this.handleSelectMailbox.bind(this);
    }

    handleSelectMailbox(id) {
        this.setState({mailbox_id: id});
    }

    public render() {
        var mailbox_id = this.state.mailbox_id;
        if (mailbox_id) {
            var mailbox = this.props.mailboxes.filter(function (mailbox) {
                return mailbox.id == mailbox_id;
            })[0];
            var selected_mailbox = <Mailbox key={mailbox.id}
                                        emails={mailbox.emails}/>;
        } else {
            var selected_mailbox = <NoneSelected text="mailbox"/>;
        }

        return (
            <div className="app row">
                <MailboxList mailboxes={this.props.mailboxes}
                             onSelectMailbox={this.handleSelectMailbox}/>
                <div className="mailbox col-md-10">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            {selected_mailbox}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
