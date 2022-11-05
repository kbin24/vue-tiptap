import { mergeAttributes, Node } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'

import Component from './Component.vue'

export default Node.create({
  name: 'vueComponent',

  group: 'block',

  content: 'block+',

  //解析HTML
  parseHTML() {
    return [
      {
        tag: 'vue-component',
      },
    ]
  },

  //渲染HTML
  renderHTML({ HTMLAttributes }) {
    // 这里0的作用是删除键遇到定义的区块时会整个一起删除
    return ['vue-component', mergeAttributes(HTMLAttributes),0]
  },

  //添加节点视图
  addNodeView() {
    return VueNodeViewRenderer(Component)
  },

  //添加指令
  addCommands(){
    return {
      setVueComponent: attr => ({ commands, editor }) => {
        // const latexNode = editor.schema.nodes.latexInline.create({
        //   latex: attributes?.latexString ?? ""
        // });
        console.log(attr);
        
        return commands.insertContent('<vue-component> </vue-component');
        // return commands.setNode(this.name)
      }
    }
  },

  //添加快捷键
  addKeyboardShortcuts() {
    return {

    }
  },
})