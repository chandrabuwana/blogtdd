<template>
  <div>
      <div v-for="(berita,index) in news" :key="index" class="list-group">
        <img :src=" berita.image" class="img-responsive"alt="">
        <h3>{{ berita.title }}</h3>
        <p>{{berita.content}}</p>
      </div>
  </div>
</div>
</template>
<script>
import { mapState,mapActions } from 'vuex'
import Listnews from '@/components/Listnews'
export default{
  components:{
    Listnews
  },
  computed:{
    ...mapState([
      'news'
    ])
  },
  methods: {
    ...mapActions([
      'dataNews'
    ])
  },
  created(){
    this.dataNews()
  }
}
</script>
<style>
#berita{
 border:2px,
}
p{
  text-align: center justify;
}
</style>
