import React, {useCallback, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
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
  BoxBlur,
} from './styles';

import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const [iconVisibility, setIconVisibility] = useState('eye-off');
  const [visibility, setVisibility] = useState(true);
  const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const wait = (timeout: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const handleVisibility = useCallback(() => {
    setIconVisibility(visibility ? 'eye' : 'eye-off');
    setVisibility(!visibility);
  }, [visibility]);
  return (
    <Container>
      <Header>
        <HeaderText numberOfLines={1}>
          Olá, William Gleyton Pessini Moreschi
        </HeaderText>
        <HeaderIcons>
          <HeaderButton onPress={handleVisibility}>
            <Icon name={iconVisibility} size={20} color="#ffffff" />
          </HeaderButton>
          <HeaderButton onPress={() => navigation.navigate('Settings')}>
            <Icon name="settings" size={20} color="#ffffff" />
          </HeaderButton>
        </HeaderIcons>
      </Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#6d2177']}
          />
          // eslint-disable-next-line prettier/prettier
        }
      >
        <CardInvoiceButton>
          <CreditCard>
            <Icon name="credit-card" size={20} color="rgba(0,0,0, 0.6)" />
            <CreditCardText>Cartão de Crédito</CreditCardText>
          </CreditCard>
          {!visibility ? (
            <BoxBlur />
          ) : (
            <>
              <CurrentBill>
                <BillText>Fatura Atual</BillText>
                <BillValue>R$ 1.699,15</BillValue>
              </CurrentBill>

              <AvailableCredit>
                <AvailableCreditText>Limite Disponível</AvailableCreditText>
                <AvailableCreditValue>R$ 2.563,85</AvailableCreditValue>
              </AvailableCredit>
            </>
          )}
        </CardInvoiceButton>

        <AccountStatusButton>
          <Account>
            <Icon name="dollar-sign" size={20} color="rgba(0,0,0,0.6)" />
            <AccountText>Conta</AccountText>
          </Account>
          {!visibility ? (
            <BoxBlur />
          ) : (
            <Balance>
              <BalanceText>Saldo Disponível</BalanceText>
              <BalanceValue style={{color: '#000'}}>R$ 154.596,18</BalanceValue>
            </Balance>
          )}
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
      <Footer />
    </Container>
  );
};
export default Home;
