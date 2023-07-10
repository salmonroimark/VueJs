<template >
<div class="card">
  <div class="card-header"></div>
  <div class="card-body">
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-2 mt-4">
      <div class="list-group">
        <a class="list-group-item " id="bg"><b>Vue menu</b></a>
          
         
            <router-link  class="list-group-item list-group-item-action " to="/" id="ah" >Home</router-link>
          
            <router-link  class="list-group-item list-group-item-action " to="/about" id="ah" >About</router-link>
         
            <router-link  class="list-group-item list-group-item-action " to="/multiply" id="ah" >Multiply</router-link>
         
            <router-link  class="list-group-item list-group-item-action " to="/star" id="ah" >Star for Loop 1</router-link>
         
            <router-link  class="list-group-item list-group-item-action " to="/star2" id="ah" >Star for Loop 2</router-link>

            <router-link  class="list-group-item list-group-item-action " to="/studentForm" id="ah" >RegisterForm</router-link>
          
          
        </div>
    </div>

    <div class="col-sm-10 mt-4">
      <router-view/>
    </div>
  </div>
  
    </div>
  </div>
  
  
  <div class="card-footer">

    
        <h5>พัฒนาโดย นายกรพัส พงศ์ปิยะไพร แผนกวิชาคอมพิวเตอร์โปรแกรมเมอร์ วิทยาลัยอาชีวศึกษาสุรินทร์</h5>
        
   </div>
  </div>
</template>
<style>
.card-body {
  background-color: rgb(121, 167, 167);
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);
  
}
/* .background {
  background-image: url('/img/gudetama.jpg');
} */
.card-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgb(0, 0, 0);
  text-align: center;
}



 /* h6 {
  background-color: white;
} */

/* .hrfooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  
  
  color: rgb(0, 0, 0);
  text-align: center;


} */

div#center{
  text-align: center;
}
nav {
  padding: 30px;
  text-align: left;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #9d00ff;
} 
#bg {
  background-color: rgb(128, 9, 126);
  color: #ffffff;
}
div a {
  text-decoration: none;
  color: black;
}

#ah:hover{
  background-color: aqua;
}
#ah:active{
  background-color:#b846ff
}
</style>
