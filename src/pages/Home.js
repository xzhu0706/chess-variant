import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const descriptionList = [
      { description: 'Design your own variants', key: 0 },
      { description: 'Test your variant against others', key: 1 },
      { description: 'Play variants created from other players', key: 2 },
    ];

    return (
      <div>
        <div>
          <a href="/">Chess-Variant.com</a>
        </div>
        <div>
          <h1>Welcome to Chess-Variants</h1>
          <ul>
            {descriptionList.map(description => {
              return (<li key={description.key}>{description.description}</li>);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
