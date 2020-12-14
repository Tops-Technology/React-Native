import React, { Component } from "react";
import shortid from "shortid";

import NullComponent from './github_components/NullEvent';
import "./App.css";

class GitHubEventApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: []
    };
  }

  addComponent = async event => {
    const { type } = event;

    console.log(`Loading ${type} component...`);

    import(`./github_components/${type}.js`)
      .then(Component =>
        this.setState({
          components: this.state.components.concat(
            <Component.default key={shortid.generate()} {...event} />
          )
        })
      )
      .catch(error => {
        // Add an empty component for loading message
        this.setState({
          components: this.state.components.concat(
            <NullComponent key={shortid.generate()} />
          )
        })
        console.error(`"${type}" not yet supported`);
      });
  };

  async componentDidMount() {
    const { events } = this.props;
    events.map(async event => await this.addComponent(event));
  }

  render() {
    const { components } = this.state;
    const { events } = this.props;
    if (components.length !== events.length) return <div>Loading...</div>;

    components.sort((c1, c2) => c2.props.id - c1.props.id);
    return <div className="App">{components}</div>;
  }
}

export default GitHubEventApp;
