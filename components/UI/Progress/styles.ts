import styled from 'styled-components';
import { LinearProgress } from '@mui/material';

interface IStyledProgress {
  maxwidthprogress?: number
}

export const StyledProgress = styled(LinearProgress)<IStyledProgress>`
  background-color: rgba(242, 80, 62, 0.1);
  height: 10px;
  border-radius: 4px;
  margin: 16px 0;
  width: 100%;
  max-width: ${({ maxwidthprogress }) => maxwidthprogress || 458}px;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 60%;
  }

  @media (max-width: 640px) {
    max-width: 100%;
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: #FB7373;
  }
`;
