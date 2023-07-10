<template>
    <div class="about">
        <div id="center">
          <h1> Star for Loop 2</h1>
        <input type="number" v-model="star1" > |  
        <input type="number" v-model="star2"><br><br>
        <button @click="showStar" class="btn btn-outline-light">ตกลง</button>
        </div>
        <div class="row mt-3  ">
          <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <h1 v-html="result"></h1>
            </div>
          <div class="col-sm-4"></div>
        
        </div>
    </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
        star1: 2,
        star2: 2,
        result: ""
    }
  },
  methods: {
    showStar(){
        this.result = "";
        for(var r = 1; r <= this.star1; r++){
            for(var c = r; c <= this.star2; c++) {
                this.result += "*"
            }
            this.result += "<br>"

        }

    }
  }
 
}
</script>