import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import {App_80} from './App_80';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App_80 />
  </StrictMode>
);
