import BasePage from "./base.page.ts";

export default class LoginPage extends BasePage {
  open() {
    return super.open("");
  }
  private readonly elements = {
    loginLogo: () => $(".login_logo"),
    emailAddressField: () => $('[data-test="username"]'),
    passwordField: () => $('[data-test="password"]'),
    loginButton: () => $('[data-test="login-button"]'),
    homePage: () => $(".title"),
  };

  async fillLoginForm(emailAddress: string, password: string) {
    await expect(this.elements.loginLogo()).toHaveText("Swag Labs");
    await this.elements.emailAddressField().setValue(emailAddress);
    await this.elements.passwordField().setValue(password);
    await this.elements.loginButton().click();
    await expect(this.elements.homePage()).toHaveText("Products");
  }
}
