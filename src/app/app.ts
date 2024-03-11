import { LoginForm } from "./components/login/login";
// import { StartWindow } from "./components/gameDescription";
// import { GameBoard } from "./components/game";

export class App {
  private loginForm: LoginForm;
  // private startWindow: StartWindow;
  // private game: GameBoard;

  constructor(private root: HTMLElement) {
    this.loginForm = new LoginForm();
    // this.startWindow = new StartWindow();
    // this.game = new GameBoard();
  }

  start(): void {
    this.renderLoginForm();
  }

  private renderLoginForm() {
    this.root.innerHTML = "";
    this.root.appendChild(this.loginForm.render());
    // this.login.onLogin = () => this.renderStartWindow();
  }

  // private renderStartWindow() {
  //   this.root.innerHTML = "";
  //   this.root.appendChild(this.startWindow.render());
  //   this.startWindow.onStartGame = () => this.renderGameBoard();
  // }

  // private renderGameBoard() {
  //   this.root.innerHTML = "";
  //   this.root.appendChild(this.game.render());

  // }
}
