---
title: Some Questions
date: 2018-05-27 23:43:08
tags:
---
### Question 1 & Question 2
``` js
    /**
    * extensions is an Array and each item has such format:
    * {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
    * lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
    **/

    /**
    * Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
    **/

    /**
    * Question 2: sort extensions by extType follow these orders ASC
    * DigitalUser < VitrualUser < FaxUser < AO < Dept.
    **/
```

``` js
/**
 * class ExtentionsSort
 */

class ExtentionsSort {
    constructor(data = []) {
        this.data = data
        this.extTypeList = ['DigitalUser', 'VirtualUser', 'FaxUser', 'Dept', 'AO']
    }

    // check extType
    checkExtType(item) {
        if (this.extTypeList.indexOf(item) > -1) {
            return true
        } else {
            console.log('please check out your extType')
            return false
        }
    }

    compare(item1, item2, isAsc) {
        if (item1 > item2) {
            return (isAsc ? 1 : -1)
        } else if ( item1 < item2) {
            return (isAsc ? -1 : 1)
        } else {
            return 0
        }
    }

    compareAttrs(arr1, arr2, attrs) {
        const res = []
        const len = attrs.length
        for (let i = 0; i < len; i++) {
            const val = this.compare(arr1[attrs[i].key], arr2[attrs[i].key], attrs[i].isAsc)
            res.push(val)
            if (val === -1 || val === 1) {
                break
            }
        }

        for (let j = 0; j < res.length; j++) {
            if (res[j] === -1 || res[j] === 1) {
                return res[j]
            }
        }
        return 0
    }

    compareExtType(type1, type2, isAsc) {
        const idx1 = this.extTypeList.indexOf(type1)
        const idx2 = this.extTypeList.indexOf(type2)
        if (idx1 === -1 || idx2 === -1) {
            console.log('please check out your extType')
            return
        }
        return this.compare(idx1, idx2, isAsc)
    }
}

function sortExtensionsByName(extentions) {
    const esInstance = new ExtentionsSort(extentions)
    const attrs = [
        {
            key: 'firstName',
            isAsc: true
        },
        {
            key: 'lastName',
            isAsc: true
        },
        {
            key: 'ext',
            isAsc: true
        }
    ]
    extentions.sort((a, b) => {
        return esInstance.compareAttrs(a, b, attrs)
    })
    return extentions
}

const extensions = [
    {
        firstName: 'c',
        lastName: 'b',
        ext: 'd',
        extType: 'AO'
    },
    {
        firstName: 'b',
        lastName: 'b',
        ext: 'd',
        extType: 'Dept'
    },
    {
        firstName: 'b',
        lastName: 'a',
        ext: 'd',
        extType: 'FaxUser'
    },
    {
        firstName: 'b',
        lastName: 'a',
        ext: 'c',
        extType: 'VirtualUser'
    },
    {
        firstName: 'b',
        lastName: 'a',
        ext: 'b',
        extType: 'DigitalUser'
    }
]

const afterSort = sortExtensionsByName(extensions)
console.log('sortExtensionsByName =======')
console.log(afterSort)
console.log('sortExtensionsByName =======')

function sortExtensionsByExtType(extentions) {
    const esInstance = new ExtentionsSort(extensions)
    extensions.sort((a, b) => {
        return esInstance.compareExtType(a.extType, b.extType, true)
    })
    return extensions
}

const sortByExtType = sortExtensionsByExtType(extensions)
console.log('sortExtensionsByExtType =======')
console.log(sortByExtType)
console.log('sortExtensionsByExtType =======')
```

### Question 3 & Question 4
``` js
    /**
    * saleItems is an Array has each item has such format:
    * {
    *     month: n, //[1-12],
    *     date: n, //[1-31],
    *     transationId: "xxx",
    *     salePrice: number
    * }
    **/

    /**
    * Question 3: write a function to calculate and return a list of total sales (sum) for each 	, expected result like:
    * [
          {quarter: 1, totalPrices: xxx, transactionNums: n},
          {....}
    * ]
    **/

    /**
    * Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
    * [
          {quarter: 1, averagePrices: xxx, transactionNums: n},
          {....}
    * ]
    **/
```

``` js
/**
 * class QuarterData
 */

class QuarterData {
    constructor(saleItems = []) {
        this.saleItems = saleItems
        this.sumOfQuaterItems = []
    }

    getQuarter(month) {
        if (month < 0 || month > 12) {
            throw new Error('please check your month')
        }
        if (month <= 3) {
            return 1
        } else if (month <= 6) {
            return 2
        } else if (month <= 9) {
            return 3
        } else {
            return 4
        }
    }

    quarterData() {
        const res = []
        this.saleItems.forEach((item) => {
            const quarterId = this.getQuarter(item.month)
            if (!res[quarterId - 1]) {
                res[quarterId - 1] = {
                    quarter: quarterId,
                    totalPrices: 0,
                    transactionNums: 0
                }
            }
            res[quarterId - 1].totalPrices = res[quarterId - 1].totalPrices + item.salePrice
            res[quarterId - 1].transactionNums += 1
        })
        return res
    }
}

const saleItems = [
    {
        month: 1,
        date: 1,
        transactionId: '1',
        salePrice: 1
    },
    {
        month: 2,
        date: 1,
        transactionId: '2',
        salePrice: 2
    },
    {
        month: 3,
        date: 1,
        transactionId: '1',
        salePrice: 3
    },
    {
        month: 4,
        date: 1,
        transactionId: '2',
        salePrice: 4
    },
    {
        month: 5,
        date: 1,
        transactionId: '1',
        salePrice: 5
    },
    {
        month: 6,
        date: 1,
        transactionId: '2',
        salePrice: 6
    },
    {
        month: 7,
        date: 1,
        transactionId: '1',
        salePrice: 7
    },
    {
        month: 8,
        date: 1,
        transactionId: '2',
        salePrice: 8
    },
    {
        month: 9,
        date: 1,
        transactionId: '1',
        salePrice: 9
    },
    {
        month: 10,
        date: 1,
        transactionId: '2',
        salePrice: 10
    },
    {
        month: 11,
        date: 1,
        transactionId: '1',
        salePrice: 11
    },
    {
        month: 12,
        date: 1,
        transactionId: '2',
        salePrice: 12
    }
]

function sumByQuarter(saleItems) {
    const instance = new QuarterData(saleItems)
    const res = instance.quarterData()
    return res
}

const res = sumByQuarter(saleItems)
console.log(res)

function averageByQuarter(saleItems) {
    const instance = new QuarterData(saleItems)
    const average = []
    const sum = instance.quarterData()
    sum.forEach((item) => {
        const averagePrices = item.totalPrices / item.transactionNums
        average.push({
            quarter: item.quarter,
            averagePrices,
            transactionNums: item.transactionNums
        })
    })
    return average
}

const average = averageByQuarter(saleItems)
console.log(average)
```

### Question 5
``` js
    /**
    * Question 5: please create a tool to generate Sequence
    * Expected to be used like:
    * var sequence1 = new Sequence();
    * sequence1.next() --> return 1;
    * sequence1.next() --> return 2;
    
    * in another module:
    * var sequence2 = new Sequence();
    * sequence2.next() --> 3;
    * sequence2.next() --> 4;
    **/
```

``` js
const SequenceConfig = {
    index: 0
}

class Sequence {
    constructor(incr = 1) {
        this.incr = incr
        this.config = SequenceConfig
    }

    incrIdx() {
        this.config['index'] += this.incr
        return this.config['index']
    }

    next() {
        return this.incrIdx()
    }
}

const sequence1 = new Sequence()
console.log(sequence1.next())
console.log(sequence1.next())

const sequence2 = new Sequence()
console.log(sequence2.next())
console.log(sequence2.next())
```

### Question 6
``` js
    /**
    * Question 6:
    * AllKeys: 0-9;
    * usedKeys: an array to store all used keys like [2,3,4];
    * We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
    **/
```

``` js
const utils = {
    isNumber(data) {
        return Object.prototype.toString.call(data) === '[object Number]'
    },
    isArray(data) {
        return Object.prototype.toString.call(data) === '[object Array]'
    },
    createArray(num = 9) {
        const arr = []
        for(let i = 0; i < num; i++) {
            arr.push(i)
        }
        return arr
    }
}

function getUnUsedKeys(allKeys = 9, usedKeys = []) {
    if (utils.isNumber(allKeys)) {
        allKeys = utils.createArray(allKeys)
    }
    if (utils.isArray(allKeys)) {
        return allKeys.filter((item) => {
            return usedKeys.indexOf(item) === -1
        })
    } else {
        throw new Error('allKeys must be Number or Array')
    }
}

const UnUsedKeys = getUnUsedKeys(9, [2, 3, 4])
console.log(UnUsedKeys)
```
___
https://segmentfault.com/a/1190000012360838