import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {lighten} from 'polished';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 10px 0;
`;

export const TabItem = styled(RectButton)`
  width: 90px;
  height: 100px;
  background-color: ${lighten(0.1, '#6d2177')};
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const TabText = styled.Text`
  color: #ffffff;
  font-size: 13px;
`;
