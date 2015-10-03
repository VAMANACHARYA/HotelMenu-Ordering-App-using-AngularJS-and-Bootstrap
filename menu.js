var app = angular.module('plunker', []);
function CartForm($scope) {
    $scope.invoice = {
        items: [{
            qty: 0,
            description: 'Pizza',
            cost: 9.95},
                {qty: 0,
                         description: 'Sandwich',
                         cost:8.5
            },{qty: 0,
                         description: 'Tofu and Noodles',
                         cost:7
            },{qty: 0,
                         description: 'Burger',
                         cost:4
            },{qty: 0,
                         description: 'Mocktail',
                         cost:10
            }
               ]
    };


    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: 'CustomItem',
            cost: 5
        });
    },

    $scope.add_Item = function(index) {
          angular.forEach($scope.invoice.items, function(item) {
            item.qty =1;
        })
    },
    $scope.removeItem = function(index) {
        $scope.invoice.items.qty =0;
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }

}
