
import axios from '../../../axios.config'

const state = {
  "products1":[],
  "cart": [],
  "interestscart": [],
  "products": [
    {
      "discount": "5%",
      "id": 3,
      "quantity": 0,
      "name": "بیسکویت",
      "images": [
        {
          "url": require("../../assets/img/dev/بیسکویت/pexels-photo-3593435.jpeg"),
        },
        { "url": require("../../assets/img/dev/بیسکویت/pexels-photo-1701325.jpeg") },
        {
          "url": require("../../assets/img/dev/بیسکویت/pexels-photo-3776940.jpeg"),
        },
        { "url": require("../../assets/img/dev/بیسکویت/pexels-photo-3776942.jpeg") },
        { "url": require("../../assets/img/dev/بیسکویت/pexels-photo-4110541.jpeg") },


      ],
      "price": 12000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },


    {
      "discount": "15%",
      "id": 44,
      "quantity": 0,
      "name": "کیک",
      "images": [
        {
          "url": require("../../assets/img/dev/کیک/pexels-photo-913136.jpeg"),
        },
        { "url": require("../../assets/img/dev/کیک/pexels-photo-2144200.jpeg") },
        {
          "url": require("../../assets/img/dev/کیک/pexels-photo-433527.jpeg"),
        },
        { "url": require("../../assets/img/dev/کیک/pexels-photo-4033917.jpeg") },
        { "url": require("../../assets/img/dev/کیک/pexels-photo-978267.jpeg") },
      ],
      "price": 5000000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      "discount": "32%",
      "id": 99,
      "quantity": 0,
      "name": "شکلات",
      "images": [
        { "url": require("../../assets/img/dev/شکلات/Sweet-White-Chocolate-Dessert-Wallpaper-1600x1200-340x220.jpg") },
        {
          "url": require("../../assets/img/dev/شکلات/Chocolate-Shaving-Tiles-Wallpaper-1440x810-768x432.jpg"),
        },
        { "url": require("../../assets/img/dev/شکلات/Chocolate-Wallpaper-05-1920x1200-768x480.jpg") },
        { "url": require("../../assets/img/dev/شکلات/Beautiful-Chocolate-Food-Sweets-Wallpaper-1920x1200-768x480.jpg") },
        {
          "url": require("../../assets/img/dev/شکلات/Chocolate-Food-Muffins-Cakes-Wallpaper-1920x1200-768x480.jpg"),
        },
      ],
      "price": 39000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      "discount": "40%",
      "id": 86,
      "quantity": 0,
      "name": "آدامس",
      "images": [
        { "url": require("../../assets/img/dev/آبنبات/BuzzFeed.jpg") },
        { "url": require("../../assets/img/dev/آبنبات/sweet_candy-t2.jpg") },
        {
          "url": require("../../assets/img/dev/آبنبات/I love Candy Gum Drops by bluepaws21 on DeviantArt.jpg"),
        },
        {
          "url": require("../../assets/img/dev/آبنبات/Image about cute in pink by tuesdayglooms on We Heart It.jpg"),
        },
        { "url": require("../../assets/img/dev/آبنبات/Images By Cindy Pickett On Wallpapers _ Cute Food Wallpaper.jpg") },
      ],
      "price": 98000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      "discount": "16%",
      "id": 8,
      "quantity": 0,
      "name": "چیپس",
      "images": [
        {
          "url": require("../../assets/img/dev/چیپس/wp7775668.jpg"),
        },
        { "url": require("../../assets/img/dev/چیپس/wp6850839.jpg") },
        {
          "url": require("../../assets/img/dev/چیپس/wp7736993.jpg"),
        },
        { "url": require("../../assets/img/dev/چیپس/wp7775720.jpg") },
        { "url": require("../../assets/img/dev/چیپس/wp7775778.jpg") },
      ],
      "price": 4000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      "discount": "24%",
      "id": 100,
      "quantity": 0,
      "name": "بستنی",
      "images": [
        {
          "url": require("../../assets/img/dev/بستنی/240306.jpg"),
        },
        { "url": require("../../assets/img/dev/بستنی/240307 (1).jpg") },
        {
          "url": require("../../assets/img/dev/بستنی/240317.jpg"),
        },
        { "url": require("../../assets/img/dev/بستنی/240403.jpg") },
        { "url": require("../../assets/img/dev/بستنی/240447.jpg") },
      ],
      "price": 150000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
      "discount": "27%",
      "id": 5,
      "quantity": 0,
      "name": "نوشابه",
      "images": [
        {
          "url": require("../../assets/img/dev/نوشابه/8g2Vqm.jpg"),
        },
        { "url": require("../../assets/img/dev/نوشابه/Ajht30.jpg") },
        {
          "url": require("../../assets/img/dev/نوشابه/eP16lv.jpg"),
        },
        { "url": require("../../assets/img/dev/نوشابه/FpB4U7.jpg") },
        { "url": require("../../assets/img/dev/نوشابه/MxoRhq.jpg") },
      ],
      "price": 3000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },


    {
      "discount": "25%",
      "id": 6,
      "quantity": 0,
      "name": "آبنبات",
      "images": [
        {
          "url": require("../../assets/img/dev/آبنبات/I love Candy Gum Drops by bluepaws21 on DeviantArt.jpg"),
        },
        {
          "url": require("../../assets/img/dev/آبنبات/Image about cute in pink by tuesdayglooms on We Heart It.jpg"),
        },
        { "url": require("../../assets/img/dev/آبنبات/Images By Cindy Pickett On Wallpapers _ Cute Food Wallpaper.jpg") },
        { "url": require("../../assets/img/dev/آبنبات/sweet_candy-t2.jpg") },
        { "url": require("../../assets/img/dev/آبنبات/BuzzFeed.jpg") },
      ],
      "price": 9000,
      "description": " ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },

  ]
};
const getters = {
  ////1

  product: (state) => (id) => {
    return state.products.filter(p => p.id === Number(id))[0]
  },
  cartItems: (state) => {
    const itemcart = state.cart.map(
      itemId => state.products.find(
        product => product.id === itemId
      )
    )

    return Array.from(new Set(itemcart));



  },
  interestscartItem: (state) => {
    const interestscartItem = state.interestscart.map(
      itemId => state.products.find(
        product => product.id === itemId
      )
    )

    return Array.from(new Set(interestscartItem));



  },


};
const mutations = {
  ///اضافه کردن به سبد خرید
  addToCart(state, payload) {
    state.cart.push(Number(payload))
  },
  ///حذف از سبد خرید
  removeFromCart(state, payload) {
    let indexToDelete = state.cart.indexOf(Number(payload));
    state.cart.splice(indexToDelete, 1)
  },
  ///اضافه کردن به لیست علاقمندی ها
  addTointerestscart(state, payload) {
    state.interestscart.push(Number(payload))
  },
  ///حذف از   لیست علاقمندی ها
  removeFrominterestscart(state, payload) {
    let indexToDelete = state.interestscart.indexOf(Number(payload));
    state.interestscart.splice(indexToDelete, 1)
  },
  //کاهش تعداد محصول در لیست خرید 
  decrementProductInventory(state, payload) {
    let product = state.products.find(product => product.id === Number(payload))
    product.quantity--;
    if(product.quantity < 0 ){
      product.quantity = 0
    }else{
      product.quantity--
    }
  },
  /// افزایش تعداد محصول در لیست خرید 
  incrementProductInventory(state, payload) {
    let product = state.products.find(product => product.id === Number(payload))
    product.quantity++;
  },

};
const actions = {
  addToCart({ commit }, payload) {
    commit('addToCart', payload)
    commit('incrementProductInventory', payload)
   
  },
  removeFromCart({ commit }, payload) {
    commit('removeFromCart', payload)
    commit('decrementProductInventory', payload)
   
  },

  addTointerestscart({ commit }, payload) {
    commit('addTointerestscart', payload)
   


  },
  removeFrominterestscart({ commit }, payload) {
    commit('removeFrominterestscart', payload)



  },

  plus({ commit }, payload) {
    commit('incrementProductInventory', payload)
  },
  minus({ commit }, payload) {
    commit('decrementProductInventory', payload)
  },


  ////
    

    newProduct(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/product', data,  { headers: { 'Content-Type': 'multipart/form-data'  } })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
            console.log(data);
         
          })
      })
    },




};
export default {
  state, mutations, actions, getters
}