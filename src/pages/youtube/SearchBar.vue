<template>
  <div id="SearchBarWrapper">
    <input type="text" v-model="searchText"/>
  </div>
</template>

<script>

import {mapState, mapActions} from "vuex";

export default {
  data(){
    return{}
  },
  computed: {
    searchText:{
      get(){
        return this.$store.state.searchText
      },
      set(value){
        this.$store.dispatch("updateSearchText", value)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  #SearchBarWrapper{
    display: flex;
    justify-content: center;
    padding: 20px;

    input[type=text]{
      width: 70%;
      font-size: 20px;
      padding:5px;
      border: 1px solid #CBCBCB;
    }
  }
</style>

