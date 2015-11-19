browser.ignoreSynchronization = true;
var basePage = require('../pages/basePage');
var util = require('util');	


var PnGoodsPage = function() {
	this.url = '/ct/1022';
	this.pageLoaded = this.inDom($('a'));
	this.allGoodsLocator = by.xpath("//div[@class='name']/a");
	this.totalCount = by.xpath("//div[@class='total']/b");
	this.priceSort = by.xpath("//div[@class='order']/a[1]");
	
	 this.setMinFilter = function(value) {
		 element.all(by.linkText(value)).get(0).click();
    };
	
	 this.setMaxFilter = function(value) {
		 element.all(by.linkText(value)).get(1).click();
    };

	this.checkPrices = function (minPrice, maxPrice) {
		var results = element.all(by.xpath('//strong'));
            for (var i = 0; i <= results.length-1; i++) {
                    var cost = results.get(i).getText().replace(" ", "").replace("грн", "");
                    assert(cost <= maxPrice && cost >= minPrice);
                }
        };
		
	this.selectManufacturer = function(manufacturer) {
		 element(by.linkText(manufacturer)).click();
    };
	
	this.sortByPrice = function() {
		 element(this.priceSort).click();
    };
		
	this.checkManufacturer = function (manufacturer) {
		var allGoods = element.all(this.allGoodsLocator);
            for (var i = 0; i <= allGoods.length-1; i++) {
                    assert(allGoods.get(i).getText().contains(manufacturer));
                }
        };
		
	this.getGoodsNameByIndex = function (index) {
		var allGoods = element.all(this.allGoodsLocator);
		return allGoods.get(index).getText();
	}
	
	this.getTotalCount = function () {
		return element(this.totalCount).getText();
	}
	
	this.getMarkCount = function (mark) {
		var markCountElement = element(by.xpath(util.format("//a[text()='%s']/following-sibling::i", mark)));
		var markCount = markCountElement.getText();
	return markCount;
	}
		
};

PnGoodsPage.prototype = basePage;
module.exports = new PnGoodsPage();