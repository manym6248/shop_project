<template>
  <v-container class="pa-0 pb-5">
    <flickity ref="flickity" :options="flickityOptions"
      class="gallery p-c-bar js-flickity"
     
    >
      <v-col
        class="py-0 pc"
        cols="6"
        sm="6"
        md="3"
        xl="3"
        lg="3"
        v-for="(item, i) in items"
        :key="i"
        style="height: 100%"
      >
        <div class="gallery-cell22">
          <div class="bn">
            <div class="card-a22">
              <div class="card-i2">
                <v-img
                  :src="item.img"
                  style="border-radius: 100px"
                  max-width="65%"
                ></v-img>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </flickity>
  </v-container>
</template>

<script>
import Flickity from 'vue-flickity';
export default {
  components: {Flickity,},
  data() {
    return {
         flickityOptions: {
        wrapAround: true,
       autoPlay:6000,
       groupCells: 2
      },
      items: [
        {
          img: require("../../assets/img/svg/Brand-1.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-2.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-3.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-3.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-5.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-6.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-1.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-2.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-3.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-3.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-5.png"),
        },
        {
          img: require("../../assets/img/svg/Brand-6.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";
.p-c-bar {
  margin: 30px 0px;
  height: 119px;
  justify-content: center;
  .pc {
    padding: 0px 4px;
  }
  .gallery-cell22 {
    width: 100%;
    height: 100%;

    .bn {
      width: 100%;
      height: 100%;
    }
  }

  .flickity-prev-next-button {
    display: none;
    top: 53%;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
  &:hover {
    .flickity-prev-next-button {
      display: block !important;
    }
  }

  .flickity-page-dots {
    bottom: -40px;
    padding-top: 24px;
    .dot {
      width: 12px;
      height: 12px;
      opacity: 1;
      background: transparent;
      border: 2px solid white;
    }

    .dot.is-selected {
      background: white;
    }
  }
  .previous {
    left: 18px;
  }
  .next {
    right: 18px;
  }
}

.card-a22 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .card-i2 {
    margin: 0px auto;
    width: 175px;
    height: 175px;
    border-radius: 100px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .v-image__image {
      filter: invert(1);
    }

    &:hover {
      transition: all 300ms ease 0s;

      .v-image__image {
        filter: invert(0);
      }
    }
  }
}

@media #{$bp-xs} {
  .p-c-bar{
   margin: 30px 50px !important;
 }
}

@media #{$bp-sm} {
 .p-c-bar{
   margin: 30px 50px !important;
 }
}
@media #{$bp-md} {

}
@media #{$bp-lg} {
 
}
@media #{$bp-xl} {
  
}
</style>