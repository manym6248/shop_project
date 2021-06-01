<template>
  <v-container fluid class="ma-0 pa-3" style="height: 100%">
    <router-link :to="{ name: 'Product', params: { id: item.id } }">
    <div class="card">
      <v-row class="ma-0" style="height: 100%">
        <v-col cols="4" class="pa-0 py-4">
          <div class="image-card">
            <v-img
              class="rounded"
              height="114px"
              :src="imgUrl1"
            ></v-img></div
        ></v-col>
        <v-col cols="8" class="pa-0"
          ><div class="text">
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
                <h5>{{item.name}}</h5>
              </div>
              <div class="my-0 mt-1 subtitle-1 price-1">
                {{ item.price | currency }}
              </div>

              <div class="card-item">
                <ul class="items">
                  <li class="item">
                    <a href="#">
                      <v-btn class="mx-2" fab dark x-small color="pink">
                        <v-icon dark> mdi-cart-outline </v-icon>
                      </v-btn>
                    </a>
                  </li>
                  <li class="item">
                    <a href="#">
                      <v-btn class="mx-2" fab dark x-small color="pink">
                        <v-icon dark> mdi-heart </v-icon>
                      </v-btn>
                    </a>
                  </li>
                  <li class="item">
                    <a href="#">
                      <v-btn class="mx-2" fab dark x-small color="pink">
                        <v-icon dark> mdi-eye-outline </v-icon>
                      </v-btn>
                    </a>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </div></v-col
        >
      </v-row>
    </div>
    </router-link>
  </v-container>
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
   computed: {
    imgUrl1() {
      for (let i = 0; i < this.img.length; i++) {
        var x = this.img[0].url;
      }
      return x;
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
};
</script>

<style lang="scss" scoped  >
@import '../../assets/scss/utility/utility.scss';
.card {
  height: 160px;
  .card-item {
    display: none;
    .items {
      display: flex;
      flex-direction: row-reverse;
      padding: 0;

      .item {
        &:hover {
          transform: rotate(360deg);
        }
        .link {
          padding: 0px 12px;
          .v-btn {
            background-color: darkgreen !important;
          }
        }
      }
    }
  }

  &:hover {
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
}

.image-card {
  @extend %wh;
}
.text {
@extend %wh;
}
</style>