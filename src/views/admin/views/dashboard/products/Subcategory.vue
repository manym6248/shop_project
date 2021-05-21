<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-row justify="center">
      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ایجاد زیر دسته</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label="نام ریر دسته"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="blue" @click="add()"
                    > ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">انتخاب مسیر</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <!--مسیر دهی  -->
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-select
                    v-model="categgory"
                    :items="categgory.name"
                    color="pink"
                    label="انتخاب دسته"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>

    <div class="py-3" />

    <base-material-card
      icon="mdi-clipboard-text"
      title="لیست زیر دسته های موجود در دسته انتخابی "
      class="px-5"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">ID</th>
            <th class="primary--text text-center">نام</th>
            <th class="primary--text text-center">ویرایش</th>
            <th class="primary--text text-center">حدف</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{ product.id }}</td>
            <td class="text-center">{{ product.name }}</td>
            <td class="text-center">
              <v-btn   icon  class="my-4" min-width="0" text large>
                <v-icon large> mdi-clipboard-edit-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn   icon  class="my-4" min-width="0" text large>
                <v-icon  large> mdi-delete-empty</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <v-row justify="center">
      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ایجاد زیر دسته</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label=" ویرایش ریر دسته "
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="oreng" @click="add()"
                    >اعمال دویرایش</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
//import axios from 'axios'
export default {
  data() {
    return {
      categgory: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      product: {
        imageUrl: null,
        image: null,
        name: "",
        price: "",
        description: "",
        brand: "",
        categgory: "",
      },
    };
  },
  methods: {
    ////////////
    add() {
      var xr = {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      };

      console.log(xr);
      this.$http.post("/posts", xr).then((res) => console.log(res));
    },
  },
};
</script>
<style lang="scss" >
</style>

