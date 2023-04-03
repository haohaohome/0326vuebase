<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox"  v-model='isCheckall'/>
        </label>
        <span>
            <span>已完成{{overNum}}</span> / 全部{{allNum}}
        </span>
        <button class="btn btn-danger" @click='delea'>清除已完成任务</button>
    </div>
</template>

<script>
export default {
   name:'',
   props: ['todos','deletea'],
   computed:{
    allNum()
    {
        return this.todos.length
    },
    overNum(){
        return this.todos.reduce((prev,item)=>{
            if(item.isOver){
                prev+=1
            }
            return prev
        },0)
    },
    isCheckall:{
       get(){ return this.overNum===this.allNum&&this.allNum>0},
       set(val){
        this.todos.forEach(item=>item.isOver=val)
       },
    }
},
methods:{
    delea(){
       this.deletea()
    }
}

}
</script>

<style scoped>
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>