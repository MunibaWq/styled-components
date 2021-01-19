import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 25rem;
`;

const Section = styled.section`
  padding: 2rem;
  margin: 2rem;
`;

const App = () => {
  return (
    <div>
      <Section>
        <Title>My Styled Title</Title>
      </Section>
    </div>
  );
};

export default App;
