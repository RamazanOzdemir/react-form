import {Input} from "../model";
import {Component} from "./Component";

export class TextareaInput extends Input {
  type = "textarea";

  render = () => <Component key={this.props.name} {...this.props} />;
}
