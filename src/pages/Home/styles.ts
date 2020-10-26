import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {lighten, rgba, darken} from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const Header = styled.View`
  padding: 25px 0;
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  flex: 1;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  align-items: center;
  margin-right: 20px;
`;
export const HeaderIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${lighten(0.1, '#6d2177')};
  align-items: center;
  justify-content: center;
`;

export const CardInvoiceButton = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
`;

export const CreditCard = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const CreditCardText = styled.Text`
  font-size: 16px;
  color: ${rgba(0, 0, 0, 0.6)};
  margin-left: 15px;
`;

export const CurrentBill = styled.View`
  margin-bottom: 5px;
`;

export const BillText = styled.Text`
  font-size: 12px;
  color: ${rgba(0, 0, 0, 0.6)};
  margin-bottom: 5px;
`;
export const BillValue = styled.Text`
  color: #34c2e0;
  font-size: 22px;
  font-weight: bold;
`;
export const AvailableCredit = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const AvailableCreditText = styled.Text`
  font-size: 12px;
  color: #000;
`;

export const AvailableCreditValue = styled.Text`
  font-size: 13px;
  color: ${darken(0.3, '#97cb59')};
  margin-left: 5px;
  font-weight: bold;
`;

export const AccountStatusButton = styled.View`
  background: #ffffff;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
`;

export const Account = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const AccountText = styled.Text`
  font-size: 16px;
  color: ${rgba(0, 0, 0, 0.6)};
  margin-left: 15px;
`;

export const Balance = styled.View``;
export const BalanceText = styled.Text`
  font-size: 12px;
  color: ${rgba(0, 0, 0, 0.6)};
  margin-bottom: 5px;
`;
export const BalanceValue = styled.Text`
  color: #000000;
  font-size: 22px;
  font-weight: bold;
`;

export const RewardsCardButton = styled.View`
  background: #ffffff;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 15px;
`;
export const Rewards = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;
export const RewardsIcon = styled.View`
  background: ${rgba(109, 33, 119, 0.2)};
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 17px;
`;
export const RewardsText = styled.Text`
  font-size: 16px;
  color: #6d2177;
  margin-left: 15px;
`;
export const RewardsInfoText = styled.Text`
  font-size: 13px;
  color: ${rgba(0, 0, 0, 0.6)};
  margin-bottom: 20px;
`;
export const RewardsButton = styled.TouchableOpacity`
  width: 100px;
  border-radius: 4px;
  height: 40px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #6d2177;
  align-items: center;
  justify-content: center;
`;
export const RewardsButtonText = styled.Text`
  text-transform: uppercase;
  color: #6d2177;
  font-weight: bold;
`;

export const BoxBlur = styled.View`
  height: 50px;
  background: #eaeaea;
`;
