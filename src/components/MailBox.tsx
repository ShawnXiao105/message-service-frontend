import * as React from 'react';
import Email from "./Email";
import NoneSelected from "./NoneSelected";
import EmailList from "./EmailList";
//
// export interface Props {
//     key: number;
//     emails: Email[];
// }

class Mailbox extends React.Component<any, any>{

    constructor(props : any, context) {
        super(props,context);
        // var value = HubConnectivity.coerceFieldValue(props);
        this.state = { email_id: null };
    }

    // getInitialState(){
    //     return { email_id: null };
    // },

    handleSelectEmail = (id)=> {
        this.setState({ email_id: id });
    }

    render() {
        var email_id = this.state.email_id;
        if (email_id) {
            var mail = this.props.emails.filter(function(mail) {
                return mail.id == email_id;
            })[0];
            var selected_email = <Email id={mail.id}
                                    from={mail.from}
                                    to={mail.to}
                                    subject={mail.subject}
                                    body={mail.body} />;
        } else {
            var selected_email = <NoneSelected text="email" />;
        }

        return (
            <div>
                <EmailList emails={this.props.emails}
                           onSelectEmail={this.handleSelectEmail} />
                <div className="email-viewer">
                    {selected_email}
                </div>
            </div>
        );
    }
};

export default Mailbox