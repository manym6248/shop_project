<template>
  <router-link  :to="{ name: 'Product', params: { id: item.id } }">
    <v-card
      class="mx-auto my-0 mb-1 product-card-m"
      max-width="428px"
      height="100%"
    >
    
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
      <div class="images">
        <v-img height="270px" :src="imgUrl1">
          <h3>{{item.discount}} تخفیف</h3>
          <div class="m2">  {{ item.price | currency }}</div>
        </v-img>
      </div>
    
      <v-card-text style="height: 130px">
 
        <v-row align="center" class="mx-0 my-2">
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          ></v-rating>
        </v-row>

        <div class="my-0 subtitle-1">
          <h5>{{ item.name }}</h5>
        </div>
        <div class="my-0 mt-1 subtitle-1 price-1">
          {{ item.price | currency }}
        </div>
 
        <div class="card-item">
          <ul class="items ma-0">
            <li class="item">
              <a href="#">
                <v-btn class="mx-2" fab dark x-small color="pink" @click.prevent="addToCart(item.id)">
                  <v-icon dark> mdi-cart-outline </v-icon>
                </v-btn>
              </a>
            </li>
            <li class="item">
              <a>
                <v-btn class="mx-2" fab dark x-small color="pink" @click.prevent="addTointerestscart(item.id)">
                  <v-icon dark> mdi-heart </v-icon>
                </v-btn>
              </a>
            </li>
            <li class="item">
              <a>
                <v-btn class="mx-2" fab dark x-small color="pink">
                  <v-icon dark @click="x()"> mdi-eye-outline </v-icon>
                </v-btn>
              </a>
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        // Why like this?
        return {};
      },
    },
    img: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      loading: false,
      selection: 1,
      url1: [],
    };
  },

  methods: {
    x(){
      alert('56565')
    },

     addToCart(id) {
      this.$store.dispatch("addToCart", id);
      alert("به سبد خرید اضافه شد")
    },
      addTointerestscart(id) {
      this.$store.dispatch("addTointerestscart", id);
      alert("به علاقمندها اضافه شد")
    },

    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },

    //  addToCart() {
    //   this.$store.dispatch('addToCart', this.$route.params.id)
    // }
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
  computed: {
    imgUrl1() {
      for (let i = 0; i < this.img.length; i++) {
        var x = this.img[0].url;
      }
      return x;
    },
  },
};
</script>

<style lang="scss" >
@import '../../assets/scss/utility/utility.scss';
.product-card-m {
  .v-card__text {
    li{
      color:$color-dark;
      list-style: none;
    }
    * {
      font-size: 1.2em;
    }
    .card-item {
      display: none;
      .items {
        display: flex;
        flex-direction: row-reverse;
        padding: 0;

        .item {
          position: relative;
          &:hover {
            transform: rotate(360deg);
          }
          .link {
            position:absolute;
            z-index: 55;
            padding: 0px 12px;
            .v-btn {
              background-color: darkgreen !important;
            }
          }
        }
      }
    }
  }

  .images{
    h3{
       display: block;
        font-size: 0.8em;
        margin-bottom: 0;
        padding-bottom: 0;
        color: white;
        opacity: 1;
        background-color: rgba(165, 42, 42, 0.726);
        padding: 5px 10px;
        width: 30%;
        position:absolute;
        left: 0;
        top: 40px;
        border-radius: 0px 25px 25px 0px;
        
    }

    .m2{
        display: none;
        font-size: 0.9em;
        margin-bottom: 0;
        padding-bottom: 0;
        color: white;
        opacity: 1;
        background-color: rgba(165, 42, 42, 0.726);
        padding: 5px 10px;
        width: 43%;
        position:absolute;
        left: 0;
        top: 75px;
        border-radius: 0px 25px 25px 0px;
    }
    
  }

  &:hover {

   .m2{
     display: block;
      animation: fade-in4 0.5s ease-out forwards;

   }




    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;

    .v-card__text {
      .price-1 {
        display: none;
      }
      .card-item {
        display: block;
        animation: fade-in 0.5s ease-out forwards;
      }
    }
  }

  @keyframes fade-in {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

       @keyframes fade-in4 {
        from {
          transform: translatex(-100px);
          opacity: 0;
        }
        to {
          transform: translatex(0);
          opacity: 1;
        }

}
}


@media #{$bp-xs} {
 .m2{
   display: block !important;
   animation:none !important;
   
 }

  .v-card__text {
      .price-1 {
        display: none;
      }
      .card-item {
        display: block !important;
        animation: none !important;
      }
    }
}

@media #{$bp-sm} {
.m2{
   display: block !important;
   animation:none !important;
   
 }

  .v-card__text {
      .price-1 {
        display: none;
      }
      .card-item {
        display: block !important;
        animation: none !important;
      }
    }

}
 

@media #{$bp-md} {
}
@media #{$bp-lg} {
}
@media #{$bp-xl} {
}
</style>