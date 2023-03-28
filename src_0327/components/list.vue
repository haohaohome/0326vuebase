<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <item v-for="(comment, index) in coms" :key="index" :comment="comment" :deleteItem="deleteItem" :index="index">
            </item>

        </ul>
    </div>
</template>

<script>
import item from './item.vue';
export default {
    name: '',
    components: {
        item
    },
    props: ['coms', 'deleteItem']

}
</script>

<style  scoped>
.reply {
    margin-top: 0px;
}
</style>