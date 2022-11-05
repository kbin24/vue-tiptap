<template>
    <div>
        <template v-for="(item, index) in items">
            <div class="divider" v-if="item.type === 'divider'" :key="`divider${index}`" />
            <menu-item v-else :key="index" v-bind="item" />
        </template>
        <el-button @click="addContent">test</el-button>
    </div>
</template>
  
<script >
import { conforms } from 'lodash'
import { reactive } from 'vue'
import MenuItem from './MenuItem.vue'

export default {
    components: {
        MenuItem
    },

    props: {
        editor: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        // props.editor.isActive()
        const items = reactive([
            {
                icon: 'bold',
                title: 'Bold',
                action: () => props.editor.chain().focus().toggleBold().run(),
                isActive: () => props.editor.isActive('bold')
            },
            {
                icon: 'italic',
                title: 'Italic',
                action: () => props.editor.chain().focus().toggleItalic().run(),
                isActive: () => props.editor.isActive('italic')
            },
            {
                icon: 'strikethrough',
                title: 'Strike',
                action: () => props.editor.chain().focus().toggleStrike().run(),
                isActive: () => props.editor.isActive('strike')
            },
            {
                icon: 'code-view',
                title: 'Code',
                action: () => props.editor.chain().focus().toggleCode().run(),
                isActive: () => props.editor.isActive('code')
            },
            {
                icon: 'mark-pen-line',
                title: 'Highlight',
                action: () => props.editor.chain().focus().toggleHighlight().run(),
                isActive: () => props.editor.isActive('highlight')
            },
            {
                type: 'divider'
            },
            {
                icon: 'h-1',
                title: 'Heading 1',
                action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
                isActive: () => props.editor.isActive('heading', { level: 1 })
            },
            {
                icon: 'h-2',
                title: 'Heading 2',
                action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
                isActive: () => props.editor.isActive('heading', { level: 2 })
            },
            {
                icon: 'paragraph',
                title: 'Paragraph',
                action: () => props.editor.chain().focus().setParagraph().run(),
                isActive: () => props.editor.isActive('paragraph')
            },
            {
                icon: 'list-unordered',
                title: 'Bullet List',
                action: () => props.editor.chain().focus().toggleBulletList().run(),
                isActive: () => props.editor.isActive('bulletList')
            },
            {
                icon: 'list-ordered',
                title: 'Ordered List',
                action: () => props.editor.chain().focus().toggleOrderedList().run(),
                isActive: () => props.editor.isActive('orderedList')
            },
            {
                icon: 'list-check-2',
                title: 'Task List',
                action: () => props.editor.chain().focus().toggleTaskList().run(),
                isActive: () => props.editor.isActive('taskList')
            },
            {
                icon: 'code-box-line',
                title: 'Code Block',
                action: () => props.editor.chain().focus().toggleCodeBlock().run(),
                isActive: () => props.editor.isActive('codeBlock')
            },
            {
                type: 'divider'
            },
            {
                icon: 'double-quotes-l',
                title: 'Blockquote',
                action: () => props.editor.chain().focus().toggleBlockquote().run(),
                isActive: () => props.editor.isActive('blockquote')
            },
            {
                icon: 'separator',
                title: 'Horizontal Rule',
                action: () => props.editor.chain().focus().setHorizontalRule().run()
            },
            {
                type: 'divider'
            },
            {
                icon: 'text-wrap',
                title: 'Hard Break',
                action: () => props.editor.chain().focus().setHardBreak().run()
            },
            {
                icon: 'format-clear',
                title: 'Clear Format',
                action: () => props.editor.chain()
                    .focus()
                    .clearNodes()
                    .unsetAllMarks()
                    .run()
            },
            {
                type: 'divider'
            },
            {
                icon: 'image-line',
                title: 'image',
                action: () => {
                    const url = window.prompt('URL')
                    if (url) {
                        props.editor.chain().focus().setImage({ src: url }).run()
                    }
                }
            },
            {
                type: 'divider'
            },
            {
                icon: 'arrow-go-back-line',
                title: 'Undo',
                action: () => props.editor.chain().focus().undo().run()
            },
            {
                icon: 'arrow-go-forward-line',
                title: 'Redo',
                action: () => props.editor.chain().focus().redo().run()
            },

            {
                icon: 'table-2',
                title: '插入表格',
                action: () => props.editor.chain().focus()
                    .insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
            },
            {
                icon: 'delete-bin-6-line',
                title: '删除表格',
                action: () => props.editor.chain().focus().deleteTable().run()
            },
            {
                icon: 'merge-cells-horizontal',
                title: '合并拆分单元格',
                action: () => props.editor.chain().focus().mergeOrSplit().run()
            },
            {
                icon: 'insert-row-top',
                title: '上面添加一行',
                action: () => props.editor.chain().focus().addRowBefore().run()
            },
            {
                icon: 'insert-row-bottom',
                title: '下面添加一行',
                action: () => props.editor.chain().focus().addRowAfter().run()
            },
            {
                icon: 'delete-row',
                title: '删除行',
                action: () => props.editor.chain().focus().deleteRow().run()
            },
            {
                icon: 'insert-column-left',
                title: '左边添加一列',
                action: () => props.editor.chain().focus().addColumnBefore().run()
            },
            {
                icon: 'insert-column-right',
                title: '右边添加一列',
                action: () => props.editor.chain().focus().addColumnAfter().run()
            },
            {
                icon: 'delete-column',
                title: '删除行',
                action: () => props.editor.chain().focus().deleteColumn().run()
            },
            {
                icon: 'sip-line',
                title: '单元格背景色',
                action: () => props.editor.chain().focus().toggleHeaderCell().run()
            },
            {
                type: 'divider'
            }


        ])

        const addContent = ()=>{
            console.log(123);
            // props.editor.chain().focus().setContent('<vue-component count="0"></vue-component>').run()
            props.editor.chain().focus().setVueComponent().run()
            // props.editor.chain().focus().toggleBold().run()
        }
        return {
            items,
            addContent
        }
    },
}
</script>
  
<style lang="scss">
.divider {
    width: 2px;
    height: 1.25rem;
    background-color: rgba(#000, .1);
    margin-left: .5rem;
    margin-right: .75rem;
}
</style>