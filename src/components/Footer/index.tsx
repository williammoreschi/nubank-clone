import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import {Container, TabItem, TabText} from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TabItem>
          <Icon name="command" size={20} color="#ffffff" />
          <TabText>Pix</TabText>
        </TabItem>
        <TabItem>
          <Icon name="dollar-sign" size={20} color="#ffffff" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="users" size={20} color="#ffffff" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-up" size={20} color="#ffffff" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-down" size={20} color="#ffffff" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="smartphone" size={20} color="#ffffff" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="git-commit" size={20} color="#ffffff" />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="unlock" size={20} color="#ffffff" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>

        <TabItem>
          <Icon name="dollar-sign" size={20} color="#ffffff" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="smile" size={20} color="#ffffff" />
          <TabText>Doação</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-circle" size={20} color="#ffffff" />
          <TabText>Me ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={20} color="#ffffff" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
      </ScrollView>
    </Container>
  );
};

export default Footer;
