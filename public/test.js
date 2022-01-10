
// var userUuid1 = '1'

AgoraEduSDK.config({
        // 此处替换成你的 App ID
        appId: "a6f19785b43d46d08ac412a2871b8ede",
    })
AgoraEduSDK.launch(
    document.querySelector("#root1"), {
        // 此处替换成你的 RTM Token
        rtmToken: "006a6f19785b43d46d08ac412a2871b8edeIAAnAsmW//gLFFws9HMXhawmieIhgMtdpGhr6+B36pZeAfFbu8wAAAAAEABqdSGNjrraYQEA6AOOutph",

        // 请确保此次的用户 ID 和你在生成临时 RTM Token 时使用的用户 ID 保持一致
        userUuid: "002",
        // userUuid: "001",
        userName: "kc",
        roomUuid: "321",
        roomName: "demo-class",
        roleType: 1,
        roomType: 2,
        listener:"ready",
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
