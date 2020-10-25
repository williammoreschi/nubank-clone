import React from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  HeaderText,
  HeaderIcons,
  HeaderButton,
  CardInvoiceButton,
  CreditCardText,
  CurrentBill,
  BillText,
  BillValue,
  AvailableCredit,
  AvailableCreditText,
  AvailableCreditValue,
  CreditCard,
  AccountStatusButton,
  Account,
  AccountText,
  Balance,
  BalanceText,
  BalanceValue,
  RewardsCardButton,
  Rewards,
  RewardsIcon,
  RewardsText,
  RewardsInfoText,
  RewardsButton,
  RewardsButtonText,
  Footer,
  FooterCard,
  FooterCardText,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderText numberOfLines={1}>
          Olá, William Gleyton Pessini Moreschi
        </HeaderText>
        <HeaderIcons>
          <HeaderButton>
            <Icon name="eye" size={20} color="#ffffff" />
          </HeaderButton>
          <HeaderButton>
            <Icon name="settings" size={20} color="#ffffff" />
          </HeaderButton>
        </HeaderIcons>
      </Header>
      <ScrollView>
        <CardInvoiceButton>
          <CreditCard>
            <Icon name="credit-card" size={20} color="rgba(0,0,0, 0.6)" />
            <CreditCardText>Cartão de Crédito</CreditCardText>
          </CreditCard>

          <CurrentBill>
            <BillText>Fatura Atual</BillText>
            <BillValue>R$ 1.699,15</BillValue>
          </CurrentBill>

          <AvailableCredit>
            <AvailableCreditText>Limite Disponível</AvailableCreditText>
            <AvailableCreditValue>R$ 170,85</AvailableCreditValue>
          </AvailableCredit>
        </CardInvoiceButton>

        <AccountStatusButton>
          <Account>
            <Icon name="dollar-sign" size={20} color="rgba(0,0,0,0.6)" />
            <AccountText>Cartão de Crédito</AccountText>
          </Account>

          <Balance>
            <BalanceText>Saldo Disponível</BalanceText>
            <BalanceValue style={{color: '#000'}}>R$ 0,00</BalanceValue>
          </Balance>
        </AccountStatusButton>

        <RewardsCardButton>
          <Rewards>
            <RewardsIcon>
              <Icon name="gift" size={22} color="#6d2177" />
            </RewardsIcon>
            <RewardsText>Rewards</RewardsText>
          </Rewards>
          <RewardsInfoText>
            Apague compras com pontos que nunca expiram.
          </RewardsInfoText>
          <RewardsButton>
            <RewardsButtonText>Conhecer</RewardsButtonText>
          </RewardsButton>
        </RewardsCardButton>
      </ScrollView>

      <Footer>
        <ScrollView horizontal alwaysBounceHorizontal>
          <FooterCard>
            <Icon name="command" size={20} color="#ffffff" />
            <FooterCardText>Pix</FooterCardText>
          </FooterCard>
          <FooterCard>
            <Icon name="dollar-sign" size={20} color="#ffffff" />
            <FooterCardText>Pagar</FooterCardText>
          </FooterCard>
          <FooterCard>
            <Icon name="thumbs-up" size={20} color="#ffffff" />
            <FooterCardText>Indicar amigos</FooterCardText>
          </FooterCard>
          <FooterCard>
            <Icon name="corner-down-right" size={20} color="#ffffff" />
            <FooterCardText>Transferir</FooterCardText>
          </FooterCard>
          <FooterCard>
            <Icon name="plus-circle" size={20} color="#ffffff" />
            <FooterCardText>Depositar</FooterCardText>
          </FooterCard>
        </ScrollView>
      </Footer>
    </Container>
  );
};
export default Home;
