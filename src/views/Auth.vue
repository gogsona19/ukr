<template>
    <div>
        <div class="pages_wraper">
      <div class="section section-hero section-shaped">
        <div class="shape shape-style-1 shape-primary">
          <div class="container title_block ">
            <div class="ct-page-title">
              <div v-if="myrouter === 'register'">
                <h1 class="ct-title" id="content">Sign up</h1>
              </div>
              <div v-else>
                <h1 class="ct-title" id="content">Sign in</h1>
              </div>
            </div>
          </div>
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-50"></span>
          <span class="span-75"></span>
          <span class="span-100"></span>
          <span class="span-75"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
        </div>
        <div class="container Sign_up cont_wrap">
            <div v-if="myrouter === 'register'">
            <Register/>
            </div>
            <div v-if="myrouter === 'login'">
            <Login/>
            </div>
        </div>
      </div>
  
  
    </div>
        
    </div>
</template>
<script>

import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'

export default {
    components : {
        Register,
        Login
    },
    data(){
        return{
            myrouter : this.$route.params.title
        }
    },
    methods:{
    },
    mounted(){
        console.log(this.$route.params.title)
        
    }
}
</script>
<style scoped>
.ct-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.ct-page-title {
  padding-left: 1.25rem;
  border-left: 2px solid #5e72e4;
  margin-bottom: 1.5rem;
}

.section-shaped .shape-style-1.shape-primary {
  background: linear-gradient(35deg,#172b4d,#1a174d)!important;
}

.section-shaped {
  margin-top: 0px;
}

.cont_wrap {
  padding: 10px !important;
}

.title_block {
  background: #fff;
}</style>