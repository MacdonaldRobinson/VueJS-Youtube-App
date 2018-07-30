<template>
  <div id="PlayerWrapper">
    <iframe :src="'https://www.youtube.com/embed/'+selectedItem.id.videoId"></iframe>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  data(){
    return{}
  },
  computed:{
    ...mapState(['selectedItem'])
  }
}
</script>


<style lang="scss" scoped>
  #PlayerWrapper{

    iframe{
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
</style>

