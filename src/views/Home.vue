<template>
    <div>
        <div role="tabpanel" class="tab-panel active" id="home">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                    <!-- <a href="#Message" aria-controls="Message" role="tab" data-toggle="tab">Message</a> -->
                    <router-link to="/home/message" aria-controls="Message" role="tab"
                        data-toggle="tab">Message</router-link>
                </li>
                <li role="presentation">
                    <!-- <a href="#News" aria-controls="News" role="tab" data-toggle="tab">News</a> -->
                    <router-link to="/home/news" ria-controls="News" role="tab" data-toggle="tab">News</router-link>
                </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
                <router-view></router-view>

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>