<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item">{{ this.$route.query.content }}</li>
            <li class="list-group-item">{{ this.$route.params.msgid }}</li>
            <!--<li class="list-group-item">message03</li>
            <li class="list-group-item">message04</li> -->
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped></style>