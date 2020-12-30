const Projects = new Vue ({
    el:'#Projects',
    data: {
      name:'',
      description:''
    },
    mounted() {
      if(localStorage.name) this.name = localStorage.name;
      if(localStorage.description) this.description = localStorage.description;
    },
    methods:{
      addproj() {
        localStorage.name = this.name;
        localStorage.age = this.description;
        console.log('now pretend I did more stuff...');
      }
    },
    watch:{
        name(newname) {
            localStorage.name = newname;
        }
    }
  })