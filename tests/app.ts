import { singleton } from "tsyringe";
import LoginPage from "./pageObjects/login.page.ts";
import HomePage from "./pageObjects/home.page.ts";
import CheckOutPage from "./pageObjects/checkout.page.ts";

@singleton()
export default class App {
  login?: LoginPage;
  homePage?: HomePage;
  checkOutPage?: CheckOutPage;

  constructor(
    login?: LoginPage,
    homePage?: HomePage,
    checkOutPage?: CheckOutPage
  ) {
    this.login = login;
    this.homePage = homePage;
    this.checkOutPage = checkOutPage;
  }
}
