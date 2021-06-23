<template>
  <div class="body-lgin">
    <v-container tag="section" class="at-16">
      <v-container
        tag="section"
        class="mt-0 px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
      >
        <v-row class="mt-0 px-xl-8 px-lg-8 px-md-2 px-sm-1" justify="center">
          <v-col cols="12" md="7" sm="8" class="px-5">
            <div class="login-card">
              <v-card class="rounded-xl mt-0" height="100%">
                <v-toolbar flat class="cartheader">
                  <v-icon>mdi-account</v-icon>
                  <v-toolbar-title class="font-weight-light mr-1">
                    ثبت نام
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form v-model="isValid"  @submit.prevent="register">
                    <v-text-field
                      v-model="name"
                      :error-messages="nameErrors"
                   
                      label="نام "
                      required
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                        
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      :error-messages="emailErrors"
                      label="ایمیل"
                      required
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                    ></v-text-field>
                    <v-text-field
                      v-model="phone"
                      :error-messages="phoneErrors"
                      label="شماره موبایل"
                      required
                      @input="$v.phone.$touch()"
                      @blur="$v.phone.$touch()"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      
                      required
                      :type="show1 ? 'text' : 'password'"
                       :error-messages="passwordErrors"
                      name="input-10-1"
                      label="رمز عبور"
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

                    <v-btn class="mr-4" color="blue" type="submit" :disabled="!isValid"  > ثبت </v-btn>
                    <v-btn @click="clear"> لغو </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="4" class="px-5 svg1">
            <div class="img-log">
              <v-img
                src="../../assets/img/svg/login/undraw_accept_tasks_po1c (1).svg"
              ></v-img>
            </div>
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
const touchMap = new WeakMap()

export default {
 
 
  // etbar sanji
   mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(2) },
    phone: { required, numeric, minLength: minLength(11), maxLength:maxLength(11) },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    confirmPassword: { sameAsPassword: sameAs("password") },
  },
  //

  data()  {
    return{
     isValid:true,
    show1: false,
    isEditing: true,
    model: null,
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    Submitstatus: null,
    submitted: false,}
  },

  computed: {
    // etbar sanji
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
      !this.$v.phone.minLength && errors.push("شماره تلفن کامل وارد کنید :*********09");
      !this.$v.phone.maxLength && errors.push("شماره بطور صحیح وارد کنید:*********09");
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
    }
    //
  },

  methods: {

       delayTouch($v) {
      $v.$reset()
      if (touchMap.has($v)) {
        clearTimeout(touchMap.get($v))
      }
      touchMap.set($v, setTimeout($v.$touch, 1000))
    },
    

  async register() {
     
      this.$v.$touch();
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          confirmPassword:this.confirmPassword,
        })
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch(err => {
          console.log(err);
        });
    },



 
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
    },
  },

  created(){
    this.$http.get('/user', { headers:{
    'Authorization': 'Bearer $2y$10$MhGprMSqcnijC9DYfehIKu9jvpSjyFFZyBuxSmuG..N8HEGC5AiI.'
  }}).then(
      res=> {console.log(res);}
    )
  
  }
};
</script>




<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";

.body-lgin {
  padding: 0px;
  margin: 0px;
  height: 630px;
  width: 100%;
  background-color: $color-header2;
  padding-top: 23px;
}
.div1 {
  width: 900px;
  margin: auto;
  .v-card {
    border-radius: 5px;
    box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
      15px 15px 15px rgba(0, 0, 0, 0.1),
      inset -50px -50px 50px rgba(255, 255, 255, 0.2),
      inset 50px 50px 50px rgba(0, 0, 0, 0.1);
  }
}
.img-log {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.login-card {
  height: 100%;
}

@media #{$bp-xs} {
  .svg1 {
    display: none;
  }

  .body-lgin {
    padding: 10px;
    height: 600px;
  }
}
@media #{$bp-sm} {
  .body-lgin {
    padding-top: 10px;
    height: 600px;
  }
}
</style>