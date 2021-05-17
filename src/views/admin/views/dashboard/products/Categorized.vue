<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-row justify="center">
      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ایجاد دسته بندی</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label="نام دسته بندی"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="blue" @click="add()"
                    >دسته بندی جدید را اضافه کن</v-btn
                  >
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
      title=" لیست دسته های موجود"
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
              <v-btn medium color="yellow">ویرایش</v-btn>
            </td>
            <td class="text-center">
              <v-btn medium color="red">حذف</v-btn>
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
            <div class="display-2 font-weight-light">ایجاد دسته بندی</div>

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
      categorized:[],
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
    ////////////
    add() {
      var xr = {
          name:this.product.name
      };

      console.log(xr);
      this.$http.post('/.json',xr).then((res) => console.log(res.config.data));
    },
  
  },
    created(){
       this.$http.get('/.json').then((res) => console.log(res.data));
    }
};
</script>
<style lang="scss" >
</style>

