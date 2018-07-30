<template>
  <div id="ResultsWrapper">
    <ul>
      <li v-for="searchResult in searchResults" :key="searchResult.etag">
        <a :href="'https://www.youtube.com/watch?v='+searchResult.id.videoId" v-on:click.prevent="updateSelectedItem(searchResult)" target="_blank">
          <div class="thumbWrapper">
            <img :style="'background-image:url('+searchResult.snippet.thumbnails.default.url+')'">
          </div>
          <div class="copyWrapper">
            <h3>{{searchResult.snippet.title}}</h3>
            <p>{{searchResult.snippet.description}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  data(){
    return{}
  },
  computed:{
    searchResults(){
      return this.$store.state.searchResults;
    }
  },
  methods:{
    ...mapActions(['updateSelectedItem'])
  }
}
</script>


<style lang="scss" scoped>
  #ResultsWrapper{

    ul{
      list-style-type: none;

      li{

        a{
          display: flex;
          flex-direction: row;
          text-decoration: none;

          img{
            width: 200px;
            height:100px;
            display: inline-block;
            background-size: cover;
          }

          .copyWrapper{
            color: #87898B;
            padding: 0 10px;

            h3{
              color: #181818;
            }
          }
        }
      }

    }

  }
</style>

