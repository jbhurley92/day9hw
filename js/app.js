

                             
                            
//function map(items, func){
   // return items.map(func)
//}

function map(nums, func){
var numbers = [1, 2, 3, 4];
var newNumbers = [];
for(var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] + 1;

 }
    return newNumbers +1;
}

function map(arr, func) {
    var collector = new Array();
    
    for(i in arr) {
        collector.push(func(i));
    }
    
    return collector;
}




var output = map([1,2,3,4],add1)
console.log(output);
function add1(num){
    return num + 1;

    
    
}

function byHandFilter(['one', 'two'], function(a)) {
   console.log(a); 
});

function filter(arr, func) {
  var filtered = new Array();
  for(i in arr) {
        if func(arr(i)) {
                filtered.push(i)
        }
  }
  return filtered;
}

function reduce(intial, arr, func) {
  var acc = initial;
  for(var i = 0; i < arr.length; i++) {
    if(i === 0) {
      acc = func(arr, initial);
    }

    acc = func(acc, i);
  }
  return initial;
    
function byHandReject(['one','two']), function(a)) {
    consoloe.log(a);
    
});
    function reject(arr, fun){
        var reject = new Array();
        for (i in arr){
            if func(arr(i)){
                filtered.reject(i)
                
            }
        }
        
 /*function byHandCollection(arr, func){
     if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}   
    }
    }
   */
function someTrue(arr, func, num){
    
}
    