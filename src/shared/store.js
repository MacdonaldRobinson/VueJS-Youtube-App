import Vue from 'vue';
import Vuex from 'vuex';
import _ from "lodash";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict:true,
  state:{
    searchText: "",
    searchResults: [],
    selectedItem: null
  },
  mutations:{
    updateState(state, newState){

      _.assign(state, newState);

      console.log("rab mutation updateState");
    }
  },
  actions:{
    updateSearchText(context, value){

      fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAblJd9rnIoUlh34RA50y1Ky-DrgGIMXF8&q="+value).then(res=>{
        res.json().then(data=>{

          const newState = {
            searchResults: data.items
          }

          context.commit("updateState", newState);

        })
      });

      const newState = {
        searchText: value
      }

      context.commit("updateState", newState);
    },
    updateSelectedItem(context, value){

      const newState = {
        selectedItem: value
      }

      context.commit("updateState", newState);
    }
  }
});

export default store;
