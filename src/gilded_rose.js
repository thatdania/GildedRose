class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }


  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.notAgeBrie(i) && this.notBackstagePasses(i)) {
        if (qualityExist(i)) {
          if (notSulfuras(i)) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }

      else {
        if (qualityChecker50(i)) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.notBackstagePasses(i)) {

            if (sellInchecker11(i)) {
              if (qualityChecker50(i)) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

            if (sellInchecker6(i)) {
              if (qualityChecker50(i)) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

          }
        }
      }


      if (sellInexist(i)) {
        if (this.notAgeBrie(i)) {
          if (this.notBackstagePasses(i)) {
            if (qualityExist(i)) {
              if (notSulfuras(i)) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          }
          else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        }

        else {
          if (qualityChecker50(i)) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }

      }
    }

    return this.items;
  }


notAgeBrie(i){
  return this.items[i].name != 'Aged Brie'
};

notBackstagePasses(i){
  return this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
};

notSulfuras(i){
  return this.items[i].name != 'Sulfuras, Hand of Ragnaros'
};

qualityChecker(i){
  return this.items[i].quality > 0 && this.items[i].quality < 50
};

sellInChecker(i){
  if(this._sellInchecker6(i)){
    this.items[i].quality = this.items[i].quality + 3
  }
  else if(this._sellInchecker11(i)){
    this.items[i].quality = this.items[i].quality + 2
  }
};

sellInDoesNotexist(i){
  return this.items[i].sellIn < 0
}

_sellInchecker11(i){
  return this.items[i].sellIn < 11
}

_sellInchecker6(i){
  return this.items[i].sellIn < 6
}



};
