<template>
  <div >
    <MainComp/>
    <BR/>    
    <Treeservices />
    <Mainfeature/>
    <Ourcustumer/>

  </div>
</template>

<script>
import MainComp from '@/components/Maincomp.vue'
import Treeservices from '@/components/Treeservices.vue'
import Mainfeature from '@/components/Mainfeature.vue'
import Ourcustumer from '@/components/Ourcustumer.vue'

export default {
  components: {
    Treeservices,
    Mainfeature,
    MainComp,
    Ourcustumer
  }
}
</script>
