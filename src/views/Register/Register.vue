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
                <v-toolbar flat color="#6c63ff">
                  <v-icon color="#fff">mdi-account</v-icon>
                  <v-toolbar-title
                    class="font-weight-light mr-1"
                    style="color: #fff"
                  >
                    ثبت نام
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <form @submit.prevent="SubmitForm">
                    <v-text-field
                      v-model="person.name"
                      :error-messages="nameErrors"
                      :counter="10"
                      label="نام کاربری"
                      required
                      @input="$v.person.name.$touch()"
                      @blur="$v.person.name.$touch()"
                    ></v-text-field>

                    <v-text-field
                      v-model="person.email"
                      :error-messages="emailErrors"
                      label="ایمیل"
                      required
                      @input="$v.person.email.$touch()"
                      @blur="$v.person.email.$touch()"
                    ></v-text-field>
                    <v-text-field
                      v-model="person.phone"
                      :error-messages="phoneErrors"
                      label="شماره موبایل"
                      required
                      @input="$v.person.phone.$touch()"
                      @blur="$v.person.phone.$touch()"
                    ></v-text-field>
                    <v-text-field
                      v-model="person.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-text-field
                      v-model="person.password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <div class="pa-3"></div>

                    <v-btn class="mr-4" type="submit"> submit </v-btn>
                    <v-btn @click="clear"> clear </v-btn>
                  </form>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="4" class="px-5 svg1">
            <div class="img-log">
              <v-img
                src="../../assets/img/svg/login/undraw_accept_tasks_po1c.svg"
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
  sameAs,
  numeric,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data: () => ({
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    isEditing: true,
    model: null,
    person: {
      name: "",
      password: "Password",
      confirmPassword: "",
      email: "",
      phone: null,
    },

    Submitstatus: null,

    submitted: false,
  }),

  // etbar sanji
  validations: {
    person: {
      name: { required },
      phone: { required, numeric, minLength: minLength(12) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.person.name.$dirty) return errors;
      !this.$v.person.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.person.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.person.email.$dirty) return errors;
      !this.$v.person.email.email && errors.push("Must be valid e-mail");
      !this.$v.person.email.required && errors.push("E-mail is required");
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.person.phone.$dirty) return errors;
      !this.$v.person.phone.minLength &&
        errors.push("phone must be at most 10 characters long");
      !this.$v.person.phone.required && errors.push("phone is required.");
      return errors;
    },
  },

  methods: {
    SubmitForm() {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
    //   if (this.$v.$invalid) {
      
    //   }
    //   else{
          

    //   }

    var x = JSON.stringify(this.person)

     console.log(x);
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
    },
  },
};
</script>




<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";

.body-lgin {
  padding: 0px;
  margin: 0px;
  height: 100vh;
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
.login-card {
  height: 100%;
}

@media #{$bp-xs} {
  .svg1 {
    display: none;
  }
  .login-card {
    height: 450px;
  }
  .body-lgin {
    padding: 10px;
  }
}
@media #{$bp-sm} {
  .body-lgin {
    padding-top: 10px;
    height: 90vh;
  }
}
</style>