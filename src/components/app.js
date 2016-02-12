/**
 * Created by vladimir on 12/02/16.
 */
import React from 'react';
import Mainheader from './main_header';
import Page from './page';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Mainheader/>
                <Page>
                    <h1>Page title</h1>
                </Page>
            </div>
    );
    }
}
export default App;