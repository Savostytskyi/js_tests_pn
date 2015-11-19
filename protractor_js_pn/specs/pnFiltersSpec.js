/**
 * Test for pn.com filters.
 */
var pnHomePage = require('../pages/pnHomePage');
var pnGoodsPage = require('../pages/pnGoodsPage');
var minPrice="6000";
var maxPrice="8000";
var manufacturer="ViewSonic";
var goodsName;

describe('Pn.com filters testing', function() {
	beforeEach(function() {
		pnHomePage.to();
	});
	
	it('should return prices appropriate to filter by price', function() {
		pnHomePage.clickOnCategory();
		pnHomePage.clickOnSubCategory();
		pnGoodsPage.setMinFilter(minPrice);
		pnGoodsPage.setMaxFilter(maxPrice);
		pnGoodsPage.checkPrices(minPrice, maxPrice)
	}); 
	
	it('should return goods appropriate to manufacturer', function() {
		pnHomePage.clickOnCategory();
		pnHomePage.clickOnSubCategory();
		var makeCount = pnGoodsPage.getMarkCount(manufacturer);
		pnGoodsPage.selectManufacturer(manufacturer);
		pnGoodsPage.checkManufacturer(this.manufacturer);
		var r = pnGoodsPage.getTotalCount();
		expect(makeCount).toContain(pnGoodsPage.getTotalCount());
	}); 
	
	it('it should contain correct search results', function() {
		pnHomePage.clickOnCategory();
		pnHomePage.clickOnSubCategory();
		pnGoodsPage.selectManufacturer(manufacturer);
		pnGoodsPage.sortByPrice();
		this.goodsName = pnGoodsPage.getGoodsNameByIndex(0);
		pnHomePage.searchByGoodsName(this.goodsName);
		expect(pnGoodsPage.getTotalCount()).toBe("1");
		expect(pnGoodsPage.getGoodsNameByIndex(0)).toBe(this.goodsName);
	});
});