import {WEEK_PRODUCTS, 
    NEW_DESIGN,
    WEEK_FILTER,
    NEW_FILTER,
    GOOD_LIST,
    SHOW_IN_BOTTOM_SLIDER
 } from "../actions/goodTypes";

const initialState = {
    isActiveFilterWeek: 'All',
    isActiveFilterNew: 'All',
    filteredItems: ['All', 'Furnitures', 'Chairs', 'Lightning', 'Decor'],
    goods: [],
    weekGoods: [],
    newGoods: [],
    bottomSlider: [],
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case GOOD_LIST:
            return {
                ...state, goods: action.shopList
            }
        case NEW_DESIGN:
            return {
                ...state, newGoods: action.shopNewProductList
            }
        case WEEK_PRODUCTS:
            return {
                ...state, weekGoods: action.shopWeekProductList
            }
            case WEEK_FILTER:
            return {
                ...state, 
                isActiveFilterWeek: action.switchCategoryWeek,
                weekGoods: action.weekGoods

            }
            case NEW_FILTER:
            return {
                ...state, 
                isActiveFilterNew: action.switchCategoryNew,
                newGoods: action.NewGoods
            }
            case SHOW_IN_BOTTOM_SLIDER:
            return {
                ...state, 
                bottomSlider: action.howedInBottomSlider
            }
        default:
            return state
    }
}