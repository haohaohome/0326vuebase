<template>
    <div>
        <h2>我爱你赵丽颖</h2>
        <button @click="count++">爱了{{ count }}次赵丽颖</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style  scoped>
h2 {
    color: pink;
}
</style>