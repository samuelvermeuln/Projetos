import React, { useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=> {
        const div = messageRef.current;
        
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    },[messageRef])

    return (
        <Container>
            <Messages ref={messageRef}>
                
           {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage
                    author={'Samuel'}
                    date={'10/05/2000'}
                    content={'Hoje e domingo'}
                 />
             ))}

                <ChannelMessage
                    author={'Samuel'}
                    date={'10/05/2000'}
                    content={
                        <>
                            <Mention>@Samuel Santos</Mention>, Me carrega no Lol e CS de novo
                            por favor?
                        </>
                    }
                    hasMention={true}
                    isBot={true}
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #Chat-Livre" />
                <InputIcon />
            </InputWrapper>

        </Container>
    )
}

export default ChannelData;