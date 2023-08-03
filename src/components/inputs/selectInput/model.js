import {Input} from "../model";
import {Component} from "./Component";

export class SelectInput extends Input {
  type = "select";

  render = () => <Component key={this.props.name} {...this.props} />;
}
