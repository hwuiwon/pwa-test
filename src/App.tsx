import {Route, Switch} from 'wouter';
import {About} from './routes/about/About';
import {CssVarsProvider} from '@mui/joy/styles';
import {theme} from './theme';

export const App = () => (
  <CssVarsProvider defaultMode="system" theme={theme}>
    <Switch>
      <Route path="/" component={About} />
      <Route>404: No such page!</Route>
    </Switch>
  </CssVarsProvider>
);
