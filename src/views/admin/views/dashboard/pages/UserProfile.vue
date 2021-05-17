<template>
  <v-container id="user-profile" fluid tag="section" class="my-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ویرایش پروفایل</div>

            <div class="subtitle-1 font-weight-light">
              پروفایلتان را تکمیل کنید
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field label="شرکت (غیرفعال)" disabled />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field class="purple-input" label="نام کاربری" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="آدرس ایمیل" class="purple-input" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="نام" class="purple-input" />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="نام خانوادگی" class="purple-input" />
                </v-col>

                <v-col cols="12">
                  <v-text-field label="آدرس" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="شهر" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field label="استان" class="purple-input" />
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    class="purple-input"
                    label="کد پستی"
                    type="number"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="در باره من"
                    value=""
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="mr-0"> ثبت </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              مدیر عامل شرکت / بنیانگذار شرکت
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">مهرداد</h4>

            <p class="font-weight-light grey--text">
              برای موفقیت باید از 3 مرحله گذشت: ابتدا مورد تمسخر واقع میشوی سپس
              با خشونت به مخالفت با تو میپردازند سرانجام به تو ایمان می آورند
            </p>

            <v-btn color="success" rounded class="mr-0"> دنبال کنید </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //
};
</script>
