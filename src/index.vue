<template>
  <div class="wrapper">
    <!-- <login/> -->
    <ContactListPage />
    <contactlistpagebar-component class="bar"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import login from '@/security/login/LoginPage'
import ContactListPage from '@/contacts/ContactListPage'
import ContactlistpagebarComponent from '@/contacts/components/barComponent'
export default {
  name: 'App',
  components: {
    HelloWorld, login,ContactListPage,ContactlistpagebarComponent
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
.bar {
  position: fixed;
  width: 100%;
  bottom: -250px;
}
</style>
