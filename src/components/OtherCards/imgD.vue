<template>
  <v-container fluid class="pa-0">
    <div class="medium-card">
      <v-container class="py-0">
        <div class="row">
          <v-col class="py-0 px-sm-5 px-5 px-lg-3 px-xl-3 " cols="12" lg="5" md="5">
            <div class="text">
              <h3>
                <span class="text-rotator morphext" style="min-height: 265px">
                  خواص آبمیوه
                </span>
              </h3>
              <p class="pr-10">
                آب‌میوه‌ تازه منبع عالی ویتامین‌ها و مواد معدنی است. ویتامین‌ها،
                آنزیم‌هایی را فعال می‌کند که به‌عنوان کاتالیست در هزاران واکنش‌
                شیمیایی که در سراسر بدن رخ می‌دهد، عمل می‌کنند. آنزیم‌ها انرژی
                تولید می‌کنند که برای عمل هضم،جذب و تبدیل غذا به بافت بدن لازم
                است.
              </p>
              <v-btn  large color="colorheader" class="rounded-cycle ml-5 ml-sm-5 ml-md-5 ml-lg-0 ml-xl-0">
               بیشتر بخون ...
              </v-btn>
            </div>
          </v-col>
          <v-col class="py-0" cols="0" lg="7" md="7">
            <v-row class="pa-0 ma-0" justify="center">
              <div class="spaser">
                <v-img
                  height="100%"
                  width="100%"
                  src="../../assets/img/png/product/PngItem_3871270.png"
                ></v-img>
              </div>
            </v-row>
          </v-col>
        </div>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";
.medium-card {
  margin-bottom: 35px;
  padding: 50px 0px;
  height: 484px;
  background-color: $color-menu;

  .spaser {
    height: 100%;
    width: 60%;
  }
  .container {
    height: 100%;
    .row {
      height: 100% !important;
    }
    .text {
      margin: 42px 0px 30px 0px;
      text-align: right;
      color: white;
      h3 {
        font-size: 60px;
        margin-bottom: 30px;
        letter-spacing: -0.7px;
        line-height: 66px;
        font-weight: 500;
      }
      p {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 300;
        font-style: normal;
        font-weight: 400;
        text-transform: none;
        line-height: 1.7;
        letter-spacing: 0;
      }

      .v-btn {
        letter-spacing: 0.5px;
        float: left;
      }
    }
  }

  .v-carousel .v-window-item {
    text-align: center;
    transition: fadeIn;
    animation: fadeIn2 1s ease-in-out !important;
  }
}

@media #{$bp-xs} {
  .carsul-1 {
    padding-top: 0px;
  }

  .delet {
    display: none;
  }
  .carousel-col {
    .v-carousel {
      border-radius: 0px !important ;
    }
  }

  .spaser{
      display: none;
  }
}

@media #{$bp-sm} {
 .spaser{
      display: none;
  }

 
}

@media #{$bp-md} {
.spaser {
    width: 86% !important;
  }
p{
    font-size: 1em !important;
}
}
@media #{$bp-lg} {
}
@media #{$bp-xl} {
}
</style>