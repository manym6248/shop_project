<template>
  <div class="body-lgin1 mt-15 mt-xl-0 mt-gl-0 mt-md-0">
    <v-container tag="section" class="at-16">
      <v-container
        tag="section"
        class="mt-0 px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
      >
        <v-row justify="center">
          <v-col cols="12" md="12">
            <base-material-card>
              <template v-slot:heading>
                <div class="display-2 font-weight-light">ثبت کاربر جدید</div>

                <div class="subtitle-1 font-weight-light"></div>
              </template>

              <div class="login-card">
                <form @submit.prevent="SubmitForm">
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
                        
                        <v-icon dark x-large v-if="span1"> mdi-account-circle </v-icon>

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
                        <img :src="imageUrl" v-if="span2" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="8" md="8" lg="9" xl="9">
                      <v-text-field
                        v-model="person.name"
                        :error-messages="nameErrors"
                        :counter="10"
                        label="نام کاربری"
                        required
                        @input="$v.person.name.$touch()"
                        @blur="$v.person.name.$touch()"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-text-field
                    v-model="person.email"
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
                  <v-btn @click="clear" class="mr-4"> clear </v-btn>

                  <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                  />
                </form>
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
  sameAs,
  numeric,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  data: () => ({
    span1: true,
    span2: false,
    image: null,
    imageUrl: null,
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      password: (v) =>
        !!(v || "").match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
        ) ||
        "Password must contain an upper case letter, a numeric character, and a special character",
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
    // emailErrors() {
    //   const errors = [];
    //   if (!this.$v.person.email.$dirty) return errors;
    //   !this.$v.person.email.email && errors.push("Must be valid e-mail");
    //   !this.$v.person.email.required && errors.push("E-mail is required");
    //   return errors;
    // },
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

      var x = JSON.stringify(this.person);

      console.log(x);
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
    },
    onPickFile() {
      this.$refs.fileInput.click();
      this.span1 =false;
      this.span2=true;
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

.body-lgin1 {
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 100%;
  //   background-color: $color-header2;
  padding-top: 20px;
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