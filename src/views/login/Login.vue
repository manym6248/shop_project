<template>
<div class="body-lgin">
   <v-container tag="section" class="at-16">
    <v-container
      tag="section"
      class="mt-0 px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
    >
      <v-row class="mt-0 px-xl-8 px-lg-8 px-md-2 px-sm-1" justify="center">
        <v-col cols="12" md="7" sm="6" class="px-5">
          <div class="login-card">
            <v-card class="rounded-xl mt-0" height="100%">
              <v-toolbar flat color="#6c63ff">
                <v-icon color="#fff">mdi-account</v-icon>
                <v-toolbar-title
                  class="font-weight-light mr-1"
                  style="color: #fff"
                >
                  ورود
                </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="loginSubmit">
                  <v-text-field
                    :disabled="!isEditing"
                    v-model="email"
                    label="نام کاربری"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Normal with hint text"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  ></v-text-field>
                  <div class="py-3" />
              <v-btn
                :disabled="!isEditing"
                color="success"
                type="submit"
              
              >
                ورورد
              </v-btn>
                </v-form>
              </v-card-text>

              
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="5" sm="6" class="px-5 svg1">
          <div class="img-log">
            <v-img
              src="../../assets/img/svg/login/undraw_Access_account_re_8spm.svg"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</div>
 
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      show1: false,

      password: "Password",
      email: "",

      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      isEditing: true,
      model: null,
    };
  },
///////////////////
  methods: {
    ...mapActions(["doLogin"]),
    loginSubmit() {
    this.doLogin({
      email: this.email,
      password: this.password
    })
  },

  // //////
  //   login() {
  //     this.$router.push("/admin");
  //   },////

  },
  ////////////////////////
  computed: {
    ...mapState(["loggingIn", "loginError", "loginSuccessful"]),
  },
};
</script>






<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";

.body-lgin{
  padding: 0px;
  margin: 0px;
  height: 80Vh;
  width: 100%;
  background-color:$color-header2;
  padding-top: 20px;
 

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
  .login-card {
    height: 400px;
  }
  .body-lgin{
    padding: 10px;
  }
}
@media #{$bp-sm}{
  .body-lgin{
  padding-top: 10px;
  height: 90Vh;}
}
</style>