describe("Gilded Rose", function() {


  beforeEach( function(){
    item = new Item("food",4,4);
    gildedRose = new Shop([item]);
  });

  describe("#notAgeBrie", function(){
    it("#notAgeBrie should minus 1 from the quality", function(){
      gildedRose.notAgeBrie(4);
      expect(gildedRose[0].quality).toEqual("3")
    });
  });
  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
