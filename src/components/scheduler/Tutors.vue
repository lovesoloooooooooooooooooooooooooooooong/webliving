<template>
    <el-row style="margin-top: 15px ; margin-left: 20px; margin-right: 20px">
        <el-col :span=" 8" v-for="tutor in tutors" :key="tutor.user">
            <el-card shadow="always">
                <el-row>
                    <el-col :span="14" :offset=5>
                        <img class="img-circle" :src="img_header + tutor.avatar" />
                    </el-col>
                </el-row>
                <el-row>
                    <p style="font-size: 18px; align-content: center;color: #39afff"> {{ tutor.nickname}}</p>
                </el-row>
                <el-row type="flex" justify="start">
                    <p class="title_style">总授课数 ： <label style="color: #39afff; margin-right: 10px">    {{tutor.total_number_of_classes}}</label></p>
                </el-row>
                <el-row type="flex" justify="start">
                    <p class="title_style">老师评分 :</p>
                    <el-rate style="margin-left: 5px; margin-top: 3px" disabled text-color="#ff9900" v-model=tutor.rating></el-rate>
                </el-row>
                <el-row type="flex" justify="start">
                    <p class="title_style">可授课程 :</p>

                    <label v-for="course in tutor.course" style="color: #39afff; margin-right: 10px; margin-left: 5px">
                        {{ course.course_name }}
                    </label>
                </el-row>
                <el-row style="margin-top: 10px">
                    <el-col :span="8" :offset="8"> <el-button @click="gotoScheduler(tutor.user)" type="primary">约 课</el-button></el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import {networkrequest} from "../../network/networkrequest";
    import apiName from "../../network/apiurl";
    import TutorModel from "../../model/tutormodel";

    export default {
        name: "Tutors",
        created: function () {
            this.getTutorList();
        },
        data: function(){
            return {
                tutors: [],
                img_header: apiName.img_url
            }
        },
        methods: {
            getTutorList: function() {
                networkrequest({ //获取老师信息储存到数组
                    url: apiName.tutors_api,
                    method: 'GET',
                    headers:{
                        'Authorization': 'Token ' + this.$store.state.user_token
                    }
                }).then(res => {
                    this.tutors = res.data;
                    console.log(this.tutors);
                }).catch(error =>{
                    console.log(error.response);
                })
            },


            gotoScheduler: function (tutorid) {
                console.log(tutorid);
                this.$router.push({ name: 'Scheduler', params: { tutorid: tutorid }})
            }
        }
    }
</script>

<style scoped>
 .img-circle {
     width: 80%;
     height: 80%;
     border-radius:50%;
 }
 .title_style {
     margin-top: 0px;
     margin-bottom: 5px;
     font-size: 16px;
 }
</style>
