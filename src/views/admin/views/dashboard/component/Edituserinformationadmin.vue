<template>
  <div class="body-lgin444  mt-15 mt-xl-0 mt-gl-0 mt-md-0">
    <v-container tag="section" class="at-16">
      <v-container
        tag="section"
        class="mt-0 px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
      >
      
       

        <v-row justify="center" class="ma-0">
          <v-col cols="12" md="12">
            <base-material-card class="pb-10">
              <template v-slot:heading>
                <div class="display-2 font-weight-light">ویرایش اطلاعات</div>

                <div class="subtitle-1 font-weight-light"></div>
              </template>

              <div class="login-card">
                <v-form
                  v-model="isValid"
                  @submit.prevent="updateuser(user.id)"
                  style="height: 100%"
                >
                  <v-row
                    class="mt-3"
                    style="
                      text-align: center;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <v-col cols="4" md="4" lg="3" xl="3"
                      ><v-avatar size="128" color="indigo" alt="عکس پروفایل">
                        <v-icon dark x-large v-if="span1">
                          mdi-account-circle
                        </v-icon>

                        <v-btn
                          width="100%"
                          height="32%"
                          class="ma-0 pa-0 img-btn"
                          color="#999999b8"
                          @click="onPickFile"
                          style="position: absolute; bottom: -1px"
                        >
                          <v-icon dark>mdi-camera-plus-outline</v-icon></v-btn
                        >
                        <img :src="user.img" v-if="span2" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="8" md="8" lg="9" xl="9">
                      <!-- <v-text-field
                        v-model="username"
                        :error-messages="usernameErrors"
                        label=" نام کاربری جدید"
                        required
                        @input="$v.username.$touch()"
                        @blur="$v.username.$touch()"
                      ></v-text-field> -->
                     
                      <v-text-field
                        v-model="name"
                        :error-messages="nameErrors"
                        label=" ویرایش نام و نام خانوادگی "
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                      ></v-text-field>
                      <v-text-field
                    v-model="email"
                    label="ایمیل"
                    :error-messages="emailErrors"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                    </v-col>
                  </v-row>

                  
                  <v-text-field
                    class="pt-lg-3 pt-xl-3 pt-md-1 pt-1"
                    v-model="phone"
                    :error-messages="phoneErrors"
                    label=" ویرایش شماره موبایل "
                    required
                    @input="$v.phone.$touch()"
                    @blur="$v.phone.$touch()"
                    type="number"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    required
                    :type="show1 ? 'text' : 'password'"
                    :error-messages="passwordErrors"
                    name="input-10-1"
                    label=" رمز عبور جدید"
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <v-text-field
                    v-model="confirmPassword"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    :error-messages="confirmPasswordErrors"
                    name="input-10-1"
                    label="تکرار رمز عبور"
                    @input="$v.confirmPassword.$touch()"
                    @blur="$v.confirmPassword.$touch()"
                    counter
                    @click:append="show1 = !show1"
                    required
                  ></v-text-field>
                  <div class="pa-3"></div>
                  <v-textarea
                    class="pt-lg-4 pt-xl-4 pt-md-3 pt-2"
                    v-model="user.biography"
                    auto-grow
                    filled
                    color="deep-purple"
                    label="آدرس"
                    rows="1"
                  ></v-textarea>
                  <div class="pa-1 pa-lg-5 pa-xl-5 pa-md-3"></div>

                  <v-btn class="mr-4 blue" type="submit" :disabled="!isValid">
                    submit
                  </v-btn>
                  <v-btn @click="clear" class="mr-4"> clear </v-btn>

                  <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                  />
                </v-form>
              </div>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  numeric,
} from "vuelidate/lib/validators";
const touchMap = new WeakMap();

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(2) },
    // username: { required, minLength: minLength(4) },
    phone: {
      required,
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: { sameAsPassword: sameAs("password") },
  },

  data() {
    return {
      isValid: true,
      filter: null,
      bio: "",
      span1: true,
      span2: false,
      image: null,
      imageUrl: null,
      show1: false,
      isEditing: true,
      model: null,
      Submitstatus: null,
      submitted: false,
      username: "",
      name:"",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
      
    };
  },

  computed: {
    user() {
      return this.$store.getters.user(this.$route.params.id);
    },
    // etbar sanji
    // usernameErrorsErrors() {
    //   const errors = [];
    //   if (!this.$v.username.$dirty) return errors;
    //   !this.$v.username.minLength && errors.push("نام کاربری باید حداقل 4 حرفی باشد .");
    //   !this.$v.username.required && errors.push("لطفا نام خود را وارد کنید");
    //   return errors;
    // },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength && errors.push("نام باید حداقل 2 حرفی باشد .");
      !this.$v.name.required && errors.push("لطفا نام خود را وارد کنید");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("ایمیل خودرا بطور صحیح وارد کنید");
      !this.$v.email.required && errors.push("لطفا ایمیل خود را وارد کنید");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.minLength &&
        errors.push("شماره تلفن کامل وارد کنید :*********09");
      !this.$v.phone.maxLength &&
        errors.push("شماره بطور صحیح وارد کنید:*********09");
      !this.$v.phone.required &&
        errors.push("لطفا شماره موبایل خود را وارد کنید");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("رمز عبور باید حداقل 8 کاراکتر داشته باشد");
      !this.$v.password.required && errors.push("لطفا رمز خود را وارد کنید");
      return errors;
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("رمز عبور یکسان نیست");
      return errors;
    },
    //
  },

  methods: {
    ////
    delayTouch($v) {
      $v.$reset();
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v));
      }
      touchMap.set($v, setTimeout($v.$touch, 1000));
    },

    async updateuser(id) {
      this.$v.$touch();
      this.$store
        .dispatch("updateuser", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          confirmPassword: this.confirmPassword,
         id
        })
        .then(() => {
        alert("اطلاعات کاربر به روز رسانی شد");
          this.$router.push({ name: "Edituser" });

        })
        .catch((err) => {
          console.log(err);
        });
    },

    ///

    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
    },
    onPickFile() {
      this.$refs.fileInput.click();
      this.span1 = false;
      this.span2 = true;
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
  // watch: {
  //   // "$route.params.id": function (id) {
  //   //   this.user = this.$store.getters.user(id);
  //   //   // this.imgs = this.product.images;
  //   //   // for (let i = 0; i < this.imgs.length; i++) {
  //   //   //   this.bigURL = this.imgs[0].url;
  //   //   // }
  //   // },
  // },

  beforeCreate(){

    this.$http
      .get("user/"+ this.$route.params.id)
      .then((res) => {
          
          
           console.log(res.data.data);
     this.name = res.data.data.name,
    this.email = res.data.data.email,
    this.phone =  res.data.data.phone,
    this.password = res.data.data.password,
    this.confirmPassword =  res.data.data.confirmPassword
      })
      .catch((error) => {
        console.error(error);
      });
  
 
  }
  
};
</script>




<style lang="scss" >
@import "../../../../../assets/scss/utility/utility.scss";

.v-avatar {
  .img-btn {
    display: none;
  }
  &:hover {
    .img-btn {
      display: block;
    }
  }
}

.body-lgin444 {
  padding: 0px;
  margin: 0px;
  height: 765px;
  width: 100%;
}

.login-card {
  height: 100%;
}

@media #{$bp-xs} {
  .login-card {
    height: 450px;
  }
  .body-lgin1 {
    padding: 10px;
  }
}
@media #{$bp-sm} {
  .body-lgin {
    padding-top: 10px;
  }
}
</style>