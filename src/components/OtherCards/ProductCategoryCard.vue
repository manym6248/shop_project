<template>
    <div class="card-a">
        <div class="card-i">
            <v-img :src="item.img" style=" border-radius: 100px"></v-img>
            </div>  
        <div class="card-t">
               <router-link
           
            :key="item.id"
            :id="item.id"
            :to="item.to"
            tag="li"
            class="item"
            active-class="active"
            ><a class="link"
              >
              {{ item.text }}</a
            >
          </router-link>
        </div>
    </div> 
</template>

<script>
    export default {
        props:['item']
        
    }
</script>

<style lang="scss" >
 @import '../../assets/scss/utility/utility.scss';
.card-a{
 @extend %wh;
    display: flex;
    flex-direction: column;
   

    .card-i{
        margin: 0px auto;
        width: 175px;
        height: 175px;
        border-radius: 100px;
        background-color:white;
        border:  2px dashed green;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
   
      &:hover{
transition: all 300ms ease 0s;

      }
    }
    .card-t{
        list-style: none;
        margin-top: 14px;
        .item{
            text-align: center;
            .link{
                color: #000;
            }
        }
    }
}




</style>