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

  // describe("#notBackstagePasses", function(){
  //   it("#notBackstagePasses should return true based on the condition", function(){
  //     expect(gildedRose.notBackstagePasses(0)).toEqual(true)
  //   });
  // });

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
    it("#sellInChecker should add three to quality if SellIn is less than 6", function(){
      gildedRose.sellInChecker(0)
      expect(gildedRose.items[0].quality).toEqual(7)
    });

    it("#sellInChecker should add three to quality if SellIn is less than 11", function(){
      gildedRose.items[0].quality = 10
      gildedRose.sellInChecker(0)
      expect(gildedRose.items[0].quality).toEqual(13)
    });
  });

  describe("#expiredSellIn", function(){
    it("#expiredSellIn puts the quality value to zero", function(){
      gildedRose.items[0].sellIn = -1
      gildedRose.expiredSellIn(0)
      expect(gildedRose.items[0].quality).toEqual(0)
    });
  });

  describe("#backstagePassesChecker", function(){
    it("#backstagePassesChecker executes the product's requirements listed", function(){
      gildedRose.items[0].name = "Backstage passes to a TAFKAL80ETC concert"
      gildedRose.backstagePassesChecker(0)
      expect(gildedRose.items[0].quality).toEqual(7)
    });
  });

  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
