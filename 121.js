// 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0;
        for (let i =1; i<prices.length; i++) {
            if (buy > prices[i]) {
                buy = prices[i]
                
            } else {
                profit = Math.max(profit, prices[i] - buy)
            }
        }
    return profit;

};