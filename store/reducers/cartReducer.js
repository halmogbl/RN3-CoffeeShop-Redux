const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ],
  previousOrders: [
    "First Order",
    "Second Order",
    "Third Order",
    "Fourth Order",
    "Fifth Order",
    "Sixth Order",
    "Seventh Order",
    "Order # 8",
    "Order # 9",
    "Order # 10",
    "Order # 11",
    "Order # 12",
    "Order # 13",
    "Order # 14"
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
