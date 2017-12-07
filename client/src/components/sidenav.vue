<template>
<div class="col-md-3">
  <div class="list-group">
    <div class="list-group">
      <!-- <a href="#" class="list-group-item" v-for="berita in news"> -->
        {{ berita.title }}
      </a>
      </div>
  </div>
</div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
  export default{
    computed: {
      ...mapState([
        'news'
      ])
    }
   
  }
</script>