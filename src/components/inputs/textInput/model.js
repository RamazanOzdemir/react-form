import {Input} from "../model";
import {Component} from "./Component";

export class TextInput extends Input {
  type = "text";

  render = () => <Component key={this.props.name} {...this.props} />;
}
