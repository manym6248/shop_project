<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
    class="mt-10"
  >
    <base-v-component
      heading="لیست فروشگاه"
      link="components/simple-tables"
    />

    <base-material-card
      icon="mdi-clipboard-text"
      title="لیست فروشنده"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              نام
            </th>
            <th class="primary--text">
              استان
            </th>
            <th class="primary--text">
              شهر
            </th>
            <th class="text-right primary--text">
              حقوق
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in persons" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.state}}</td>
            <td>{{item.city}}</td>
            <td class="text-right">
             {{item.salary | currency }}
            </td>
          </tr>

        
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="لیست فروش"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              نام
            </th>
            <th class="primary--text">
              استان
            </th>
            <th class="primary--text">
              شهر
            </th>
            <th class="text-right primary--text">
              حقوق
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in persons" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.state}}</td>
            <td>{{item.city}}</td>
            <td class="text-right">
             {{item.salary | currency }}
            </td>
          </tr>

        
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      persons:[
        {
          id:1,
          name: "مانی",
          state:"اردبیل",
          city:"پارس آباد",
          salary:50000000

          
        },
        {
          id:2,
          name: "مهرداد",
          state:"اردبیل",
          city:"پارس آباد",
          salary:50000000

          
        },
      ]
    }
  },
   filters: {
    currency(value) {
      return (
        new Intl.NumberFormat("fa", { maximumSignificantDigits: 3 }).format(
          value
        ) +
        " " +
        "تومن"
      );
      //new Intl.NumberFormat('fa', { style: 'currency', currency: 'IRR' }).format()
    },}
}
</script>
<style lang="scss" >
.card-title {
    margin-right: 16px !important;
}
thead{
  th{
    font-size: 1.1em !important;
  }
}
</style>