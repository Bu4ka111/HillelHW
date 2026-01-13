var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

services.price = function() {
    var sum = 0;
    var allValues = Object.values(this);
    
    for (var i = 0; i < allValues.length; i++) {
        if (typeof allValues[i] == 'string') {
            if (allValues[i].indexOf('грн') != -1) {
                var num = parseInt(allValues[i].replace(' грн', ''));
                sum = sum + num;
            }
        }
    }
    
    return sum + ' грн';
};

services.minPrice = function() {
    var allValues = Object.values(this);
    var numbers = [];
    
    for (var i = 0; i < allValues.length; i++) {
        if (typeof allValues[i] == 'string' && allValues[i].indexOf('грн') != -1) {
            var num = parseInt(allValues[i]);
            numbers.push(num);
        }
    }
    
    if (numbers.length == 0) {
        return '0 грн';
    }
    
    var minimum = numbers[0];
    for (var j = 1; j < numbers.length; j++) {
        if (numbers[j] < minimum) {
            minimum = numbers[j];
        }
    }
    
    return minimum + ' грн';
};

services.maxPrice = function() {
    var allValues = Object.values(this);
    var priceArray = [];
    
    for (var i = 0; i < allValues.length; i++) {
        var currentValue = allValues[i];
        if (typeof currentValue == 'string') {
            if (currentValue.indexOf('грн') >= 0) {
                priceArray.push(parseInt(currentValue));
            }
        }
    }
    
    if (!priceArray.length) {
        return '0 грн';
    }
    
    var maxValue = priceArray[0];
    for (var index = 0; index < priceArray.length; index++) {
        if (priceArray[index] > maxValue) {
            maxValue = priceArray[index];
        }
    }
    
    return maxValue + ' грн';
};

console.log('Загальна вартість: ' + services.price());
console.log('Мінімальна ціна: ' + services.minPrice());
console.log('Максимальна ціна: ' + services.maxPrice());

services['Фарбування'] = '300 грн';
console.log('Після додавання послуги "Фарбування":');
console.log('Загальна вартість: ' + services.price());
console.log('Мінімальна ціна: ' + services.minPrice());
console.log('Максимальна ціна: ' + services.maxPrice());
