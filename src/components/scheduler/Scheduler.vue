<template>

</template>

<script>
    export default {
        name: "Scheduler",
        data: function () {
            return {
                tutorid: this.$route.params.tutorid
            };

        },
        created() {
            console.log("this.tutorid===="+this.tutorid);
        }
    }

</script>

<style scoped>

</style>
