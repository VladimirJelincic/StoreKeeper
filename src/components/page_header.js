/**
 * Created by vladimir on 12/02/16.
 */
import React from 'react';
class PageHeader extends React.Component {
    render() {
        return (
            <header className='page-header'>
                {this.props.children}
            </header>
        );
    }
}
export default PageHeader;