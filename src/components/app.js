/**
 * Created by vladimir on 12/02/16.
 */
import React from 'react';
import Mainheader from './main_header';
import Page from './page';
import Orders from './orders';
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Mainheader/>
                <Page>
                    <Orders/>
                </Page>
            </div>
    );
    }
}
export default App;