<template>
  <router-link to="/product/item.id">
    <v-card
      :loading="loading"
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

      <v-img
        height="270px"
        src="../../assets/img/svg/2/undraw_by_my_car_ttge.svg"
      ></v-img>

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
          <h5>ساعت دیواری</h5>
        </div>
        <div class="my-0 mt-1 subtitle-1 price-1">{{ 90000 | currency }}</div>

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
    </v-card>
  </router-link>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
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

<style lang="scss" >
.product-card-m {
  .v-card__text {
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
  }

  &:hover {
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
}
</style>