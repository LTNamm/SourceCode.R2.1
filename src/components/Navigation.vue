<template>
    <nav id="NavgivationBar">
        <a href="#" class="ml-auto" >
            <img class="brand-icon" src="../assets/masking_icon.png" alt="logo" width="30" height="30">
            <img class="brand-name" src="../assets/masking_title.png" alt="title" width="300" height="30">
        </a>

        <ul class="ml-auto">
            <li class="button btn-hover">Các dự án<a href="#"></a></li>
            <li class="button btn-hover">Mẫu<a href="#"></a></li>
        </ul>
        
        <ul class="mr-auto">
            <li class="button dropdown btn-user btn-hover">Lê Trung Nam <i class='fab fa-ello'></i>
                <div class="dropdown-content">
                    <p>Hồ sơ</p>
                    <p>Đăng xuất</p>
                </div>
            </li>

            <li class="button dropdown btn-hover">Ngôn ngữ <i class='fas fa-caret-down'></i>
                <div class="dropdown-content">
                    <p>English</p>
                    <p>日本語</p>
                    <p>Tiếng Việt</p>
                </div>
            </li>

        </ul>

    </nav>

</template>

<script>
export default {
    name: 'Navigation',
}
</script>

<style>

#Navgivationbar{
    padding: 0;
    margin: 0;
    text-decoration: 0;
    list-style: none;
    box-sizing: border-box;
    align-items: center;
}

.brand-name{
    margin: 7px 0px 0px 0px;
}


.brand-icon {
  width: 50px;
  height: 50px;
  margin: 8px 4px 8px 16px;
}

.mr-auto{
    float: right;
    align-items: center;
}

.ml-auto{
    float: left;
    align-items: center;
    padding: 0px 0px 0px 5px;
}

nav ul{
    float: right;
    margin-right: 20px;
}

nav ul li{
    display: inline-block;
    line-height: 40px;
    padding: 0 5px;
}

nav ul li a{
    color: black;
    cursor: pointer;
    border-radius: 5px;
    
}

.btn-hover:hover{
    background: rgb(241, 241, 241);
    color: cornflowerblue;
    transition: .2s;
}

/*a:hover{
    background:rgb(202, 202, 202);
    color: cornflowerblue;
    transition: .2s;
}*/

.button {
    background-color:white;
    border-radius: 5px;
    padding: 0px 2px;
    text-align: center;
    display: inline-block;
    font-size: 15px;
    margin: 4px 5px;
    cursor: pointer;
}

.btn-user{
    border: 1px solid darkgray;
}

.dropdown {
    position: static;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    border-radius: 5px;
    background-color: white;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 0px 0px;
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
    background: white;
    color: cornflowerblue;
    transition: .2s;
}

</style>