import React from 'react'
import { inject, observer } from 'mobx-react'
import {
        Header,
        Footer,
        MainLoader,
        Notifier,
        Login } from '../components';

import classNames from 'classnames';

@inject('app')
@observer
class Restricted extends React.Component {

    getClassState = () => {
        const { loader } = this.props.app;

        return classNames({
            app: true,
            'content-container': true
        })
    }

    privateRoute = () => {
        const { userpass } = this.props.app;

        if (userpass) {
            return this.props.children;
        }

        return (<Login />);
    }


    render() {
        return (
          <content className={this.getClassState()}>
            <Header />
            <section className="app-view">
              { this.privateRoute() }
              <Notifier />
            </section>
            <Footer />
          </content>
        )
    }
}

export default Restricted
