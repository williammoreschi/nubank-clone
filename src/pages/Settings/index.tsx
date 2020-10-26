import React from 'react';
import {useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Feather';

import {ScrollView} from 'react-native-gesture-handler';
import {
  Container,
  Header,
  HeaderText,
  HeaderIcons,
  HeaderButton,
  Nav,
  NavItem,
  NavText,
  NavDescription,
  SignOutButton,
  SignOutButtonText,
  Code,
  Account,
  AccountText,
} from './styles';

const Settings: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderText numberOfLines={1}>
          Olá, William Gleyton Pessini Moreschi
        </HeaderText>
        <HeaderIcons>
          <HeaderButton onPress={() => navigation.goBack()}>
            <Icon name="x" size={20} color="#ffffff" />
          </HeaderButton>
        </HeaderIcons>
      </Header>
      <ScrollView>
        <Code>
          <QRCode
            value="https://rocketseat.com.br"
            size={80}
            color="#ffffff"
            backgroundColor="#8B10AE"
          />
          <Account>
            <AccountText>Agência 0001 Conta 0000000-0</AccountText>
            <AccountText>Banco 206 - Nu Pagamentos S.S.</AccountText>
          </Account>
        </Code>

        <Nav>
          <NavItem>
            <Icon name="help-circle" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Me ajuda</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
          <NavItem>
            <Icon name="user" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Perfil</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
          <NavItem>
            <Icon name="settings" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Configurar conta</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
          <NavItem>
            <Icon name="credit-card" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Configurar cartão</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
          <NavItem>
            <Icon name="briefcase" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Pedir conta Pj</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
          <NavItem>
            <Icon name="star" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Participe da nossa promo</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
          <NavItem>
            <Icon name="smartphone" size={20} color="#FFF" />
            <NavDescription>
              <NavText>Configurações do app</NavText>
              <Icon name="chevron-right" size={12} color="#FFF" />
            </NavDescription>
          </NavItem>
        </Nav>
        <SignOutButton onPress={() => {}}>
          <SignOutButtonText>SAIR DO APP</SignOutButtonText>
        </SignOutButton>
      </ScrollView>
    </Container>
  );
};

export default Settings;
