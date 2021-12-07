<template>
    <el-row>
        <BaseCard :card-title = title>

        </BaseCard>
    </el-row>
</template>

<script>import BaseCard from "./BaseCard";
    export default {
        name: "TableCard",
        props : {
            title: '',
        },
        components: {
            BaseCard
        }
    }
</script>

<style scoped>

</style>
