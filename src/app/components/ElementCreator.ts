import { ElementProps, Child } from "../interfaces/main.module";

export class ElementCreator<T extends keyof HTMLElementTagNameMap> {
  constructor(
    private props: ElementProps<T>,
    private children: Child[] = [],
  ) {}

  create(): HTMLElement {
    const { tag = "div", ...rest } = this.props;
    const element = document.createElement(tag);

    Object.assign(element, rest);

    if (this.children) {
      for (const child of this.children) {
        if (child instanceof HTMLElement) {
          element.appendChild(child);
        } else if (typeof child === "string") {
          element.appendChild(document.createTextNode(child));
        }
      }
    }

    return element;
  }
}
