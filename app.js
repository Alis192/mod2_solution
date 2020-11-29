(function () {
  'use strict';

  angular.module('ShoppingCheckApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemBuy = this;
    itemBuy.items = ShoppingListCheckOffService.availableItems();

    itemBuy.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var itemBought = this;
    itemBought.items = ShoppingListCheckOffService.alreadyBought();
  }


  function ShoppingListCheckOffService() {
    var service = this;

    var items2 = [];

    var inStock = [
      {
        name: "Chips",
        quantity: "3 bags"
      },
      {
        name: "Chocolate",
        quantity: "2 bars"
      },
      {
        name: "Fizzy Drink",
        quantity: "5 bottles"
      },
      {
        name: "Cookie",
        quantity: "4 bags"
      },
      {
        name: "Candy",
        quantity: "6 packs"
      }
    ];

    service.availableItems = function() {
      return inStock;
    }

    service.buyItem = function(itemIndex){
      items2.push(inStock[itemIndex]);
      inStock.splice(itemIndex, 1);
    }

    service.alreadyBought = function() {
      return items2;
    }
  }


})();
