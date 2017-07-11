import React ,{Component} from 'react';
import fecha from 'fecha';

class Message extends Component {
    render(){
        let currentTime = fecha.format(new Date(), 'HH:mm:ss YY-MM-DD');
        return(
            
            <li className='message'>
                <div className='author'>
                    <strong>author</strong>
                    <i className='timestamp'>{currentTime}</i>
                </div>
                <div className='body'>
                    {this.props.message.msg}
                </div>
            </li>
        )
    }
}

Message.propTypes = {
    message:React.PropTypes.object.isRequired
}

export default Message