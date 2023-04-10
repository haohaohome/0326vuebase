<template>
    <div>
   <div class="container">
        <div class="page-header">
            <!-- <h1>路由组件的练习</small></h1> -->
             <!-- header 非路由组件-->
             <!-- <Header></Header> -->
             <Header></Header>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Nav tabs -->
            <ul class="nav nav-stacked col-md-6" role="tablist">
                <li role="presentation" class="active">
                    <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a> -->
                    <!-- <router-link  to="/home" aria-controls="home" role="tab" data-toggle="tab">Home</router-link>-->
                    <router-link to="/home" aria-controls="home" role="tab" data-toggle="tab">Home</router-link> 
                    </li>
                <li role="presentation">
                    <!-- <a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a> -->
                    <router-link to="/about" aria-controls="About" role="tab" data-toggle="tab"> About</router-link>
                </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content col-md-6">
              <router-view></router-view>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import Header from './components/Header.vue';
    export default {
  components: { Header },
        name:'',
        comments:{
            Header
        }

    }
</script>

<style  scoped>

</style>