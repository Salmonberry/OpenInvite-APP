<template>
  <div class="wrapper">
    <login />
  </div>
</template>

<script>

import login from '@/security/login/LoginPage'
export default {
  name: 'App',
  components: {
     login
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  
</style>
