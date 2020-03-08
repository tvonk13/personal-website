import React, { Component } from "react";
import Button from "@material-ui/core/Button"

class About extends Component {
  render() {
    return (
        <div>
          <h1>ABOUT ME</h1>
          <div className="content">

              <Button variant="contained" color="primary">
                    Hello World
              </Button>

          </div>
        </div>
    );
  }
}

export default About;