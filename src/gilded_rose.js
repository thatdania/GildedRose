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
    }
    return this.items;
}



agedBrieChecker(i){
  if(this.items[i].name === 'Aged Brie' && this.qualityChecker(i)){
    this.items[i].quality += 1
  }
}

backstagePassesChecker(i){
  if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.qualityChecker(i)){
    this.sellInChecker(i);
    this._backstageExpirtySellIn(i);
  }
}

sulfurasChecker(i){
  if(this.items[i].name === 'Sulfuras, Hand of Ragnaros' && this.qualityChecker(i)){
    this.items[i].quality = this.items[i].quality
  }
}

sellInChecker(i){
  if(this._sellInchecker6(i)){
    this.items[i].quality += 3
  }
  else if(this._sellInchecker11(i)){
    this.items[i].quality += 2
  }
};

expiryRateChecker(i){
  this._expiryRate(i)
  if(this.items[i].quality < 0){
    this.items[i].quality = 0
  }
}

qualityChecker(i){
  return this.items[i].quality > 0 && this.items[i].quality < 50
};

_expiryRate(i){
  if(this.items[i].sellIn < 0){
    this.items[i].quality -= 2
  }
}

_backstageExpirtySellIn(i){
  if(this.items[i].sellIn < 0){
    this.items[i].quality = 0
  }
}

_sellInchecker11(i){
  return this.items[i].sellIn < 11
}

_sellInchecker6(i){
  return this.items[i].sellIn < 6
}

};
