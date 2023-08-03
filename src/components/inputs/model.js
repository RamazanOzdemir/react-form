export class Input {
  type = "";
  props = {};
  constructor(name, label = null, options = {}) {
    this.props.name = name;
    this.props.label = label;

    Object.assign(this.props, options);
  }

  render = () => null;
}
