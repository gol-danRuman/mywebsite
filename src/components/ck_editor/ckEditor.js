import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';

// const editorConfiguration = {
//     plugins: [ ImageInsert ],
//     toolbar: [ 'imageInsert' ]
// };

class Editor extends Component {
    // constructor(){
        state = {
            editor : ''
        }
    // }
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                {/* <CKEditor
                    editor={ ClassicEditor }
                    // config={ editorConfiguration }
                    data="<p>Hello from CKEditor 5!</p>"
                    config={
                        {
                            image: {
                                styles: [
                                    'alignLeft', 'alignCenter', 'alignRight','imageResize'
                                ],
                    
                                // You need to configure the image toolbar, too, so it shows the new style
                                // buttons as well as the resize buttons.
                                toolbar: [
                                    'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                                    '|',
                                    'imageTextAlternative',
                                ]
                            },
                            toolbar: [ 'ckfinder', 'imageUpload', 'typing','|', 'heading', '|', 'bold', 'italic', '|', 'undo', 'redo' ],
                            
                    
                            // plugins: [ 'Essentials', 'Heading', 'Paragraph', 'Bold', 'Italic', 'BlockQuote', 'Alignment', 'List', 'Link'],
                            // removePlugins: ['Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload'],
                            ckfinder:{
                                options: { resourceType: 'Images' },
                                uploadUrl:'http://localhost:8000/api/upload',
                                // openerMethod: 'popup',
                                // headers: {
                                //     // 'X-CSRF-TOKEN': 'CSFR-Token',
                                //     // Authorization: 'Bearer <JSON Web Token>',
                                //     // 'Content-Type': "application/json",
                                //     'Access-Control-Allow-Origin' : '*'
                                // }
                            },
                        }
                    }

                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        this.setState({
                            editor : data
                        })
                        // debugger;
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }

                   
                /> */}

                <CKEditor
                    onInit={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                    } }
                    onChange={ ( event, editor ) => console.log( { event, editor } ) }
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
                    // config={ /* the editor configuration */ }
                />
            </div>
        );
    }
}

export default Editor;