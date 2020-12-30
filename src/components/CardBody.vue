<template id="Projects">
<div>
  
    <md-card class="inputcard">

      <md-field>
        <label>Tên dự án</label>
        <md-input v-model="type" md-counter="100" ></md-input>
      </md-field>

      <md-field>
        <label>Mô tả ngắn về dự án được tạo</label>
        <md-textarea v-model="textarea" md-counter="500" ></md-textarea>
        <span class="md-error">There is an error</span>
      </md-field>
      
      <div class="Card-btn">
        <md-button class="button-card">Bỏ qua</md-button>
        <md-button @click="persist" id="btnCreate" class="button-card">Tạo</md-button>
      </div>
    </md-card>

  
      <div class="proj-body">
      <p class="proj-subheader">Tất cả dự án</p>
      <hr class="sub-line">

        
        <div class="proj-name">
          <div class="md-card Card-List md-with-hover" >
          
            <div>
            <md-card-header class="md-title proj-header-title">Project 1 <i class='far fa-copy'></i>
            </md-card-header>
            <div class="md-subhead">Contents</div>
            </div>

            <div class="md-card-actions md-alignment-right">
            <button class="Proj-btn">Chỉnh sửa</button>
            <button class="Proj-btn">Xóa</button>
            </div>
          
          </div>

          <div class="md-card Card-List md-with-hover" >
          
            <div>
            <md-card-header class="md-title proj-header-title">Project 1 <i class='far fa-copy'></i>
            </md-card-header>
            <div class="md-subhead">Contents</div>
            </div>

            <div class="md-card-actions md-alignment-right">
            <button class="Proj-btn">Chỉnh sửa</button>
            <button class="Proj-btn">Xóa</button>
            </div>
          
          </div>

          <div class="md-card Card-List md-with-hover" >
          
            <div>
            <md-card-header class="md-title proj-header-title">Project 1 <i class='far fa-copy'></i>
            </md-card-header>
            <div class="md-subhead">Contents</div>
            </div>

            <div class="md-card-actions md-alignment-right">
            <button class="Proj-btn">Chỉnh sửa</button>
            <button class="Proj-btn">Xóa</button>
            </div>
          
          </div>
          
        </div>

    </div>
</div>

</template>

<script>
export default {
  name: 'CardBody',
}
</script>

<style >

.button-card {
  background-color: white;
  border: none;
  color: black;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 15px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 5px;
}

.button-card:hover{
  background-color: rgb(230, 230, 230);

}

.Card-body{
    min-width: 400px;
    max-width: 600px;
    width: 100%;
    margin: 10px auto;
}


.Card-btn{
  text-align: center;
}

.inputcard {
  width: 600px;
  height: 300px;
  margin: 45px 30% 0px 30%;
  padding: 20px;
  display: inline-block;
  align-content: center;
  }

.md-subhead{
  font-size: 15px;
  margin-top: 10px;
}

.proj-body{
  margin: 0px 30px;
}

.Card-List {
  width: 230px;
  height: 150px;
  display: inline-block;
  margin: 0px 10px;
  }

.Proj-btn {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
}

.Proj-btn:hover {background-color: #e7e7e7;}

.Proj-btn {
  background-color:white;
  border: none;
  color: black;
  padding: 7px 10px;
  text-align: center;
  text-decoration: none;
  display:inline-flex;
  font-size: 15px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.proj-subheader{
  color: black;
}

.proj-name{
  display: inline-block;
  vertical-align: top;
}

.far{
  float:right;
}

.proj-header-title{
  
  background-color: rgb(230, 230, 230);
  box-shadow: rgb(219, 219, 219);
}

</style>