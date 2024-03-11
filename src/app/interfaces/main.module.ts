import { FormAttributes, InputAttributes } from "./input.module";

export interface ElementProps<T extends keyof HTMLElementTagNameMap>
  extends Partial<FormAttributes>,
    Partial<InputAttributes> {
  tag?: T;
  txt?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  src?: string;
  alt?: string;
  href?: string;
  value?: string;
  onClick?: () => void;
  children?: Child[];
  autoFocus?: boolean; // Автофокус на кнопке при загрузке страницы
  // form?: string; // Идентификатор формы, к которой относится кнопка
  // formAction?: string; // URL-адрес, на который отправляются данные формы
  // formMethod?: string; // Метод отправки данных формы
  // formNoValidate?: boolean; // Отключает встроенную в браузер проверку валидности формы
  // formTarget?: string; // Имя или ключевое слово, которое определяет, где отображать результаты отправки формы
}

export type Child = HTMLElement | string;
