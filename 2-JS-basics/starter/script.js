var john = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
      
        
        this.tips = [];
        this.total = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            
            if (this.bills[i] < 50) {
                percentage = 0.2;
                }
            else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                percentage = 0.15;         
                }
            else {
                percentage = 0.1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.total[i] = this.tips[i] + this.bills[i];
        }
        
        return this.tips[i];
    }
    
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

john.calcTips();
john.average = calcAverage(john.tips);
console.log(john);
