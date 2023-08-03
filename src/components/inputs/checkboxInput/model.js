import {Input} from "../model";
import {Component} from "./Component";

export class Checkbox extends Input {
  type = "checkbox";

  render = () => <Component key={this.props.name} {...this.props} />;
}
