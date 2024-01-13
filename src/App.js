import Sidebar from './component/Sidebar';
import Home from './component/Home';
import News from './component/News';
import Crypto from './component/Crypto';
import StockItem from '/Users/stevenshi/cryptotrade/src/component/StockItem.js';

import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div>
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/News">
              <News />
            </Route>
            <Route exact path="/Crypto">
              <Crypto />

            </Route>

          </Switch>

        </div>

      </div>
    </Router>
  );
}





export default App;
