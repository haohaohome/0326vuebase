<template>
  <div class="row">
    <h2 v-if="isFrist">欢迎来搜索</h2>
    <h2 v-else-if="isLoading">搜索中</h2>
    <h2 v-else-if="errMsg">请求失败</h2>

    <div v-else class="card" v-for="(item, index) in users" :key="item.username">
      <a :href="item.userurl" target="_blank">
        <img :src="item.useravatar" style='width: 100px' />
      </a>
      <p class="card-text">
        {{ item.username }}

      </p>
    </div>

  </div>
</template>

<script>
import axios from "axios"


export default {
  name: '',
  // data() {
  //   return {
  //     isFrist: true,
  //     isLoading: false,
  //     errMsg: '',
  //     users: []
  //   }
  // }, mounted() {
  //   this.$bus.$on('searchajax', this.searchajax)
  // },
  // methods: {
  //   searchajax(keyword) {
  //     this.isFrist = false
  //     this.isLoading = true
  //     axios({
  //       url: ' https://api.github.com/search/users',
  //       method: 'get',
  //       params: {
  //         q: keyword,

  //       }
  //     }).then(response => {
  //       this.users = response.data.items.map(item => ({
  //         username: item.login,
  //         useravatar: item.avatar_url,
  //         userurl: item.url

  //       }))
  //       this.isLoading = false
  //       console.log(this.users.useravatar)
  //     }).catch(error => {
  //       this.isLoading = false
  //       this.errMsg = error
  //       console.log(error)
  //     })
  //   }
  // }
}  
</script>

<style  scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>