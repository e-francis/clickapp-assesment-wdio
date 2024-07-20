export default class HomePage {
  private readonly elements = {
    homePageLogo: () => $(".app_logo"),
    homePage: () => $(".title"),
    addItemToCartButton: () =>
      $('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
    shoppingCartButton: () => $('[data-test="shopping-cart-link"]'),
    shoppingCart: () => $(".title"),
    inventoryItem: () => $('[data-test="inventory-item-name"]'),
    inventoryItemPrice: () => $('[data-test="inventory-item-price"]'),
    checkOutButton: () => $('[data-test="checkout"]'),
  };

  async addItemTocart() {
    await expect(this.elements.homePageLogo()).toHaveText("Swag Labs");
    await expect(this.elements.homePage()).toHaveText("Products");
    await this.elements.addItemToCartButton().click();
    await this.elements.shoppingCartButton().click();
  }

  async viewItemsInCart() {
    await expect(this.elements.shoppingCart()).toHaveText("Your Cart");
    await expect(this.elements.inventoryItem()).toHaveText(
      "Sauce Labs Fleece Jacket"
    );
    await expect(this.elements.inventoryItemPrice()).toHaveText("$49.99");
    await expect(this.elements.checkOutButton()).toExist();
    await this.elements.checkOutButton().click();
  }
}
