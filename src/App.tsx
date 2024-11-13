import './App.css';

import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MapComponent from './components/MapOverview';
import Theme from './Theme';
const queryClient = new QueryClient();
export function App() {
  const FlexContainer = styled.div`
    display: flex;
  `;

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <FlexContainer>
          <Sidebar />
          <MapComponent />
        </FlexContainer>
      </Theme>
    </QueryClientProvider>
  );
}
