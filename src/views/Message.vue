<template>
    <div>
        <div role="tabpanel" class="tab-panel active" id="Message">
            <ul class="list-group">
                <li class="list-group-item" v-for="(item, index) in todos" :key="item.id">
                    <!-- <a href="##">{{ item.content }}</a> -->
                    <!-- <router-link to="home/messge/messagedetail">{{ item.content }}</router-link> -->
                    <router-link :to="{ name: 'delmessage', params: { msgid: item.id }, query: { content: item.content } }">{{
                        item.content }}</router-link>
                    <!-- <router-link>{{ item.content }}</router-link> -->
                </li>

            </ul>
            <div class="alert alert-success" role="alert">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            todos: [
                { id: 1, content: '百度' },
                { id: 2, content: '谷歌' },
                { id: 3, content: '尚层' },
            ]
        }
    }
};
</script>

<style lang="scss" scoped></style>
