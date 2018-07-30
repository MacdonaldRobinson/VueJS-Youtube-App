<template>
  <div>
    <ul id="MainNav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
  #MainNav{
    display: flex;
    list-style-type: none;
    background-color: #333B41;
    color: #fff;
    font-family:Georgia, 'Times New Roman', Times, serif;

    li{
      flex: 1;
      display: flex;
      justify-content: center;

      a{
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        display: block;
        padding: 20px;

        &:hover{
          background-color: #525B62;
          transition: all 0.5s;
        }

      }
    }
  }
</style>

