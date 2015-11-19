browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage');
	

var PnHomePage = function() {
	this.url = 'http://pn.com.ua';
	this.pageLoaded = this.inDom($('h2.ng-binding'));
	
	this.category = element(by.xpath("(//a[@class='main_page_link_catalog'])[1]"));
	this.subCategory = element(by.xpath("//a[@href='http://pn.com.ua/ct/1022/']"));
	this.searchField = element(by.xpath("//input[@id='edit-name-1']"));
	this.searchButton = element(by.xpath("//input[@id='edit-submit-1']"));

	 this.clickOnCategory = function() {
		this.category.click()
    };
	
	this.clickOnSubCategory = function() {
		this.subCategory.click()
    };
	
	this.searchByGoodsName = function(text) {
		this.searchField.sendKeys(text);
		 this.searchButton.click();
    };	
};

PnHomePage.prototype = basePage; // extend basePage...
module.exports = new PnHomePage();