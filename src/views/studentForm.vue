<template>
  <div class="about">
    <div class="card">
        <div class="card-header text-center headCo">
            <h3 class="mt-1"> <b>Register</b></h3>
        </div>
        <div class="card-body">
    <form class="container-fluid" >
    <div class="row">
        <div class="col-2 ">
            <label for="">คำนำหน้า</label>
            <input type="text" v-model="stdPrefix" class="form-control" >
        </div>
        <div class="col-3 ">
            <label for="">ชื่อ</label>
            <input type="text" v-model="stdFName" class="form-control">
        </div>
        <div class="col-3 ">
            <label for="">สกุล</label>
            <input type="text" v-model="stdLName" class="form-control" >
        </div>
        <div class="col-3 ">
            <label for="">Email</label>
            <input type="text" v-model="stdEmail" class="form-control">
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-2 ">
            <label for="">PassW</label>
            <input type="password" v-model="stdPassW" class="form-control" >
        </div>
        <div class="col-2 ">
            <label for="">ConfirmPassW</label>
            <input type="password" v-model="stdPassWConfirm" class="form-control">
        </div>
        <div class="col-5 ">
            <label for="">Addr</label>
            <textarea v-model="stdAddr" rows="2" class="form-control"></textarea>
        </div>
    <div class="row mt-3">
            <div class="col-2">
                <label for="">SubDictrict</label>
                <input type="Text" v-model="stdSubDistrict" class="form-control">
            </div>
            <div class="col-2">
                <label for="">Dictrict</label>
                <input type="Text" v-model="stdDistrict" class="form-control">
            </div>
            <div class="col-2">
                <label for="">Province</label>
                <input type="Text" v-model="stdProvince" class="form-control">
            </div>
            <div class="col-2">
                <label for="">ZipCode</label>
                <input type="Text" v-model="stdZipCode" class="form-control">
            </div>
    </div>
    <div class="row mt-3">
        <div class="col-1">
            <button class="btn form-control">submit</button>
            </div>
        
    </div>
    
        
    </div>

    </form>
        </div>
    </div>
  </div>
</template>
<style>

.headCo{
    background-color:rgb(128, 9, 126);
    color: white;
}
.card{
    padding-bottom: 15px;
    font-family: Arial, Helvetica, sans-serif;
}
.btn {
    background-color:rgb(128, 9, 126);
    color: white;
}
.btn:hover {
    background-color:aqua;
    
}

    
</style>
