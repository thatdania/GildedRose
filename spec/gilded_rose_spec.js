describe("Gilded Rose", function() {


  beforeEach( function(){
    this.name = "food"
    this.sellIn = 4
    this.quality = 4
    gildedRose = new Shop([new Item(this.name, this.sellIn, this.quality)]);
  });

  describe("#notAgeBrie", function(){
    it("#notAgeBrie should minus 1 from the quality", function(){
      expect(gildedRose.notAgeBrie(0)).toEqual(true)
    });
  });

  

  // describe("#notBackstagePasses", function(){
  //   it("#notBackstagePasses should minus 1 from the quality", function(){
  //     gildedRose.notBackstagePasses(0);
  //     expect(gildedRose.items[0].quality).toEqual(3)
  //   });
  // });
  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
