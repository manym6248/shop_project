<template>
  <div class="body-lgin2">
    <v-container tag="section" class="at-16">
      <v-container
        tag="section"
        class="mt-0 px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
      >
         
    <v-alert
    v-if="error"
      outlined
      type="error"
      text
    >
    ایمیل و یا رمز عبور وارد شده صحیح نیست !
    </v-alert>
        <v-row class="mt-0 px-xl-8 px-lg-8 px-md-2 px-sm-1" justify="center">
          <v-col cols="12" md="7" sm="6" class="px-5">
            <div class="login-card2">
              <v-card class="rounded-xl mt-0" height="100%">
                <v-toolbar flat class="cartheader">
                  <v-icon>mdi-account</v-icon>
                  <v-toolbar-title class="font-weight-dark mr-1">
                    ورود
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="loginSubmit">
                    <v-text-field
                      :disabled="!isEditing"
                      v-model="email"
                      label="ایمیل"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="کلمه عبور"
                      hint=""
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <div class="py-3" />
                    <v-btn  color="success" type="submit">
                      ورورد
                    </v-btn>
                    <div class="gotopage">
                      <router-link to="/register" tag="li" class="item"
                        ><a class="link"> ثبت نام</a>
                      </router-link>
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="6" class="px-5 svg1">
            <div class="img-log">
              <v-img
                src="../../assets/img/svg/login/undraw_Access_account_re_8spm (1).svg"
              ></v-img>
            </div>
          </v-col>
        </v-row>


      </v-container>
    </v-container>
  </div>
  
</template>

<script>


export default {
  data() {
    return {
      error:false,
      show1: false,

      password: "",
      email: "",

    
      isEditing: true,
      model: null,
    };
  },
  ///////////////////
  methods: {
     loginSubmit() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password,
      })
        .then(() => {
          // console.log(response);
          this.$router.push({ name:'user' })
        })
        .catch(
          this.error = true
        )
    }
  },
  ////////////////////////
  computed: {
 
  },
};
</script>






<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";

.gotopage {
  position: absolute;
  bottom: 10px;
  left: 20px;
  padding: 10px;
  .item{
    list-style: none;

    .link{
      font-size: 1.2em;
    }
  }
}

.body-lgin2 {
  padding: 0px;
  margin: 0px;
  height: 580px;
  width: 100%;
  background-color: $color-header2;
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
.login-card2 {
  height: 100%;
}

@media #{$bp-xs} {
  .svg1 {
    display: none;
  }
  .login-card2 {
    height: 380px;
}


  .body-lgin2 {
    padding: 10px;
   
  }
}
@media #{$bp-sm} {
  .body-lgin {
    padding-top: 10px;
   
  }

    .login-card2 {
    height: 395px;
}
}
</style>