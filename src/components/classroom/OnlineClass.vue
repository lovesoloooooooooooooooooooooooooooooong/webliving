<template>
    <div id="root1"></div>
</template>
<script src="https://download.agora.io/edu-apaas/release/edu_sdk_1.1.5.10.js"></script>
<script>
    export default {
        name: "OnlineClass"
    }
    AgoraEduSDK.config({
        // 此处替换成你的 App ID
        appId: "a6f19785b43d46d08ac412a2871b8ede",
    })
    AgoraEduSDK.launch(
        document.querySelector("#root1"), {
            // 此处替换成你的 RTM Token
            rtmToken: "006a6f19785b43d46d08ac412a2871b8edeIABW2spTly3ywyJ5XTsX/9I3UPK6Nr/lMXRp1wO6h+aT90sKslUAAAAAEACKNG8KEKGtYQEA6AMQoa1h",
            // 请确保此次的用户 ID 和你在生成临时 RTM Token 时使用的用户 ID 保持一致
            userUuid: "001",
            userName: "teacher",
            roomUuid: "321",
            roomName: "demo-class",
            roleType: 1,
            roomType: 0,
            pretest: true,
            language: "en",
            startTime: new Date().getTime(),
            duration: 60 * 30,
            courseWareList: [],
            listener: (evt) => {
                console.log("evt", evt)
            }
        }
    )
</script>


<style scoped>
    #root1 {
        width: 100%;
        height: 100%;
    }

</style>
