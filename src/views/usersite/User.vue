<template>
  <v-container id="user-profile" fluid tag="section" class="my-10 py-0">
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="3" class="py-0">
        <v-card class="ma-0">
          <v-card-text class="pa-0">
            <div justify="center" class="profile-img pa-3">
              <div class="item">
                <v-avatar size="120">
                  <img
                    src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                    alt="John"
                  />
                </v-avatar>
              </div>
              <div class="pt-0 item">
                <div class="profile-name">
                  <p class="pt-1 font-weight-light mb-0 black--text">مهرداد</p>
                  <p class="mb-1 grey--text">manym65646</p>
                </div>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="items-profile pa-4">
              <ul class="items">
                <router-link to="/" tag="li" class="item"
                  ><a class="link"
                    ><span></span>

                    داشبورد</a
                  >
                </router-link>
                <router-link to="/" tag="li" class="item"
                  ><a class="link"
                    ><span></span>

                    فاکتور</a
                  >
                </router-link>
                <router-link to="/" tag="li" class="item"
                  ><a class="link"
                    ><span></span>

                    ویرایش حساب کاربری</a
                  >
                </router-link>
                <li class="item">
                  <a class="link">خروج</a>
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="9" class="py-0">
        <v-card class="mt-0">
          <v-card-title>اکانت اعضا</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-alert outlined type="success" text>
              درحال حاضر شما عضو ویژه سایت می باشید !
            </v-alert>
          </v-card-text>
        </v-card>
        <div class="pa-3"></div>
        <v-card class="mt-0">
          <v-card-title>اطلاعات حساب کاربری</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <form>
              <v-row class="ma-0">
                <v-col cols="6">
                  <label>
                    <v-icon small>mdi-account </v-icon>
                    نام و نام خانوادگی یا نام کاربری : amn_c41
                  </label>
                </v-col>
                <v-col cols="6">
                  <label>
                    <v-icon small>mdi-phone</v-icon>
                    شماره تماس : 0930000008
                  </label>
                </v-col>
                <v-col cols="6">
                  <label>
                    <v-icon small>mdi-email</v-icon>
                    ایمیل : mm2dssd48@gmail.com
                  </label>
                </v-col>
                <v-col cols="6">
                  <label>
                    <v-icon small>mdi-clipboard-outline</v-icon>
                    بیوگرافی :
                  </label>
                </v-col>
              </v-row>
            </form>
          </v-card-text>
        </v-card>
        <div class="pa-3"></div>
        <v-card class="mt-0">
          <v-card-title>علاقمندی ها</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="primary--text">شناسه</th>
                  <th class="primary--text text-center">نام</th>
                  <th class="primary--text text-center">قیمت</th>
                  <th class="primary--text text-center">عکس</th>
                  <th class="primary--text text-center">خرید</th>
                  <th class="primary--text text-center">حذف</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, i) in interestscartItem" :key="i">
                  <td>{{ item.id }}</td>
                  <td class="text-center">{{ item.name }}</td>
                  <td class="text-center">{{ item.price }}</td>
                  <td class="text-center">
                    <v-img
                      v-for="(item3, i) in item.images.slice(0, 1)"
                      :key="i"
                      class="my-1 mx-auto"
                      max-height="80px"
                      :src="item3.url"
                      width="100px"
                      height="100px"
                    ></v-img>
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="ml-2 edit-h"
                      min-width="0"
                      @click="addToCart(item.id)"
                      text
                      large
                      icon
                    >
                      <v-icon large> mdi-cart-outline</v-icon>
                    </v-btn>
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="ml-2 removebtn-h"
                      min-width="0"
                      text
                      large
                      icon
                      @click="removeFrominterestscart"
                    >
                      <v-icon large> mdi-delete-empty</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
        <div class="pa-3"></div>
        <v-card class="mt-0">
          <v-card-title> سبد خرید</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="primary--text" style="width: 10px">شناسه</th>
                  <th class="primary--text text-center">نام</th>
                  <th class="primary--text text-center" style="width: 150px">
                    قیمت
                  </th>
                  <th class="primary--text text-center">عکس</th>
                  <th class="primary--text text-center">تعداد</th>
                  <th class="primary--text text-center" style="width: 10px">
                    حذف
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  <td style="width: 30px">{{ item.id }}</td>
                  <td class="text-center">{{ item.name }}</td>
                  <td class="text-center" id="loop">
                    {{ (item.price * item.quantity) | currency }}
                  </td>
                  <td class="text-center">
                    <v-img
                      v-for="(item2, i) in item.images.slice(0, 1)"
                      :key="i"
                      class="my-1 mx-auto"
                      max-height="80px"
                      :src="item2.url"
                      width="100px"
                      height="100px"
                    ></v-img>
                  </td>
                  <td class="text-center">
                    <v-row class="pa-0 ma-0" style="align-items: center">
                      <v-btn
                        class="ml-2 edit-h"
                        min-width="0"
                        text
                        icon
                        @click="plus(item.id)"
                      >
                        <v-icon large> mdi-plus</v-icon>
                      </v-btn>
                      <v-text-field
                        class="mt-2 ml-2 text-center"
                        label="تعداد"
                        solo
                        type="number"
                        v-model="item.quantity"
                      ></v-text-field>
                      <v-btn class="edit-h" min-width="0" text icon>
                        <v-icon large @click="minus(item.id)">
                          mdi-minus</v-icon
                        >
                      </v-btn>
                    </v-row>
                  </td>

                  <td class="text-center">
                    <v-btn
                      class="ml-2 removebtn-h"
                      min-width="0"
                      text
                      large
                      icon
                      @click="removeFromCart(item.id)"
                    >
                      <v-icon large> mdi-delete-empty</v-icon>
                    </v-btn>
                  </td>
                </tr>
                <tr>
                  <td class="text-center"></td>
                  <th class="text-center">
                    <h3>جمع کل: {{ total | currency }}</h3>
                  </th>
                  <td class="text-center"></td>
                  <td class="text-center"></td>
                  <td class="text-center">
                    <v-btn color="primary" style="letter-spacing: 0"
                      >تکمیل خرید</v-btn
                    >
                  </td>
                  <td class="text-center"></td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      img: Array,

    };
  },

  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    interestscartItem() {
      return this.$store.getters.interestscartItem;
    },
  
    total(){
       var  pricearray=[0]
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      for (let i = 0; i < this.cartItems.length; i++) {
         pricearray.push( this.cartItems[i].price * this.cartItems[i].quantity)
     }
     return pricearray.reduce(reducer)
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    removeFrominterestscart(itemId) {
      this.$store.dispatch("removeFrominterestscart", itemId);
    },
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
      alert("به سبد خرید اضافه شد");
    },
    minus(itemId) {
      this.$store.dispatch("minus", itemId);
    },
    plus(itemId) {
      this.$store.dispatch("plus", itemId);
    },
  },
  filters: {
    currency(value) {
      return (
        new Intl.NumberFormat("fa", { maximumSignificantDigits: 3 }).format(
          value
        ) +
        " " +
        "تومن"
      );
      //new Intl.NumberFormat('fa', { style: 'currency', currency: 'IRR' }).format()
    },
  },
 

  //
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/utility/utility.scss";
.profile-name {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  p {
    text-align: center;
  }
}

.profile-img {
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.items-profile {
  .items {
    .item {
      .link {
        font-size: 14px;
        line-height: 24px;
        margin: 10px 0;
        padding-right: 12px;
        position: relative;
        color: #2d3339;
        display: block;
        width: 100%;
      }
    }
  }
}

.removebtn-h {
  &:before {
    background: none !important;
  }
  &:hover {
    .v-icon {
      color: rgb(187, 9, 9);
    }
  }
}
.edit-h {
  &:before {
    background: none !important;
  }
  &:hover {
    .v-icon {
      color: $color-dark;
    }
  }
}

td {
  .v-text-field {
    width: 30px !important;
  }
  .edit-h {
    &:before {
      background: none !important;
    }
    &:hover {
      .v-icon {
        color: $color-dark;
      }
    }
  }
  .v-text-field {
    input {
      text-align: center !important ;
    }
  }
}
</style>
