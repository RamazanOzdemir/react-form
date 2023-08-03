import {Input} from "../model";
import {Component} from "./Component";

export class DateInput extends Input {
  type = "date";

  render = () => <Component key={this.props.name} {...this.props} />;
}
