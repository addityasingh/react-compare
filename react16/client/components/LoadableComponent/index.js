import React from 'react';
// import Loadable from 'react-loadable';

class LoadableComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = { Component: null };
  }

  componentWillMount() {
      const { componentPath } = this.props;
      
      if (componentPath) {
          import(componentPath).then(Component => {
              this.setState({ Component: Component.default });
          }).catch(err => {
              console.log('>>>>>>>err is', err);
          });
      }
  }

  render () {
      const { Component } = this.state;

      if (Component) {
        return <Component />
      }
      return (<span>Loading...</span>);
  }
}

// const LoadableComponent = (componentPath) => Loadable({
//   loader: () => import(componentPath),
//   loading: () => (
//       <React.Fragment>Loading...</React.Fragment>
//   )
// });

export default LoadableComponent;