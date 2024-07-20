import App from "../app.ts";
import { container } from "tsyringe";

describe("Cl:ck App Assessment Test Suite", () => {
  let app: App;

  beforeEach(async () => {
    app = container.resolve(App);
    await app.login?.open();
  });
  it("Verify A User Can Check Out An Item from Cart Successfully  ", async () => {
    await app.login?.fillLoginForm("standard_user", "secret_sauce");
    await app.homePage?.addItemTocart();
    await app.homePage?.viewItemsInCart();
    await app.checkOutPage?.checkOutItemFromCart("Emmanuel", "Francis", 10145);
    await app.checkOutPage?.logOut();
  });
});
