import styled from 'styled-components';
import LocationDetails from './LocationDetails';
import { useGetLocations } from '../hooks/api/getLocations';
import { TLocation } from '../global/types';

const Container = styled.div`
  min-width: 306px;
  height: 100vh;
  box-shadow: ${({ theme: { shadows } }) => shadows.rightShadow};
`;

const MapTab = () => {
  const { data, isPending } = useGetLocations();
  return (
    <Container>
      {!isPending &&
        data?.locations.length &&
        data?.locations?.map((location: TLocation, index: number) => {
          return <LocationDetails key={index} location={location} index={++index} />;
        })}
    </Container>
  );
};

export default MapTab;
