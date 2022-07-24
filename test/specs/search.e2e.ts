describe("Ebay Product Search", () => {
    it("should open the main url and verify the tittle", () => {
        browser.url("https://co.ebay.com/");
        expect(browser).toHaveTitle('Artículos electrónicos, autos, ropa, objetos de colección, cupones y más | eBay');
    });

    it("should serach for a product and verify the search text value", async () => {
        const searchInput =  await browser.$('#gh-ac');
        const serachBtn = await  browser.$('#gh-btn');
        
        searchInput.addValue("laptop");
        serachBtn.click();
        await expect(searchInput).toHaveValue("laptop");
    });

    it("should redirect to a new page and verify the title ", async () => {
        await expect(browser).toHaveTitle("laptop: Search Result | eBay");
    });

    it("should supdate the search category", async () => {
        const category = await $('#gh-cat option:nth-child(1)');
        await expect(category).toHaveText("Computadoras portátiles o laptops y netbooks");
    });

});
