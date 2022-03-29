webpackJsonp([24],{1197:function(e,r,n){var o=n(0),t=n(65),i=n(15).PageRenderer;i.__esModule&&(i=i.default);var a=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1222)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});a.__catalog_loader__=!0,e.exports=a},1222:function(e,r){e.exports="### AdaptiveModal\r\n\r\n```table\r\nspan: 6\r\nrows:\r\n  - Prop: actionBar\r\n    Type: node\r\n    Notes: Optional. Renders an action bar at the top of the modal. Close button will be rendered by default.\r\n  - Prop: actionBarProps\r\n    Type: object\r\n    Notes: extra props passed to the actionBar wrapper\r\n  - Prop: overlayProps\r\n    Type: object\r\n    Notes: extra props passed to the modal overlay (e.g. to pass custom style props)\r\n  - Prop: containerProps\r\n    Type: object\r\n    Notes: extra props passed to the modal container\r\n  - Prop: contentProps\r\n    Type: object\r\n    Notes: extra props passed to the content wrapper\r\n  - Prop: bottomActionBar\r\n    Type: node\r\n    Notes: Optional. Renders an action bar at the bottom of the modal\r\n  - Prop: bottomActionBarProps\r\n    Type: object\r\n    Notes: extra props passed to the bottomActionBar wrapper\r\n  - Prop: children\r\n    Type: node\r\n    Notes: The modal's children\r\n  - Prop: deviceSize\r\n    Type: object\r\n    Notes: An object provided by the DeviceSize component\r\n  - Prop: displayTop\r\n    Type: bool\r\n    Notes: Optional. Default false. Indicates, if the modal should open at the top of the page or in the center (default)\r\n  - Prop: isFullscreen\r\n    Type: bool\r\n    Notes: Optional. Default false. Allows to render the modal fullscreen if has a 'true' value. All the responsive sizes ('size') options will be ignored if this prop has a 'true' value.\r\n  - Prop: isOpened\r\n    Type: bool\r\n    Notes: Optional. Default true. Indicates, if the modal is opened by default\r\n  - Prop: size\r\n    Type: small, medium, large\r\n    Notes: Optional. Default medium. The preferred size of the modal, adaptive for each screen size\r\n  - Prop: onRequestClose\r\n    Type: \"() => Promise<bool>\"\r\n    Notes: Optional. Allows to set custom close callback handler. May return false indicating that it is not allowed to close the modal\r\n  - Prop: onScroll\r\n    Type: func(Event)\r\n    Notes: Optional. Callback is fired when the user scrolls modal's content\r\n  - Prop: focusElement\r\n    Type: React ref\r\n    Notes: Optional. Focuses on referenced element when modal is opened.\r\n  - Prop: modalId\r\n    Type: string\r\n    Notes: Optional. Sets ids of modal's title and content elements as modalId followed by '-title' and '-content' respectively.\r\n```\r\n\r\n```react\r\n<ModalDemo />\r\n```\r\n\r\n### Default AdaptiveModal with default action bars\r\n\r\n```react\r\nresponsive: true\r\n---\r\n<DeviceSizeProvider>\r\n    <AdaptiveModal\r\n        onRequestClose={() => console.log('You shall not pass!')}\r\n    >\r\n        {Array(1000).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}\r\n    </AdaptiveModal>\r\n</DeviceSizeProvider>\r\n```\r\n\r\n### AdaptiveModal with custom action bars and long content\r\n\r\n```react\r\nresponsive: true\r\n---\r\n<DeviceSizeProvider>\r\n    <AdaptiveModal\r\n        actionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>\r\n            </div>\r\n        }\r\n        bottomActionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <Button style={{ width: 'auto' }}>See Tickets</Button>\r\n            </div>\r\n        }\r\n    >\r\n        {Array(1000).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}\r\n    </AdaptiveModal>\r\n</DeviceSizeProvider>\r\n```\r\n\r\n### Fullscreen AdaptiveModal with custom action bars and long content\r\n\r\n```react\r\nresponsive: true\r\n---\r\n<DeviceSizeProvider>\r\n    <AdaptiveModal\r\n        isFullscreen\r\n        actionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>\r\n            </div>\r\n        }\r\n        bottomActionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <Button style={{ width: 'auto' }}>See Tickets</Button>\r\n            </div>\r\n        }\r\n    >\r\n        {Array(1000).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}\r\n    </AdaptiveModal>\r\n</DeviceSizeProvider>\r\n```\r\n\r\n### AdaptiveModal with custom action bars and short content\r\n\r\n```react\r\nresponsive: true\r\n---\r\n<DeviceSizeProvider>\r\n    <AdaptiveModal\r\n        actionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>\r\n            </div>\r\n        }\r\n        bottomActionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <Button style={{ width: 'auto' }}>See Tickets</Button>\r\n            </div>\r\n        }\r\n    >\r\n        {Array(8).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}\r\n    </AdaptiveModal>\r\n</DeviceSizeProvider>\r\n```\r\n\r\n### Fullscreen AdaptiveModal with custom action bars and short content\r\n\r\n```react\r\nresponsive: true\r\n---\r\n<DeviceSizeProvider>\r\n    <AdaptiveModal\r\n        isFullscreen\r\n        actionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <h1 style={{ padding: 0, margin: 0, fontSize: 16 }}>Demo AdaptiveModal</h1>\r\n            </div>\r\n        }\r\n        bottomActionBar={\r\n            <div style={{ backgroundColor: 'white' }}>\r\n                <Button style={{ width: 'auto' }}>See Tickets</Button>\r\n            </div>\r\n        }\r\n    >\r\n        {Array(8).fill('').map((_, i) => <div key={i}>Text Row {i}</div>)}\r\n    </AdaptiveModal>\r\n</DeviceSizeProvider>\r\n```\r\n"}});
//# sourceMappingURL=24.cb9a5d68.chunk.js.map