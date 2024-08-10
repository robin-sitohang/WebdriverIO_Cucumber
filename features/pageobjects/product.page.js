require('dotenv').config();

// Home Page
const buttonShopCategory = $('#gh-shop-a');
const categoryEltronics = $("//a[normalize-space()='Electronics']");
const categoryCellPhoneAccesories = $("//a[normalize-space()='Cell Phones, Smart Watches & Accessories']");
const categoryCellSmartPhones = $("//a[contains(text(),'Cell Phones & Smartphones')]");
const barSearch = $('//*[@id="gh-ac"]');
const buttonSearch = $('#gh-btn');
const resultSearch = $('//span[@role="heading" and @aria-level="3"]');


// Filters Page
const allFilters = $('//button[contains(text(),"All Filters")]');
const filterPrize = $('//*[@id="c3-mainPanel"]//div/span[@class="x-overlay-aspect__label" and text()="Price"]');
const minprize = $('//*[@id="c3-subPanel-_x-price-textrange"]/div/div[1]/div/input');
const maxPrize = $('//*[@id="c3-subPanel-_x-price-textrange"]/div/div[2]/div/input');
const filterItemLocation = $("//span[normalize-space()='Item Location']");
const usOnlyLocation = $("//input[@value='US Only']");
const filterBuyingFormat = $('div[data-aspecttitle="format"]');
const bestOffer = $("//input[@value='Best Offer']");
const buttonAply = $("//button[normalize-space()='Apply']");
const count = $('//*[@id="innerlayer"]/button/span[1]');
const titleResultApply = $('h1.b-pageheader span.b-pageheader__text');

class EbayPage {
    constructor() {
        this.navigateToEbay = async () => {
          await browser.url(process.env.BASE_URL);
        };

        this.waitHomepageLoaded = async () => {
            browser.pause(3000);
            await buttonShopCategory.waitForExist({ timeout: 50000 });
            if (await buttonShopCategory.isExisting()) {
                await browser.maximizeWindow();
            }
          };
        
        this.clickShopByCategory = async () => {
            await buttonShopCategory.waitForExist();
            await buttonShopCategory.click();
        };

        this.clickElectronics = async () => {
            await categoryEltronics.waitForExist();
            await categoryEltronics.click();
        };
        
        this.clickCellPhoneAccesories = async () => {
            await categoryCellPhoneAccesories.waitForExist();
            await categoryCellPhoneAccesories.click();
          };

        this.clickCellPhoneSmartphones = async () => {
            await categoryCellSmartPhones.waitForExist();
            await categoryCellSmartPhones.click();
          };
        
        this.clickAllfilters = async () => {
            await allFilters.scrollIntoView({ behavior: 'smooth', block: 'start' });
            await allFilters.click();
            await browser.pause(3000);
          };
      
        this.clickFilterPrize = async () => {
            await filterPrize.waitForExist({ timeout: 50000 });
            await filterPrize.scrollIntoView({ behavior: 'smooth', block: 'start' });
            await filterPrize.click();
            await minprize.setValue('5000000');
            await maxPrize.setValue('10000000');
            await browser.pause(2000);
          };
      
        this.clickFilterLocation = async () => {
            await filterItemLocation.scrollIntoView({ behavior: 'smooth', block: 'start' });
            await filterItemLocation.click();
            await usOnlyLocation.click();
            await browser.pause(2000);
          };
      
        this.clickBuyingFormat = async () => {
            await filterBuyingFormat.scrollIntoView({ behavior: 'smooth', block: 'start' });
            await filterBuyingFormat.click();
            await bestOffer.click()
            await browser.pause(2000);
          };

        this.clickApplyButton= async () => {
            await buttonAply.waitForExist();
            await expect(count).toHaveTextContaining('(3) Filter(s) selected');
            await buttonAply.click();
            await browser.pause(2000);
          };

        this.validateResultAfterApply = async () => {
            await titleResultApply.waitForExist();
            await titleResultApply.isDisplayed();
          };

        this.inputKeyword = async () => {
            await barSearch.waitForExist({ timeout: 20000 });
            await barSearch.setValue('MackBook');
            await buttonSearch.click();
          };
      
        this.changeKeyword = async () => {
            await barSearch.setValue('Iphone');
            await buttonSearch.click();
          };
      
        this.validateKeyword= async () => {
            await resultSearch.waitForExist({ timeout: 50000 });
            await expect(resultSearch).toHaveText('iphone se 2022 new 128GB black');
          };
    }
}

module.exports = new EbayPage();
