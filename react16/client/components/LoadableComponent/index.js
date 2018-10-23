import React from 'react';


const AsyncComp = (component) => {
    return class LoadableComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { Component: null };
        }

        componentDidMount() {
            component().then(Component => {
                this.setState({ Component: Component.default });
            }).catch(err => {
                console.log('>>>>>>>err is', err);
            });
        }

        render () {
            const { Component } = this.state;

            if (Component) {
                return <Component />
            }
            return (<span>Loading...</span>);
        }
    }
}


export default AsyncComp;