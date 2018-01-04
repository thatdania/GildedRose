describe("Gilded Rose", function() {


  beforeEach( function(){
    this.name = "food"
    this.sellIn = 4
    this.quality = 4
    gildedRose = new Shop([new Item(this.name, this.sellIn, this.quality)]);
  });

  describe("#agedBrie", function(){
    it("#agedBrie executes the product's requirements listed", function(){
      gildedRose.items[0].name = "Aged Brie"
      gildedRose.agedBrie(0)
      expect(gildedRose.items[0].quality).toEqual(5)
    });
  });

  describe("#backstagePassesChecker", function(){
    it("#backstagePassesChecker executes the product's requirements listed", function(){
      gildedRose.items[0].name = "Backstage passes to a TAFKAL80ETC concert"
      gildedRose.backstagePassesChecker(0)
      expect(gildedRose.items[0].quality).toEqual(7)
    });
  });

  describe("#sulfurasChecker", function(){
    it("#sulfurasChecker executes the product's requirements listed", function(){
      gildedRose.items[0].name = "Sulfuras, Hand of Ragnaros"
      gildedRose.sulfurasChecker(0)
      expect(gildedRose.items[0].quality).toEqual(4)
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

  describe("#expiryRate", function(){
    it("#expiryRate should decrease the quality by 2, after once", function(){
      gildedRose.items[0].sellIn = -1
      gildedRose.items[0].quality = 6
      gildedRose.expiryRate(0)
      expect(gildedRose.items[0].quality).toEqual(4)
    });
  });

  describe("#qualityChecker", function(){
    it("#qualityChecker should return true based on the condition", function(){
      expect(gildedRose.qualityChecker(0)).toEqual(true)
    });
  });



  // it("should foo", function() {
  //   const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toEqual("fixme");
  // });

});
