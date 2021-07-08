<template>
  <v-container id="user-profile" fluid tag="section" class="my-10 py-0">
    <v-row justify="center" class="ma-0">
     
      <v-col cols="12" md="12" class="py-0">
        
     
       
       
        <div class="pa-3"></div>
        <v-card class="mt-0">
          <v-card-title> سبد خرید</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-simple-table>
              <thead>
                <tr>
                  
                  <th class="primary--text text-center">نام</th>
                  <th class="primary--text text-center" style="width: 200px">
                    قیمت
                  </th>
                  <th class="primary--text text-center">عکس</th>
                  <th class="primary--text text-center" style="width: 300px">تعداد</th>
                  <th class="primary--text text-center" ></th>
                  <th class="primary--text text-center" style="width: 10px">
                    حذف
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in cartItems" :key="item.id">
                  
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
                  <td></td>

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
                  <td class="text-center">
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
@import "../assets/scss/utility/utility.scss";




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
