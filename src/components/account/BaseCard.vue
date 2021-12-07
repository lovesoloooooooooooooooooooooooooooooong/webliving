<template>
    <el-card shadow="always">
        <div class="titleclass">
            {{ cardTitle }}
        </div>

<!--            {{'列表内容 ' + o }}-->
        <slot :name="cardTitle" > </slot>


    </el-card>
</template>

<script>

    export default {
        name: "BaseCard",
        props:{
            cardTitle: '',
        },
    }
</script>

<style scoped>
 .titleclass {
     font-size: 16px;
     color: #39afff;
 }
</style>
