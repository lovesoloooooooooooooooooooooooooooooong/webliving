<template>
    <el-row>
        <BaseCard :card-title = title>
            <ul :slot="title">
                <li>用户名:  {{this.$store.state.userinfo.user.username}}</li>
                <li>昵称: {{this.$store.state.userinfo.user.nickname}}</li>
                <li>总消费课时: {{this.$store.state.userinfo.user.total_number_of_classes}}</li>
                <li>账户余额: {{this.$store.state.userinfo.user.account_balance}}</li>
                <li>赠送课时: {{this.$store.state.userinfo.user.gift_balance}}</li>
                <li>课程: {{this.$store.state.usercourse_name}}</li>
            </ul>

        </BaseCard>
    </el-row>
</template>

<script>
    import BaseCard from "./BaseCard";
    export default {
        name: "InfoCard",
        props : {
            title: '',
        },
        components: {
            BaseCard
        },
    }
</script>

<style scoped>

</style>
