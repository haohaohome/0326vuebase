<template>
    <div>
        <Button @click="add">dianji</Button>
        <Button @click="jian">dianji</Button>
        <Button @click="qishuadd">dianji</Button>
        <Button @click="saynadd">dianji</Button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    name: '',
    // data() {
    //     return {
    //         count: 0
    //     }
    // },
    methods: {
        add() {
            this.count++
        },
        jian() {
            this.count--
        },
        qishuadd() {
            if (this.count % 2 == 1) this.count++
        },
        saynadd() {
            setInterval(() => {
                this.count++
            }, 1000)
        }


    }
}
</script>

<style lang="scss" scoped></style>