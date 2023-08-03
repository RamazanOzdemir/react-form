import {Input} from "../model";
import {Component} from "./Component";

export class ImageInput extends Input {
  type = "file";

  render = () => <Component key={this.props.name} {...this.props} />;
}
