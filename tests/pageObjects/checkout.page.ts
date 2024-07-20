export default class CheckOutPage {
  private readonly elements = {
    checkOutPage: () => $(".title"),
    firstNameField: () => $('[data-test="firstName"]'),
    lastNameField: () => $('[data-test="lastName"]'),
    zipAndPostalCodeField: () => $('[data-test="postalCode"]'),
    continueButton: () => $('[data-test="continue"]'),
    finishButton: () => $('[data-test="finish"]'),
    successMessage: () => $('[data-test="complete-header"]'),
    backToHomeButton: () => $('[data-test="back-to-products"]'),
    hamBurgerMenuButton: () => $("#react-burger-menu-btn"),
    logOutButton: () => $('[data-test="logout-sidebar-link"]'),
  };

  async checkOutItemFromCart(
    firstName: string,
    lastName: string,
    postalCode: number
  ) {
    await expect(this.elements.checkOutPage()).toHaveText(
      "Checkout: Your Information"
    );
    await this.elements.firstNameField().setValue(firstName);
    await this.elements.lastNameField().setValue(lastName);
    await this.elements.zipAndPostalCodeField().setValue(postalCode);
    await this.elements.continueButton().click();
    await expect(this.elements.checkOutPage()).toHaveText("Checkout: Overview");
    await this.elements.finishButton().click();
    await expect(this.elements.checkOutPage()).toHaveText(
      "Checkout: Complete!"
    );
    await expect(this.elements.successMessage()).toHaveText(
      "Thank you for your order!"
    );
    await browser.pause(500);
    await this.elements.backToHomeButton().click();
    await browser.pause(500);
  }

  async logOut() {
    await this.elements.hamBurgerMenuButton().click();
    await browser.pause(500);
    await expect(this.elements.logOutButton()).toBeExisting();
    await browser.pause(500);
    await this.elements.logOutButton().click();
    await browser.pause(500);
  }
}
