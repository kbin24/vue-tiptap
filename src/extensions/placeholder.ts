import TiptapPlaceholder from '@tiptap/extension-placeholder'

const Placeholder = TiptapPlaceholder.extend({
    addOptions(){
        return{
            ...this.parent?.(),
            placeholder: ({ node }) => {
                if (node.type.name === 'heading') {
                    if (node.attrs.level === 1) {
                        return 'H1'
                    }
                    return 'H2'
                }
                return 'placeholder'
            }
        }
    }
})

// Placeholder.configure({
//     placeholder: ({ node }) => {
//         console.log(node)
//         if (node.type.name === 'heading') {
//             if (node.attrs.level === 1) {
//                 return 'H1'
//             }
//             return 'H2'
//         }
//         return 'placeholder'
//     }
// })

export default Placeholder