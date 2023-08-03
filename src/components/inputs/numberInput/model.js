import {Input} from "../model";
import {Component} from "./Component";

export class NumberInput extends Input {
  type = "number";

  render = () => <Component key={this.props.name} {...this.props} />;
}
