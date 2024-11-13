import styled from 'styled-components';
import MarkerAnnotation from '/icons/MarkerAnnotation.svg';
import { TLocationProps } from '../global/types';

const Container = styled.div`
  border-bottom: ${({ theme: { borders } }) => borders.borderBottom};
`;
const LocationContainer = styled.div`
  padding: 10px 0px;
  margin-left: 30px;
`;

const LocationWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LocationText = styled.p`
  margin: 0;
  margin-left: 20px;
  color: ${({ theme: { colors } }) => colors.secondary};
`;

const Label = styled.div`
  min-width: 36px;
  font-size: 13px;
  line-height: 17.71px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bolder};
  color: ${({ theme: { colors } }) => colors.secondary};
`;

const StyledInput = styled.input`
  padding: 5px 10px;
  margin: 8px 23px;
  display: inline-block;
  border: 0.5px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 140px;
  height: 33px;
  radius: 5px;
  color: ${({ theme: { colors } }) => colors.primary};
  outline: none;
  font-size: 15px;
  font-weight: 550;
  line-height: 21.09px;
  text-align: left;
`;

const LocationDetails = ({ location, index }: TLocationProps) => {
  return (
    <Container>
      <LocationContainer>
        <LocationWrapper>
          <img src={MarkerAnnotation} alt="mark-down" width={'12.99px'} height={'17px'} />
          <LocationText>Location {index}</LocationText>
        </LocationWrapper>
        <FlexWrapper>
          <Label>Lat</Label>
          <StyledInput type="number" step="any" value={location[0]} readOnly />
        </FlexWrapper>
        <FlexWrapper>
          <Label>Long</Label>
          <StyledInput type="number" step="any" value={location[1]} readOnly />
        </FlexWrapper>
      </LocationContainer>
    </Container>
  );
};

export default LocationDetails;
