<template>
  <div class="about">
    <div id="center">
      <h1>หน้าแม่สูตรคูณ</h1>
    <div class="mt-3">
        <input type="number" v-model="num1" > - 
        <input type="number" v-model="num2" ><br><br>
        <button @click="showResult" class="btn btn-outline-light">ตกลง</button>
    </div>
    <div class="row mt-3  ">
          <div class="col-sm-5"></div>
            <div class="col-sm-4">
              <h1 v-html="result"></h1>
            </div>
          <div class="col-sm-3"></div>
        
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
        num1: 2,
        num2: 2,
        result: " "
    }
  },
  methods:{
    showResult(){
        this.result = " ";
        for(var i = 1; i <=12; i++){
            for(var j = this.num1; j <=this.num2; j++){
                this.result += j+" x "+i+" = "+(i*j)+"&nbsp&nbsp&nbsp"
            }
            this.result += "<br>"
        }

    }
  }
}
</script>
