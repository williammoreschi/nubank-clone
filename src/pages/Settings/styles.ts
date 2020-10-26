import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {lighten} from 'polished';

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
  align-items: center;
  justify-content: center;
`;
export const HeaderIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${lighten(0.1, '#6d2177')};
  align-items: center;
  justify-content: center;
`;

export const Code = styled.View`
  padding: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const Account = styled.View`
  margin-top: 20px;
`;
export const AccountText = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

export const Nav = styled.View`
  border-top-color: rgba(255, 255, 255, 0.8);
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavDescription = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
