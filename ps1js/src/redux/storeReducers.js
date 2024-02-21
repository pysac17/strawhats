import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Product of the month",
    shelves: [],
    remainingSpace:[]
  },
  {
    name: "Seasonal",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Stock Clearance",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Clothing",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Bathroom Supplies",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Medical Supplies",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Groceries",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Packaged Food",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Refrigerator",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Stationary",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },  {
    name: "Sporting Goods",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },
  {
    name: "Beauty",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },
  {
    name: "Electronics",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },
  {
    name: "Home Decor",
    shelves: [
      [
        [0, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      [
        [21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35],
        [36, 37, 38, 39, 40],
      ],
    ],
  },
];  

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    updateStore(state, action) {
      state[action.payload.index].shelves=action.payload.data.shelves
      state[action.payload.index].remainingSpace=action.payload.data.remainingSpace
    },
  },
});

export const {
  updateStore,
} = storeSlice.actions;

export default storeSlice.reducer;
