import styled from 'styled-components';
import { TIconProps } from '../global/types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const Image = styled.img`
  height: 17px, width=15.94px;
`;

const Icon = ({ icon, alt }: TIconProps) => {
  return (
    <Container>
      <Image src={icon} alt={alt} />
    </Container>
  );
};
export default Icon;
