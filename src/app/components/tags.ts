import { ElementCreator } from "./ElementCreator";
import { ElementProps, Child } from "app/interfaces/main.module";

export function createTagFn<T extends keyof HTMLElementTagNameMap>(
  tag: T,
): (props: ElementProps<T>, ...children: Child[]) => HTMLElement {
  return (props: ElementProps<T>, ...children: Child[]) => {
    const element = new ElementCreator<T>({ ...props, tag }, children).create();
    return element;
  };
}

export const div = createTagFn("div");
export const a = createTagFn("a");
export const h1 = createTagFn("h1");
export const h2 = createTagFn("h2");
export const img = createTagFn("img");
export const input = createTagFn("input");
export const form = createTagFn("form");
export const label = createTagFn("label");
export const button = createTagFn("button");

