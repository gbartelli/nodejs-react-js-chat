// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '6935cc2a-444f-43ae-a475-39359d25fce2',
         // eslint-disable-next-line react/prop-types
         props.user.username,
         // eslint-disable-next-line react/prop-types
         props.user.username
        );
    return <div style={{ fontFamily: 'Metropolis'}} > <div style={{height: '100vh', fontFamily:'Metropolis'}}>
       <PrettyChatWindow {...chatProps} style={{height: '100%'}}/>
    </div> </div>
}


export default ChatsPage