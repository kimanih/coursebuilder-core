var FORM = cb_global.form;
var LESSON_CONTENT_FIELD_NAME = 'objectives';

$(function() {

  function editContent() {
    $('#cb-oeditor-form div.inputEx-fieldWrapper').hide();
    $('#cb-oeditor-form div.inputEx-fieldWrapper .content-holder')
        .closest('.inputEx-fieldWrapper').show();
  }

  function editSettings() {
    $('#cb-oeditor-form div.inputEx-fieldWrapper').show();
    $('#cb-oeditor-form div.inputEx-fieldWrapper .content-holder')
        .closest('.inputEx-fieldWrapper').hide();
  }

  function bind() {
    var togglebutton = new ToggleButton('', 'settings md md-settings');
    togglebutton.onClick(editSettings, editContent);
    $('#cb-oeditor-form > fieldset > legend').prepend(togglebutton.getRoot());
  }

  function init() {
    bind();

    // Initial state is editing content
    editContent();

    // Hide the editor label generated by InputEx, and give the editor the extra
    // width
    $('#cb-oeditor-form div.inputEx-fieldWrapper > .cb-editor-field')
        .parent()
        .find('div')
        .eq(0).css('display', 'none').end()
        .eq(1).css('margin-left', '0');

    // Resize the content editor to use all the available height.
    FORM.inputsNames[LESSON_CONTENT_FIELD_NAME]
      ._resize(null, getPotentialHeight($('.cb-editor-field .editors-div')));
  }

  init();
});
