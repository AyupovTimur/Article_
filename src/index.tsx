import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/lib/config/i18n/i18n';
import createRoot from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

createRoot.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
)