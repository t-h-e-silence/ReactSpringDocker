import React, {Component} from 'react';

class FooterComponent extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
          <div>
              <footer className= "footer">
                  <span className="text-muted"> All rights reserved 2021</span>
              </footer>
          </div>
        )
    }

}
export default FooterComponent;