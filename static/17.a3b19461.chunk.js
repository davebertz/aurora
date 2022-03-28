webpackJsonp([17],{1201:function(n,e,a){var o=a(0),t=a(65),r=a(15).PageRenderer;r.__esModule&&(r=r.default);var l=t({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:a(1226)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,n.exports=l},1226:function(n,e){n.exports='### DeviceConnectionProvider\n\nAnalyzes the user\'s network connection and data usage preferences while listening for changes.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: defaultState\n    Type: Object\n    Default: null\n  - Prop: children\n    Type: Node\n    Default:\n```\n\n### DeviceConnectionConsumer\n\nReceives a render prop containing the DeviceConnectionProvider\'s state when the DeviceConnectionProvider is above it in the React DOM hierarchy.\n\n### DisplayOn\n\nReturns children when the connection speed/data usage preference prop(s) passed match the user\'s connection speed or data usage preferences when the DeviceConnectionProvider is above it in the React DOM hierarchy.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: conn4g\n    Type: Boolean\n    Default: false\n  - Prop: conn3g\n    Type: Boolean\n    Default: false\n  - Prop: conn2g\n    Type: Boolean\n    Default: false\n  - Prop: connslow2g\n    Type: Boolean\n    Default: false\n  - Prop: saveData\n    Type: Boolean\n    Default: null\n  - Prop: children\n    Type: Node\n    Default:\n```\n\n```react\nresponsive: true\n---\n<Spacing top={{small: "normal"}} bottom={{small: "normal"}}>\n    <DeviceConnectionProvider>\n        <Container>\n            <Row>\n                <DisplayOn connslow2g={true}>\n                    <Column medium={4}>\n                        <Spacing bottom={{small: "moderate"}}>\n                            <ImageCard src="https://placekitten.com/g/512/288">\n                                <ImageCard.Title>Slow 2g</ImageCard.Title>\n                            </ImageCard>\n                        </Spacing>\n                    </Column>\n                </DisplayOn>\n                <DisplayOn conn2g={true}>\n                    <Column small={6} medium={4}>\n                        <Spacing bottom={{small: "moderate"}}>\n                            <ImageCard src="https://placekitten.com/g/512/288">\n                                <ImageCard.Title>2g</ImageCard.Title>\n                            </ImageCard>\n                        </Spacing>\n                    </Column>\n                </DisplayOn>\n                <DisplayOn conn3g={true}>\n                    <Column small={6} medium={4}>\n                        <Column small={6} medium={4}>\n                            <Spacing bottom={{small: "moderate"}}>\n                                <ImageCard src="https://placekitten.com/g/512/288">\n                                    <ImageCard.Title>3g</ImageCard.Title>\n                                </ImageCard>\n                            </Spacing>\n                        </Column>\n                    </Column>\n                </DisplayOn>\n                <DisplayOn conn4g={true}>\n                    <Column medium={6}>\n                        <Column small={6} medium={4}>\n                            <Spacing bottom={{small: "moderate"}}>\n                                <ImageCard src="https://placekitten.com/g/512/288">\n                                    <ImageCard.Title>4g</ImageCard.Title>\n                                </ImageCard>\n                            </Spacing>\n                        </Column>\n                    </Column>\n                </DisplayOn>\n            </Row>\n        </Container>\n    </DeviceConnectionProvider>\n</Spacing>\n```\n'}});
//# sourceMappingURL=17.a3b19461.chunk.js.map