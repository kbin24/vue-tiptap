<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import EditorVue from './components/Editor.vue';
import { ref } from 'vue';

// const editorHtml = ref('<p>tiptap editor demo</p><p>2222232323323</p><ul><li><p>131232232</p></li></ul>')

const editorHtml = {
  type: 'doc',
  content:[
    {
      type: 'heading',
      attrs:{
        level: 1,
        'data-id': '123666'
      },
      content: [
        {
          type: 'text',
          text: '123'
        }
      ]
    }
  ]
}

// const editorHtml = `
//   <p>1233</p>
//   <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
// `

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
  <EditorVue v-model:html="editorHtml"></EditorVue>
</template>

<style scoped>
body{
  background-color: #fff;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
