describe("Gilded Rose", function() {


  beforeEach( function(){
    this.name = "food"
    this.sellIn = 4
    this.quality = 4
    gildedRose = new Shop([new Item(this.name, this.sellIn, this.quality)]);
  });

  describe("#agedBrieChecker", function(){
    it("#agedBrie executes the product's requirements listed", function(){
      gildedRose.items[0].name = "Aged Brie"
      gildedRose.agedBrieChecker(0)
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

  describe("#expiryRateChecker", function(){
    it("#expiry Rate checker should check sellIn and quality", function(){
      gildedRose.items[0].sellIn = -1
      gildedRose.items[0].quality = 1
      gildedRose.expiryRateChecker(0)
      expect(gildedRose.items[0].quality).toEqual(0)
    });
  });

  describe("#qualityChecker", function(){
    it("#qualityChecker should return true based on the condition", function(){
      expect(gildedRose.qualityChecker(0)).toEqual(true)
    });
  });

});
