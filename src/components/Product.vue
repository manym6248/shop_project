<template>
  <v-container fluid class="pa-0">
    <div class="media-header mb-8">
      <h3>رسانه</h3>
      <v-breadcrumbs large :items="items" divider="/"></v-breadcrumbs>
    </div>

    <v-container class="pt-4 pb-3 px-0 mb-4">
      <productPageCard />

      <v-card elevation="0">
        <v-tabs hide-slider class="pt-5">
          <v-tab
            v-for="item in items1"
            :key="item"
            class="tab15 ml-3 rounded-pill"
            active-class="activ-tab"
            >{{ item }}</v-tab
          >
          

          <v-tab-item   transition="scale-transition" class="mt-5 item-tab" >
            <v-card-text class="pa-10">
              <h5>متن پاراگراف</h5>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است ولورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است ولورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                لازم است و
              </p>
            </v-card-text>
          </v-tab-item>
          <v-tab-item   transition="scale-transition" class="mt-5 item-tab">
            <v-card-text class="pa-10">
              <v-card class="ma-0">
                <v-simple-table dense>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td
                          style="width: 50px; , border-left: 1px solid gainsbor;"
                        >
                          {{ item.name }}
                        </td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-card-text>
          </v-tab-item>
          <v-tab-item   transition="scale-transition" class="mt-5 item-tab">
            <v-card-text class="pa-10">
              <v-form>
                <h2 class="mb-10">دیدگاه خود را با ما به اشتراک بگذارید</h2>

                <h3 class="mb-1">نام :</h3>

                <v-text-field
                  label="نام"
                  placeholder="نام خود را وارد کنید"
                  solo
                  background-color="white"
                ></v-text-field>

                <div class="pa-1"></div>
                <h3 class="mb-1">ایمیل :</h3>
                <v-text-field
                  label="ایمیل"
                  solo
                  background-color="white"
                ></v-text-field>
                <div class="pa-1"></div>
                <h3 class="mb-1">دیدگاه شما :</h3>
                <v-textarea
                  solo
                  label="دیدگاه شما"
                  v-model="title"
                  full-width
                ></v-textarea>
                <div class="pa-1"></div>
                <v-btn large color="primary" class="mr-5" type="submit"
                  >ارسال نظر</v-btn
                >
              </v-form>
            </v-card-text>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <ProductBar />
    </v-container>
  </v-container>
</template>


<script>
import ProductBar from "./Bars/ProductBar";
import productPageCard from "../components/ProductCards/productPageCard";
export default {
  components: {
    ProductBar,
    productPageCard,
  },
 
  data() {
    return {
      desserts: [
        {
          name: "وزن",
          calories: 159,
        },
        {
          name: "ابعاد",
          calories: "12*10*50 cm",
        },
        {
          name: "رنگ",
          calories: "آبی, مشکی, سفید",
        },
      ],
      tab: null,
      items1: ["توضیحات", "اطلاعات بیشتر", "نظرات"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: [
        {
          text: "صفحه اصلی",
          disabled: false,
          to: "/",
        },
        {
          text: "رسانه",
          disabled: true,
        },
      ],
      selected: ["Trevor Handsen"],

      title: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";

.item-tab {
  background-color: $color-light2;
}
.tab15 {
  background-color: $color-menu;
  color: $color-light !important ;
  border: none;
  letter-spacing: 0;
  &:hover:after {
    display: none;
  }

  &:after {
    display: none;
  }
}

.activ-tab {
  border-radius: 50px;
  background-color: $color-header;

  border: none;
  letter-spacing: 0;

  &:after {
    display: none;
  }
}
.media-header {
  width: 100%;
  height: 122px;
  background-color: $color-gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  h3 {
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    line-height: 40px;
    padding: 5px 0;
  }
}
.image-h {
  height: 450px;
  width: 100%;
}
</style>