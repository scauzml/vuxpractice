<template>
  <div id="app">

    <button @click="request">点击</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  
  methods:{
    request(){

      this.axios.get("http://localhost:8082/parkinglots/8a5e9d1f6c18ecf5016c18ed14440000")
                .then(res=>{
                  console.log(res.data)

                })
                .catch(reason => {
                  alert(reason)
                });
    }

  }
}
</script>

<style>
#app {

}
</style>
