import styled from 'styled-components';
import {Key} from '@styled-icons/boxicons-solid/Key';
import {Email} from '@styled-icons/material/Email';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #aae8b0;
`;

export const RegFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.h1`
  color: white;
  font-weight: bold;
`;

export const RegFormTitle = styled.h2`
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const FormButton = styled.button`
  margin-top: 17px;
  padding: 10px 38px;
  background-color: black;
  border: 2px solid black;
  transition: background-color cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
  color: white;
`;
export const EmailIcon = styled(Email)`
  color: grey;
  width: 20px;
  position: absolute;
  top: 25px;
  left: 5px;
`;

export const KeyIcon = styled(Key)`
  color: grey;
  width: 20px;
  position: absolute;
  top: 25px;
  left: 5px;
`;