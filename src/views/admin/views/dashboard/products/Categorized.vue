<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <!-- <v-row justify="center">

      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light"> ویرایش دسته بندی</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label=" ویرایش دسته بندی"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="oreng" @click="add()"
                    >ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row> -->

    <div class="py-8 py-lg-0 py-xl-0 py-md-0"></div>

    <v-row justify="center">
      <v-col cols="12">
        <base-material-card class="colorheader2">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">دسته</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <div class="py-3"></div>
          <base-material-card
            icon="mdi-clipboard-text"
            title=" ایجاد دسته بندی"
          >
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="8" class="my-5">
                    <v-text-field
                      label="نام دسته بندی"
                      required
                      v-model="newCategoyname"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4" class="my-7">
                    <v-btn large color="blue" @click="newCategoy()">ثبت</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </base-material-card>
          <!--  -->
          <!--مسیر دهی  -->

          <div class="py-3" />

          <base-material-card
            icon="mdi-clipboard-text"
            title=" لیست دسته های موجود"
            class="px-5"
          >
            <v-simple-table>
              <thead>
                <tr>
                  <th class="primary--text text-right" style="width: 1%">
                    شناسه
                  </th>
                  <th class="primary--text text-right">نام</th>

                  <th class="primary--text text-left pl-10">عملیات</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, i) in categories" :key="i">
                  <td class="text-right" v-if="item.parent_id === 0">
                    {{ item.id }}
                  </td>
                  <td class="text-right" v-if="item.parent_id === 0">
                    {{ item.name }}
                  </td>

                  <td
                    class="text-center text-left pl-4"
                    v-if="item.parent_id === 0"
                  >
                    <v-btn
                      class="my-4 removebtn-h float-left"
                      icon
                      min-width="0"
                      text
                      large
                      @click="removecategory(item.id)"
                    >
                      <v-icon large> mdi-delete-empty</v-icon>
                    </v-btn>
                    <!--  -->
                    <div class="text-center">
                      <v-btn
                        class="my-4 edit-h float-left"
                        icon
                        min-width="0"
                        text
                        large
                        @click.capture="goedit(item.id)"
                      >
                        <v-icon large> mdi-pencil-outline </v-icon>
                      </v-btn>
                    </div>
                    <!--  -->
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </base-material-card>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12"> </v-col>
      <v-col cols="12">
        <base-material-card class="colorheader2">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">زیر دسته</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <div class="py-3"></div>
          <base-material-card
            icon="mdi-directions-fork"
            title="ایجاد زیر دسته "
            class="px-5"
          >
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" class="mt-5">
                    <v-select
                      v-model="Creationcateggory"
                      :items="categories1"
                      label="انتخاب دسته"
                      item-value="id"
                      item-text="name"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <div class="py-3" />
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="8" class="my-5">
                    <v-text-field
                      label="ایجاد زیر دسته جدید  برای دسته انتخابی"
                      required
                      v-model="newSubcCategoy"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4" class="my-7">
                    <v-btn large color="blue" @click="newSubCategoy1()">
                      ثبت</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </base-material-card>

          <!--مسیر دهی  -->
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-select
                    v-model="categgory"
                    :items="categories1"
                    label="انتخاب دسته"
                    item-value="id"
                    item-text="name"
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <div class="py-3" />

          <base-material-card
            icon="mdi-clipboard-text"
            title="لیست زیر دسته های موجود در دسته انتخابی "
            class="px-5"
          >
            <v-simple-table>
              <thead>
                <tr>
                  <th class="primary--text text-right" style="width: 1%">
                    شناسه
                  </th>
                  <th class="primary--text text-right">نام</th>

                  <th class="primary--text text-left pl-4">عملیات</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in subcategory" :key="item.id">
                  <td text-right>{{ item.id }}</td>
                  <td class="text-right">{{ item.name }}</td>

                  <td class="text-center">
                    <v-btn
                      icon
                      elevation="0"
                      class="removebtn-h my-4 float-left"
                      min-width="0"
                      text
                      large
                      @click="removesubcategory(item.id)"
                    >
                      <v-icon large> mdi-delete-empty</v-icon>
                    </v-btn>

                    <v-btn
                      class="my-4 edit-h float-left"
                      icon
                      min-width="0"
                      text
                      large
                      @click.capture="goeditsubcategory(item.id)"
                    >
                      <v-icon large> mdi-pencil-outline </v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </base-material-card>
        </base-material-card>
      </v-col>
    </v-row>

    <div class="py-3" />
  </v-container>
</template>


<script>
//import axios from 'axios'
export default {
  props: {
    headers: {
      //Expects compulsory Array
      type: Array,
    },
  },
  data() {
    return {
      dialog: false,
      categgory: {},
      Creationcateggory: {},
      subcategory: [],

      newCategoyname: null,
      newSubcCategoy: null,
      product: {
        name: "",
        price: "",
        description: "",
        brand: "",
        categgory: "",
      },
    };
  },
  methods: {
    async newCategoy() {
      this.$store
        .dispatch("newCategoy", {
          name: this.newCategoyname,
        })
        .then((res) => {
          alert("با موفقیت اضافه شد");
          // ادرس گرفتن دسته بندی هارو اینجا صداد بز ن 
          this.categories.push(res.data.data);
           this.newCategoyname = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async newSubCategoy1() {
      this.$store
        .dispatch("newSUBCategoy", {
          name: this.newSubcCategoy,
          id: this.Creationcateggory,
        })
        .then(() => {
          alert("با موفقیت اضافه شد");
          this.newSubcCategoy = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },

    ////
    toggle(id) {
      for (const item of this.categories) {
        if (id === item.id) {
          this.dialog = !this.dialog;
        }
      }
    },
    ////////////

    removecategory(itemId) {
      this.$store.dispatch("removecategory", itemId);
    },
    removesubcategory(itemId) {
      this.$store.dispatch("removecategory", itemId);

      for (const item of this.subcategory) {
        if (item.id === itemId) {
          this.subcategory = this.subcategory.filter((n) => {
            return n != item;
          });
        }
      }
    },

    goedit(id) {
      this.$router.push("/products/subcategory/" + id);
    },
    goeditsubcategory(id) {
      this.$router.push("/products/editsubcategory/" + id);
    },
  },
  ////////////
  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
    categories1() {
      return this.$store.getters.categories1;
    },
  },
  ///////
  created() {
    this.$http.get("/category").then((res) => {
      this.$store.dispatch("fetchcategory", res.data.data);
    });
  },
  watch: {
    categgory: function (val) {
      this.subcategory = [];
      for (const item of this.categories) {
        if (item.parent_id === val) {
          this.subcategory.push(item);
        }
      }
    },
  },
};
</script>
<style lang="scss" >
@import "../../../../../assets/scss/utility/utility.scss";
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
      color: rgb(3, 3, 214) !important;
    }
  }
}

.dialog {
  position: absolute;
}
</style>

