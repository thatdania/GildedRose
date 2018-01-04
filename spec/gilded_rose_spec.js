describe("Gilded Rose", function() {


  beforeEach( function(){
    this.name = "food"
    this.sellIn = 8
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

  describe("#qualityChecker", function(){
    it("#qualityChecker should return true based on the condition", function(){
      expect(gildedRose.qualityChecker(0)).toEqual(true)
    });
  });

  describe("#sellInChecker", function(){
    it("#sellInChecker should check the results if its less than 11 or than 6", function(){
      expect(gildedRose.sellInChecker(0)).toEqual(true)
    });
  });

  // describe("#sellInDoesNotexist", function(){
  //   it("#sellInDoesNotexist should return if its more than 0 and less than 50", function(){
  //     expect(gildedRose.sellInDoesNotexist(0)).toEqual(false)
  //   });
  // });
  //
  // describe("#sellInchecker6", function(){
  //   it("#sellInchecker6 should reutrn true base on condition", function(){
  //     expect(gildedRose.sellInchecker6(0)).toEqual(true)
  //   });
  // });
  //
  // describe("#sellInchecker11", function(){
  //   it("#sellInchecker11 should reutrn true base on condition", function(){
  //     expect(gildedRose.sellInchecker11(0)).toEqual(true)
  //   });
  // });


  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
