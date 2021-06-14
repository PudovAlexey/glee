import {
    NEW_DESIGN,
    WEEK_PRODUCTS,
    WEEK_FILTER,
    NEW_FILTER,
    GOOD_LIST,
    SHOW_IN_BOTTOM_SLIDER
} from "./goodTypes";

export function showGoods(category) {
    return dispatch => {
        const shopList = [
            { id: 1, currentPrice: 29.00, name: 'Wooden radio', icon: './images/items/wooden-radio.png', filterItem: 'Chairs', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 2, currentPrice: 29.00, name: 'Kitchen Chair', icon: './images/items/kitchen-chair.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 3, currentPrice: 29.00, name: 'White chair', icon: './images/items/white-chair.png', filterItem: 'Chairs', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 4, currentPrice: 29.00, name: 'Modern chair', icon: './images/items/modern-chair.png', filterItem: 'Chairs', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 5, currentPrice: 29.00, name: 'Hall chair', icon: './images/items/hall-chair.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 6, currentPrice: 29.00, name: 'Relax chair', icon: './images/items/relax-chair.png', filterItem: 'Chairs', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 7, currentPrice: 29.00, name: 'Round ottoman', icon: './images/items/round-ottoman.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 8, currentPrice: 29.00, name: 'Square ottoman', icon: './images/items/square-ottoman.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: true, newDesign: false, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 9, currentPrice: 29.00, name: 'Beat Flat Pendant', icon: './images/items/modern-sofa.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: false, newDesign: true, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 10, currentPrice: 29.00, name: 'Lampre Sur Piends Bamboo', icon: './images/items/modern-bad.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: false, newDesign: true, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 11, currentPrice: 29.00, name: 'Rattan Rocking Chair', icon: './images/items/office-chair.jpg', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: false, newDesign: true, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 12, currentPrice: 29.00, name: 'Rattan Rocking bad', icon: './images/items/white-bad.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: false, newDesign: true, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 13, currentPrice: 29.00, name: 'Rattan Rocking chair', icon: './images/items/white-office-chair.jpg', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: false, newDesign: true, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 14, currentPrice: 29.00, name: 'Lampre Sur Piends Bamboo', icon: './images/items/home-sofa.png', filterItem: 'Furnitures', complectation: 'Classic', weekProduct: false, newDesign: true, showInTopSlider: false, showInBottomSlider: false, description: '' },
            { id: 15, currentPrice: 10.00, name: 'Mirum Notare Tellus', icon: './images/items/egipt-light.png', filterItem: 'Lightning', complectation: 'Classic', weekProduct: true, newDesign: true, showInTopSlider: false, showInBottomSlider: true, description: 'LEDCornBulb Lamp 5W 7W 10W 12W 15W E26 E27LEDCornLight' },
            { id: 16, currentPrice: 8.00, name: 'Maluesuada Tempor Euismod', icon: './images/items/outdoor-light.png', filterItem: 'Lightning', complectation: 'Classic', weekProduct: true, newDesign: true, showInTopSlider: false, showInBottomSlider: true, description: '50W 8000lm Compact Size for HID StreetLightReplacementLEDCornLight' },
        ]

        //Show all products
        dispatch(showAllGoods(shopList))

        // dispatch(showAll(shopList))

        // Show Random goods slst

        function getRandomGoodList(minValue, goodsCount, goodList, goodsToShow) {

            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            let arr = [];
            for (let i = minValue; i < goodsCount; i++)
                arr.push(i);

            let showedArr = shuffle(arr).slice(0 , goodsToShow)

            showedArr.sort((a, b) => a - b)

            let randomGoodList = showedArr.map((item, index) => {
                return goodList[item]
            })

            console.log('random', randomGoodList);

            return randomGoodList

        }



        let shopWeekProductList = shopList.filter((shopItem) => {
            return shopItem.weekProduct ? shopItem : null
        })

        // Show new products

        let shopNewProductList = shopList.filter((shopItem) => {
            return shopItem.newDesign ? shopItem : null
        })

        //dispatch

        if (category === 'Products of the week') {
            dispatch(showWeekGoods(getRandomGoodList(0, shopWeekProductList.length, shopWeekProductList, 8)))
        } else if (category === 'New Design') {
            dispatch(showNew(getRandomGoodList(0, shopNewProductList.length, shopNewProductList, 6)))
        }

    }
}


export function filterClickHandler(filteredGood, category) {

    return (dispatch, getState) => {
        let state = getState().goods

        function getRandomGoodList(minValue, goodsCount, goodList, goodsToShow) {

            function shuffle(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            let arr = [];
            for (let i = minValue; i < goodsCount; i++)
                arr.push(i);

            let showedArr = shuffle(arr).slice(0 , goodsToShow)

            showedArr.sort((a, b) => a - b)

            let randomGoodList = showedArr.map((item, index) => {
                return goodList[item]
            })

            console.log('random', randomGoodList);

            return randomGoodList

        }



        let filterWeekGoods = state.goods.filter(weekItem => {
            console.log('ARR', weekItem.filterItem)
            return weekItem.weekProduct && (weekItem.filterItem === filteredGood || filteredGood === 'All') ? weekItem : null
        })

        let filterNewGoods = state.goods.filter(newItem => {
            return newItem.newDesign && (newItem.filterItem === filteredGood || filteredGood === 'All') ? newItem : null
        })

        if (category === 'Products of the week') {
            dispatch(weekFilter(filteredGood, getRandomGoodList(0, filterWeekGoods.length, filterWeekGoods, 8)))
        } else if (category === 'New Design') {
            dispatch(newFilter(filteredGood, getRandomGoodList(0, filterNewGoods.length, filterNewGoods, 6)))
        }

    }
}

export function showInSlider() {
    return (dispatch, getState) => {

        let state = getState().goods

    let howedInBottomSlider =  state.goods.filter(item => {
        return item.showInBottomSlider ? item : null
    })

    dispatch(showBottomSlider(howedInBottomSlider))

    }
}

//ACTIONS   

export function showAllGoods(shopList) {
    return {
        type: GOOD_LIST,
        shopList
    }
}

export function showWeekGoods(shopWeekProductList) {
    return {
        type: WEEK_PRODUCTS,
        shopWeekProductList
    }
}

export function showNew(shopNewProductList) {
    return {
        type: NEW_DESIGN,
        shopNewProductList
    }
}

export function weekFilter(switchCategoryWeek, weekGoods) {
    return {
        type: WEEK_FILTER,
        switchCategoryWeek,
        weekGoods
    }

}

export function newFilter(switchCategoryNew, NewGoods) {
    return {
        type: NEW_FILTER,
        switchCategoryNew,
        NewGoods
    }

}

export function showBottomSlider(howedInBottomSlider) {
    return {
        type: SHOW_IN_BOTTOM_SLIDER,
        howedInBottomSlider,
    }

}