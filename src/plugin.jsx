// contents of plugin.jsx
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Builder } from '@builder.io/react';
import JoditEditor from 'jodit-react';

const config = {
    useSplitModeuseSplitMode: true,
    enableDragAndDropFileToEditor: true,
    uploader: {
        insertImageAsBase64URI: true
    }
}

function HTMLEditor(props) {    
  return (
    <JoditEditor
        value={props.value}
        onChange={props.onChange}
        config={config}
    />
  );
}

Builder.registerEditor({
    name: 'HTMLEditor',
    component: HTMLEditor
});