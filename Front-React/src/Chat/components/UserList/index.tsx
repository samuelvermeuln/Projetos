import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Samuel santos" />

            <Role>Offilene - 1</Role>

            {Array.from(Array(5).keys()).map((n) => (
                <UserRow nickname="Bot Legal" isBot />
            ))}

            {Array.from(Array(5).keys()).map((n) => (
                <UserRow nickname="Fulano" />
            ))}
        </Container>
    )
}

export default UserList;