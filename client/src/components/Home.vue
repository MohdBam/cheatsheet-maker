<template>
  <div>
      <v-btn :to="`/categories/${category.id}`" v-for="category in categories" :key="category.id" :style="`background: url('${category.image}')`" class="category">
        <span>{{category.name}}</span>
      </v-btn>
      <v-btn to="/add" class="category" color="indigo" dark>Add
        <v-icon dark right large>add_circle</v-icon>
      </v-btn>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService.js'
export default {
  data() {
    return {
      categories: []
    };
  },
  async mounted(){
    try{
    this.categories = (await CategoryService.getAll()).data
    
    }
    catch(err){
      console.log(err)
    }
  }
};
</script>

<style scoped>
.category{
  float: left;
  font-size: 24px;
  width:150px;
  height:200px;
  margin: 10px;
}

span{
  font-size: 24px !important;
  background: #3f51b5;
  white-space: initial;
  width: 150px;
  margin-bottom: 0px;
  color: white;
  position: absolute;
  bottom: 0;
  opacity: 0.9;
  transition: opacity 0.5s;
}

.category:hover span{
  opacity: 1;
}


.edit-icon{
  position: relative;
  float: right;
  top:0px;
}


</style>
