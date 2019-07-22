import styled from '@emotion/styled';
import Color from '../../Color';

export const Container = styled.div`
  
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  width: 50%;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const InputLabel = styled.label`
  margin: 0;
`;

export const InputText = styled.input`
  margin: 0;
  width: 50px;
  padding: 0 .2em;
  border: none;
  border-bottom: 1px solid ${Color.grey};

  &:hover {
    border-bottom: 2px solid ${Color.ecoGreenHover};
  }

  &:focus {
    border-bottom: 2px solid ${Color.ecoGreenHover};
  }
`;

export const InputTextArea = styled.textarea`
  margin: 0;
  margin-bottom: 1em;
  width: 100%;
  padding: 0 .2em;
  border: none;
  border: 1px solid ${Color.grey};

  &:hover {
    border-bottom: 2px solid ${Color.ecoGreenHover};
  }

  &:focus {
    border-bottom: 2px solid ${Color.ecoGreenHover};
  }
`;