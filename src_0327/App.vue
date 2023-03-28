<template>
    <div>
        <div>
            <Header></Header>
            <div class="container">
                <Add :addItem="addItem"></Add>
                <List :coms="comments" :deleteItem="deleteItem"></List>

            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Add from './components/Add.vue';
import List from './components/list.vue';
export default {
    name: '',
    components: {
        Header,
        Add,
        List
    },
    data() {
        return {
            comments: [
                { id: 1, content: 'Vuelishi', username: '张三' },
                { id: 2, content: 'Vue优秀', username: '小三' },
                { id: 3, content: 'Vue牛鼻', username: '大三' },
                { id: 4, content: 'Vue还行', username: '刘成' }

            ]
        }
    },
    methods: {
        addItem(content) {
            this.comments.unshift(content)
        },
        deleteItem(index) {
            this.comments.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped></style>