<template>
    <div>
        <li @mouseenter="isShow=true" @mouseleave="isShow=false" :class="{myClass:isShow}">
            <label>
                <input type="checkbox"  :checked="todo.isOver" :name='todo.content' @click='updayaT'/>
                <span style="color: green;">{{ todo.content }}</span>
            </label>
            <button class="btn btn-danger"  v-show='isShow' @click='deleT'>删除</button>
        </li>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
    name: '',
    props: { 'todo': Object,index:Number},
    // computed: {
    //     isOverValue: {
    //         get() {  return  this.todo.isOver},
    //         set(value) { 
    //             this.todo.isOver = value
    //             console.log(this.todo.isOver)
    //         }
    //     }
    // },
    data(){
        return{
            isShow: false,
        }
    },
    methods:{
        deleT(){
            this.$bus.$emit('deltodo',this.index)
            
        },
        updayaT(){
            PubSub.publish('heihei', this.index)
        }
    }

}
</script>

<style scoped>
.myClass{
    background-color:pink
}
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    /* display: none; */
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>