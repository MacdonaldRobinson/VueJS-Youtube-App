<template>
  <div id="YoutubeApp">
    <SearchBar></SearchBar>
    <div id="PlayerResultsWrapper">
      <Player></Player>
      <SearchResults></SearchResults>
    </div>
  </div>
</template>

<script>

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Player from "./Player";

export default {
  components:{
    SearchBar,
    SearchResults,
    Player
  },
  data(){
    return{}
  },
}
</script>


<style lang="scss" scoped>
  #YoutubeApp{
    display: flex;
    flex-direction: column;

    #PlayerResultsWrapper{
      display: flex;
      flex-direction: row;

      >div{
        flex: 1;
      }
    }
  }
</style>

