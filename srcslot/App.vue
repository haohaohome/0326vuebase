<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header @addTodos='addTodos'></Header>
            <List :todos="todos" ></List>
            <Footer :todos="todos" :deletea='deletea'></Footer>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import List from './components/List.vue';
import PubSub from 'pubsub-js'
export default {
    name: '',
    data() {
        return {
            todos: [
                { id: 1, content: '抽烟', isOver: false },
                { id: 2, content: '喝酒', isOver: false },
                { id: 3, content: '打球', isOver: true }
            ]
        }
    },
    components: {
        Header,
        List,
        Footer
    },
    mounted(){
        this.$bus.$on('deltodo',this.deltodo)
        PubSub.subscribe('heihei',this.updataOne)
    },
    methods:{
        addTodos(obj){
            this.todos.unshift(obj);
        },
        deltodo(index){
            this.todos.splice(index,1)
        },
        deletea (){
            this.todos=  this.todos.filter(item=>!item.isOver)
        },
        updataOne(msg,index){
            this.todos[index].isOver=!this.todos[index].isOver
        }
    }
}
</script>

<style  scoped>
.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>