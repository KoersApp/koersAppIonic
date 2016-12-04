angular.module('starter.services', [])

.factory('YahooFinance', function Hello($http) {
    $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3Dyhoo%27%20and%20xpath%3D%27%2F%2Fdiv%5B%40id%3D%22yfi_headlines%22%5D%2Fdiv%5B2%5D%2Ful%2Fli%2Fa%27&format=json&diagnostics=true&callback=").
        success(function(data) {
            $scope.greeting = data;
        });

    
	return {
		getQuery: function(){        
            return data;
		} 
        
	}
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    code: 'NSE:AIAENG',
    indicator: 'Morning Doji Star',
    reliability : 'Low',
    buySell: 'img/koers-up.jpg'
  }, {
    id: 1,
    code: 'NSE:ATULAUTO',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-down.jpg'
  }, {
    id: 2,
    code: 'NASDAQ:AAPL',
    indicator: 'Morning Doji Star',
    reliability : 'Low',
    buySell: 'img/koers-up.jpg'
  }, {
    id: 3,
    code: 'NASDAQ:YHOO',
    indicator: 'Marubozu',
    reliability : 'High',
    buySell: 'img/koers-down.jpg'
  }, {
    id: 4,
    code: 'NASDAQ:GOOG',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-down.jpg'
  }, {
    id: 5,
    code: 'NASDAQ:GOOG',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-down.jpg'
  }, {
    id: 6,
    code: 'NASDAQ:GOOG',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-up.jpg'
  }, {
    id: 7,
    code: 'NASDAQ:GOOG',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-up.jpg'
  }, {
    id: 8,
    code: 'NASDAQ:GOOG',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-down.jpg'
  }, {
    id: 9,
    code: 'NASDAQ:GOOG',
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/koers-up.jpg'
  }];
    
    var indicators = [{
    indicator: 'Marubozu',
    reliability : 'High',
    buySell: 'img/candle1-marubozu_001.gif',
    info: 'A candlestick with no shadow extending from the body at either the open, the close or at both. The name means close-cropped or close-cut in Japanese, though other interpretations refer to it as Bald or Shaven Head.'
  }, {
    indicator: 'Long-Legged Doji',
    reliability : 'High',
    buySell: 'img/candlelongday.gif',
    info: 'This candlestick has long upper and lower shadows with the Doji in the middle of the days trading range, clearly reflecting the indecision of traders.'
  }, {
    indicator: 'Morning Doji Star',
    reliability : 'Low',
    buySell: 'img/candlemorningdojistar.gif',
    info: 'A three day bullish reversal pattern that is very similar to the Morning Star. The first day is in a downtrend with a long black body. The next day opens lower with a Doji that has a small trading range. The last day closes above the midpoint of the first day.'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(indicator) {
      for (var i = 0; i < chats.length; i++) {
        if (indicators[i].indicator === String(indicator)) {
          return indicators[i];
        }
      }
      return null;
    }
  };
});
