import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./styled/styled";
import {styled} from 'styled-components';

const StyledSection = styled.section`
  ${flexMixin("center", "center", "wrap", "20px")}
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
