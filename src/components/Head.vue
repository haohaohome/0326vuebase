<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyword" />
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      keyword: '',
    }
  },
  methods: {
    search() {
      let keyword = this.keyword;
      if (keyword.trim()) {
        // this.$bus.$emit('searchajax', keyword)
      } else {
        alert('请输入关键词搜素')
      }
      this.keyword = ''
    }
  }
}
</script>

<style  scoped></style>