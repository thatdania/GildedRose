describe("Gilded Rose", function() {


  beforeEach( function(){
    this.name = "food"
    this.sellIn = 4
    this.quality = 4
    gildedRose = new Shop([new Item(this.name, this.sellIn, this.quality)]);
  });

  describe("#notAgeBrie", function(){
    it("#notAgeBrie should return true based on the condition", function(){
      expect(gildedRose.notAgeBrie(0)).toEqual(true)
    });
  });

  describe("#notBackstagePasses", function(){
    it("#notBackstagePasses should return true based on the condition", function(){
      expect(gildedRose.notBackstagePasses(0)).toEqual(true)
    });
  });

  describe("#notSulfuras", function(){
    it("#notSulfuras should return true based on the condition", function(){
      expect(gildedRose.notSulfuras(0)).toEqual(true)
    });
  });

  describe("#qualityExist", function(){
    it("#qualityExist should reutrn true base on condition", function(){
      expect(gildedRose.qualityExist(0)).toEqual(true)
    });
  });

  describe("#qualityLessThan50", function(){
    it("#qualityLessThan50 should reutrn true base on condition", function(){
      expect(gildedRose.qualityLessThan50(0)).toEqual(true)
    });
  });


  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
