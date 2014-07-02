Ext.data.JsonP.Widgets_nlFokkezbForm_controllers_field({"tagname":"class","name":"Widgets.nlFokkezbForm.controllers.field","autodetected":{},"files":[{"filename":"field.js","href":"field.html#Widgets-nlFokkezbForm-controllers-field"}],"requires":["Widgets.nlFokkezbForm.lib.util"],"members":[{"name":"required","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.field","id":"property-required","meta":{}},{"name":"validator","tagname":"property","owner":"Widgets.nlFokkezbForm.controllers.field","id":"property-validator","meta":{}},{"name":"Controller","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-Controller","meta":{}},{"name":"focus","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-focus","meta":{}},{"name":"getValue","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-getValue","meta":{}},{"name":"isValid","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-isValid","meta":{}},{"name":"setInput","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-setInput","meta":{}},{"name":"setValue","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-setValue","meta":{}},{"name":"showError","tagname":"method","owner":"Widgets.nlFokkezbForm.controllers.field","id":"method-showError","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Widgets.nlFokkezbForm.controllers.field","short_doc":"Base Controller for all field types. ...","component":false,"superclasses":[],"subclasses":["Widgets.nlFokkezbForm.controllers.select","Widgets.nlFokkezbForm.controllers.switch","Widgets.nlFokkezbForm.controllers.text","Widgets.nlFokkezbForm.controllers.textarea"],"mixedInto":[],"mixins":[],"parentMixins":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/Widgets.nlFokkezbForm.lib.util' rel='Widgets.nlFokkezbForm.lib.util' class='docClass'>Widgets.nlFokkezbForm.lib.util</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Widgets.nlFokkezbForm.controllers.select' rel='Widgets.nlFokkezbForm.controllers.select' class='docClass'>Widgets.nlFokkezbForm.controllers.select</a></div><div class='dependency'><a href='#!/api/Widgets.nlFokkezbForm.controllers.switch' rel='Widgets.nlFokkezbForm.controllers.switch' class='docClass'>Widgets.nlFokkezbForm.controllers.switch</a></div><div class='dependency'><a href='#!/api/Widgets.nlFokkezbForm.controllers.text' rel='Widgets.nlFokkezbForm.controllers.text' class='docClass'>Widgets.nlFokkezbForm.controllers.text</a></div><div class='dependency'><a href='#!/api/Widgets.nlFokkezbForm.controllers.textarea' rel='Widgets.nlFokkezbForm.controllers.textarea' class='docClass'>Widgets.nlFokkezbForm.controllers.textarea</a></div><h4>Files</h4><div class='dependency'><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field' target='_blank'>field.js</a></div></pre><div class='doc-contents'><p>Base Controller for all field types.</p>\n\n<p>See the <a href=\"#!/guide/types\">Fields</a> guide.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-required' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-property-required' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-property-required' class='name expandable'>required</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether the field is required. ...</div><div class='long'><p>Whether the field is required.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-validator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-property-validator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-property-validator' class='name expandable'>validator</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Function to use as validator, e.g.:\n\nfunction(value) {\n  return form.validator.isEmail(value) &amp;&amp; !value.index...</div><div class='long'><p>Function to use as validator, e.g.:</p>\n\n<pre><code>function(value) {\n  return form.validator.isEmail(value) &amp;&amp; !value.indexOf('hotmail.com');\n}\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-Controller' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-Controller' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-Controller' class='name expandable'>Controller</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor for the row. ...</div><div class='long'><p>Constructor for the row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments passed to the controller.</p>\n<ul><li><span class='pre'>label</span> : Object|String (optional)<div class='sub-desc'><p>Properties to apply to the <code>Ti.UI.Label</code> or value for the text property.</p>\n</div></li><li><span class='pre'>labelid</span> : String (optional)<div class='sub-desc'><p>String name to use with <code>L()</code> for the <code>Ti.UI.Label</code> text property.</p>\n</div></li><li><span class='pre'>row</span> : Object (optional)<div class='sub-desc'><p>Properties to apply to the <code>Ti.UI.TableViwRow</code>.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the focus on the input. ...</div><div class='long'><p>Sets the focus on the input.</p>\n\n<p>This method is called by <a href=\"#!/api/Widgets.nlFokkezbForm.controllers.widget\" rel=\"Widgets.nlFokkezbForm.controllers.widget\" class=\"docClass\">Widgets.nlFokkezbForm.controllers.widget</a> when the user clicks on the row.</p>\n</div></div></div><div id='method-getValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the value of the field. ...</div><div class='long'><p>Get the value of the field.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Value of the field.</p>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-isValid' class='name expandable'>isValid</a>( <span class='pre'></span> ) : Boolean|String<span class=\"signature\"></span></div><div class='description'><div class='short'>Validates the current value. ...</div><div class='long'><p>Validates the current value.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean|String</span><div class='sub-desc'><p>Returns <code>true</code> if valid or an error message if not.</p>\n</div></li></ul></div></div></div><div id='method-setInput' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-setInput' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-setInput' class='name expandable'>setInput</a>( <span class='pre'>input</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the input view in the control wrapper ...</div><div class='long'><p>Set the input view in the control wrapper</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>input</span> : Object<div class='sub-desc'><p>Some kind of input, e.g. <code>Ti.UI.TextField</code>.</p>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>[value]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the value of the field. ...</div><div class='long'><p>Set the value of the field.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String (optional)<div class='sub-desc'><p>Value to set or <code>undefined</code> to unset.</p>\n</div></li></ul></div></div></div><div id='method-showError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Widgets.nlFokkezbForm.controllers.field'>Widgets.nlFokkezbForm.controllers.field</span><br/><a href='source/field.html#Widgets-nlFokkezbForm-controllers-field-method-showError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Widgets.nlFokkezbForm.controllers.field-method-showError' class='name expandable'>showError</a>( <span class='pre'>show</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Visually mark the row as having an error. ...</div><div class='long'><p>Visually mark the row as having an error.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>show</span> : Boolean<div class='sub-desc'><p>Show or hide the mark.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});