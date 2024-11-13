import { styled } from 'styled-components';
const Container = styled.div`
  min-width: 306px;
  height: 100vh;
  box-shadow: ${({ theme: { shadows } }) => shadows.rightShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrameTab = () => {
  return <Container>Measurement</Container>;
};

export default FrameTab;