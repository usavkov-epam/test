import styles from "./login.module.scss";
import { InputType } from "../../enums/enums.module";
import { div, form, input, button, h1, label} from "../tags";

export class LoginForm {
  render() {
    const loginForm = form(
      { className: styles.form },
      div({className: styles.form_part,},
        label({className: styles.label, for: "name"}, 'Name'),
        input({ type: InputType.Text,
        className: styles.input,
        id: "input1",
        placeholder: "Enter your name",
      }),
      ),
      div({className: styles.form_part,},
        label({className: styles.label, for: "name"}, 'Surname'),
        input({ type: InputType.Text,
        className: styles.input,
        id: "input2",
        placeholder: "Enter your surname",
     }),),
      button({
        className: styles.button,
        type: InputType.Submit,
      }, 'Log in')
    );

    const wrapper = div({ className: styles.wrapper }, loginForm);

    return wrapper;
  }
}
