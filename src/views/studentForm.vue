<template>
<div class="about">
    <div class="card">
        <div class="card-header text-center headCo">
            <h3 class="mt-1"> <b>Register</b></h3>
        </div>
        <div class="card-body">
            <form class="container-fluid" @submit.prevent="saveData">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-1 ">
                        <label for="">คำนำหน้า</label>
                        <select v-model="fD.stdPrefix" class="form-control" required>
                            <option value="เด็กชาย">เด็กชาย</option>
                            <option value="นาย">นาย</option>
                            <option value="นาง">นาง</option>
                            <option value="นางสาว">นางสาว</option>

                        </select>
                    </div>
                    <div class="col-2 ">
                        <label for="">ชื่อ</label>
                        <input type="text" v-model="fD.stdFName" class="form-control" required>
                    </div>
                    <div class="col-2 ">
                        <label for="">สกุล</label>
                        <input type="text" v-model="fD.stdLName" class="form-control" required>
                    </div>
                    <div class="col-3 ">
                        <label for="">Email</label>
                        <input type="email" v-model="fD.stdEmail" class="form-control" required>
                    </div>
                    <div class="col-2 ">
                        <label for="">BirthDate</label>
                        <input type="date" v-model="fD.BDate" class="form-control" required>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-1"></div>
                    <div class="col-2 ">
                        <label for="">PassW</label>
                        <input type="password" v-model="fD.stdPassw" minlength="8" class="form-control" @input="checkPass" required>
                    </div>
                    <div class="col-2 ">
                        <label for="">ConfirmPassW</label>
                        <input type="password" v-model="fD.stdPassw2" minlength="8" class="form-control" @input="checkPass" required>
                    </div>
                    <div class="col-5 ">
                        <label for="">Addr</label>
                        <textarea v-model="fD.stdAddr" rows="2" class="form-control" required></textarea>
                    </div>
                    <div class="row mt-3">
                        <div class="col-1"></div>

                        <div class="col-2">
                            <label for="">Province</label>
                            <select class="form-select" @change="getDistrict($event)" v-model="fD.stdProvince" required>
                                <option value="" disabled>-เลือกจังหวัด-</option>
                                <option v-for="province in provinces" :key="province.provinceID" :value="province.provinceID">{{ province.provinceThaiName }}</option>
                            </select>
                        </div>
                        <div class="col-2">
                            <label for="">Dictrict</label>
                            <select class="form-select" @change="getSubDistrict($event)" v-model="fD.stdDistrict" required>
                                <option value="" disabled>-เลือกอำเภอ-</option>
                                <option v-for=" D in District" :key="D.districtID" :value="D.districtID">{{ D.districtThaiName }}</option>

                            </select>
                        </div>
                        <div class="col-2">
                            <label for="">SubDictrict</label>
                            <select class="form-select" @change="getZipCode($event)" v-model="fD.stdSubDistrict" required>
                                <option value="" disabled>-เลือกตำบล-</option>
                                <option v-for=" SD in SubDistrict" :key="SD.subDistrictID" :value="SD.subDistrictID">{{ SD.subDistrictThaiName }}</option>

                            </select>
                        </div>
                        <div class="col-2">
                            <label for="">ZipCode</label>
                            <input type="Text" v-model="fD.stdZipCode" class="form-control" readonly>
                        </div>
                        <div class="col-2">
                            <label for="">Tel</label>
                            <input type="tel" v-model="fD.stdPhone" class="form-control">
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-2">
                            <button type="submit" :disabled="disabled"  class="btn form-control"><font-awesome-icon icon="fa-solid fa-save"></font-awesome-icon></button>
                        </div>

                    </div>

                </div>

            </form>
        </div>

    <div class="card-footer">
    <table class="table">
      <thead>
        <tr>
          <th width="20%">email</th>
          <th width="20%">ชื่อสกุล</th>
          <th width="10%">วันเดือนปีเกิด</th>
          <th width="30%">ที่อยู่</th>
          <th width="10%">หมายเลขโทรศัพท์</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="std in students" :key="std.id" value="std.id">
            <td>{{ std.stdEmail }}</td>
            <td>{{ std.stdPrefix+" "+std.stdFName+" "+std.stdLName }}</td>
            <td>{{ std.BDate }}</td>
            <td>{{ std.stdAddr }}</td>
            <td>{{ std.stdPhone }}</td>
            <td>
                <button type="button" class="btn btn-outline-warning" @click="Edit(std)"><font-awesome-icon icon="fa-solid fa-edit" /></button>
                <button type="button" class="btn btn-outline-danger ms-2" @click="Del(std.id)"><font-awesome-icon icon="fa-solid fa-trash" /></button>
            </td>                                           
        </tr>
      </tbody>
    </table>
    
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            fD: {
                stdPrefix: "",
                stdFName: "",
                stdLName: "",
                stdEmail: "",
                BDate: "",
                stdPassw: "",
                stdPassw2: "",
                stdAddr: "",
                stdProvince: "",
                stdDistrict: "",
                stdSubDistrict: "",
                stdZipCode: "",
                stdPhone: "",
            },

            disabled: true,
            provinces: [],
            District: [],
            SubDistrict: [],
            students:[]

        }
    },
    methods: {  
        checkPass() {
            if (this.fD.stdPassw != this.fD.stdPassw2 || this.fD.Passw < 8  ) {
                this.disabled = true
            } else {
                this.disabled = false
            }

        },

        async saveData() {

            await axios({
                    method: "POST",
                    url: "http://localhost:8081/student",
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    data: JSON.stringify(this.fD)
                })
                .then((resp) => {
                    console.log(resp.data);
                    this.fD = {};
                    this.provinces = [],
                    this.District = [],
                    this.SubDistrict = [],
                    this.getStudent()

                })
                .catch((error) => {
                    console.log(error);
                })
                
        },

        async getProvince() {
            await axios({
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: "http://localhost:8081/province"

                })
                .then(resp => {
                    this.provinces = resp.data.data;
                    console.log(this.provinces);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getDistrict(id) {
            console.log(id.target.value)
            await axios({
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: "http://localhost:8081/district/" + id.target.value

                })
                .then(resp => {
                    this.District = resp.data.data;
                    console.log(resp.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getSubDistrict(id) {
            console.log(id.target.value)
            await axios({
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: "http://localhost:8081/subDistrict/" + id.target.value

                })
                .then(resp => {
                    this.SubDistrict = resp.data.data;
                    console.log(resp.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async Del(id) {
            
            await axios({
                    method: "DELETE",
                    url: "http://localhost:8081/student/"+id,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data:{
                        id: id
                    }

                })
                .then(resp => {
                    this.SubDistrict = resp.data.data;
                    console.log(resp.data.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async getStudent(){
                   await axios({
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: "http://localhost:8081/student"

                })
                .then(resp => {
                    this.students = resp.data.data;
                    console.log(this.students);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        getZipCode(item) {
            this.fD.stdZipCode = this.SubDistrict[item.target.selectedIndex].zip_code;
        },
        

    },
    created() {
        this.getProvince()
        this.getStudent()
    }
    // async created(){
    //     this.provinces = await axios.get("http://localhost:8080/province")

    // }

}
</script>

<style>
.headCo {
    background-color: rgb(128, 9, 126);
    color: white;
}

.card {
    padding-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
}

.btn {
    background-color: rgb(128, 9, 126);
    color: white;
}

.btn:hover {
    background-color: aqua;

}
</style>
