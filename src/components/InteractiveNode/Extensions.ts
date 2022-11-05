import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './Component.vue'

export default Node.create({
  name: 'vueComponent',

  group: 'block',

  content: 'inline*',


  parseHTML() {
    return [
      {
        tag: 'vue-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    // 这里0的作用是删除键遇到定义的区块时会整个一起删除
    return ['vue-component', mergeAttributes(HTMLAttributes),0]
  },

  addNodeView() {
    return VueNodeViewRenderer(Component)
  },

  addCommands(){
    return {
      setVueComponent: ()=>({commands}) =>{
        return commands.setNode(this.name)
      }
    }
  }
})