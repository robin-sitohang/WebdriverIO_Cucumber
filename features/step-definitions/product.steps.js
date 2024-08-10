const { Given, When, Then } = require('@wdio/cucumber-framework');
const product = require('../pageobjects/product.page');

// import product from '../pageobjects/product.page';

Given(/^User Go To Homepage$/, async () => {
    await product.navigateToEbay();
    await product.waitHomepageLoaded();

});

When(/^User navigate to "([^"]*)" in the category search$/, async (category) => {
    await product.clickShopByCategory();
    switch (category.toLowerCase()) {
        case 'electronics':
            await product.clickElectronics();
          break;
        default:
          throw new Error('category not exist');
      }
});

When(/^User click on cell phones smartphones in sidenav section$/, async () => {
    await product.clickCellPhoneAccesories();
    await product.clickCellPhoneSmartphones();
});

When(/^User Add Filter Screen Size, Price, Item Location$/, async () => {
    await product.clickAllfilters();
    await product.clickFilterPrize();
    await product.clickFilterLocation();
    await product.clickBuyingFormat();
  });

Then(/^User should see that the filter tags are applied$/, async () => {
    await product.clickApplyButton();
    await product.validateResultAfterApply();
  });

When(/^User type MacBook into the search bar$/, async () => {
    await product.inputKeyword();
  });

When(/^User change the search category to Iphone$/, async () => {
    await product.changeKeyword();
  });

Then(/^'I should see that the first result name matches Iphone$/, async () => {
    await product.validateKeyword();
  });
