import styled, { css } from "styled-components";
import CaretDown from "assets/icons/caret_down.svg";
import CareDown2 from "assets/icons/caretDown2.svg";
const typeVariants = {
  form: css`
    background-image: url(${CareDown2});
  `,
};

const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 15px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};
  ${({ type }) => typeVariants[type]};
  ::-ms-expand {
    display: none;
  }
`;

export default StyledSelect;
