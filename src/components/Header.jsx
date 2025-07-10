import { flexMixin, fontMixin } from "../styled/styled";
import {styled} from 'styled-components';

const StyledHeader = styled.header`
  ${flexMixin("space-between", "center")}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin("space-between", "center", "20px")}
    li {
      ${fontMixin("16px", 400)}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}
