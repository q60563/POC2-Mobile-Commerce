FD40.installer("EasySocial", "resources", function($){
$.require.template.loader({"easysocial\/site\/loading\/small":"<div class=\"fd-loading\"><span>\u8f09\u5165<\/span><\/div>","easysocial\/site\/uploader\/queue.item":"<div id=\"[%= file.id %]\" class=\"queue-item is-queue\" data-uploaderQueue-item>\n\t<div class=\"media\">\n\t\t<div class=\"media-body\">\n\t\t\t<div class=\"queue-item-info\">\n\t\t\t\t<span class=\"queue-item-name\">[%= file.name %]<\/span>\n\t\t\t\t<span class=\"queue-item-size\">[%= file.size %] kb<\/span>\n\t\t\t\t<span class=\"queue-item-status\" data-uploaderQueue-status>\u5728\u4f47\u5217<\/span>\n\t\t\t<\/div>\n\n\t\t\t<div class=\"progress progress-success progress-striped\" data-uploaderQueue-progress>\n\t\t\t\t<div class=\"bar\" style=\"width: 0%\" data-uploaderQueue-progressBar><\/div>\n\t\t\t<\/div>\n\n\t\t\t<a href=\"javascript:void(0);\" class=\"attach-remove btn btn-notext pull-right\" data-uploaderQueue-remove>x<\/a>\n\t\t<\/div>\n\t<\/div>\n\t[% if( temporaryUpload ){ %]\n\t\t<input type=\"hidden\" name=\"upload-id[]\" data-uploaderQueue-id \/>\n\t[% } %]\n<\/div>\n","easysocial\/admin\/profiles\/fields\/editor.item":"<div id=\"[%= uid %]\">\u8f09\u5165<\/div>\n","easysocial\/admin\/profiles\/fields\/step.item":"<!-- duplicate php @ \/profiles\/form.fields.php -->\n<li data-fields-step-item data-fields-step-item-[%= uid %] data-id=\"[%= uid %]\">\n\t<a href=\"#formStep_[%= uid %]\" data-fields-step-item-link data-fields-step-item-link-[%= uid %] data-id=\"[%= uid %]\" data-bs-toggle=\"pill\" data-original-title=\"\u8a2d\u7f6e\u63cf\u8ff0\" data-es-provide=\"tooltip\"><i><\/i>\u8a2d\u7f6e\u6a19\u984c<\/a>\n<\/li>\n","easysocial\/admin\/profiles\/fields\/editor.page":"<!-- duplicate php @ \/profiles\/form.fields.editor.page.php -->\n<div id=\"formStep_[%= uid %]\" class=\"custom-fields tab-pane\" data-fields-editor-page data-fields-editor-page-[%= uid %] data-id=[%= uid %]>\n\n\t<div class=\"fields-editor-page-info-action widget\" data-fields-editor-page-header>\n\t\t<div class=\"wbody wbody-padding\">\n\t\t\t<h3>\n\t\t\t\t<span data-fields-editor-page-title>\u8a2d\u7f6e\u6a19\u984c<\/span>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"pull-right btn btn-sm btn-es-danger\" data-fields-editor-page-delete>\u522a\u9664<\/a>\n\t\t\t\t<a href=\"javascript:void(0);\" class=\"pull-right btn btn-sm btn-es mr-5\" data-fields-editor-page-edit>\u7de8\u8f2f<\/a>\n\t\t\t<\/h3>\n\t\t\t<hr \/>\n\t\t\t<span data-fields-editor-page-description>\u8a2d\u7f6e\u63cf\u8ff0<\/span>\n\t\t<\/div>\n\t<\/div>\n\n\t<div class=\"widget\">\n\t\t<div class=\"wbody wbody-padding\">\n\t\t<fieldset data-fields-editor-page-items data-fields-editor-page-items-[%= uid %] class=\"fields-editor-page-items\">\n\t\t<\/fieldset>\n\t\t<\/div>\n\t<\/div>\n\n<\/div>\n","easysocial\/admin\/profiles\/fields\/config":"<div class=\"profile-field-config\" data-fields-config>\n\t<h3 data-fields-config-header><\/h3>\n\t<hr \/>\n    \n    <div class=\"profile-field-close close\" data-fields-config-close>\u00d7<\/div>\n    <div data-fields-config-form><\/div>\n<\/div>\n","easysocial\/admin\/profiles\/fields\/dialog.move":"<dialog>\n\t<width>400<\/width>\n\t<height>150<\/height>\n\t<title>\u5c07\u6b04\u4f4d\u79fb\u52d5\u5230\u9801\u9762<\/title>\n\t<content>\n\t\t[% if(pages.length === 0) { %]\n\t\t<p>\u672a\u53ef\u7528\u7684\u9801\u79fb\u52d5\u5230\u6b64\u6b04\u4f4d.\u8acb\u65b0\u589e\u65b0\u9801\u6b04\u4f4d\u79fb\u52d5\u5230.<\/p>\n\t\t[% } else { %]\n\t\t<p>\u9078\u53d6\u8981\u79fb\u52d5\u5230\u6b64\u6b04\u4f4d\u7684\u7db2\u9801.<\/p>\n\t\t<div>\n\t\t\t<select data-move-selection>\n\t\t\t\t[% $.each(pages, function(i, page) { %]\n\t\t\t\t<option value=\"[%= page.uid %]\">[%= page.title %]<\/option>\n\t\t\t\t[% }); %]\n\t\t\t<\/select>\n\t\t<\/div>\n\t\t[% } %]\n\t<\/content>\n\t[% if(pages.length > 0) { %]\n\t<buttons>\n\t\t<button data-move-cancel type=\"button\" class=\"btn btn-es btn-sm\">\u53d6\u6d88<\/button>\n\t\t<button data-move-confirm type=\"button\" class=\"btn btn-es-success btn-sm\">\u79fb\u52d5<\/button>\n\t<\/buttons>\n\t[% } %]\n<\/dialog>\n","easysocial\/admin\/profiles\/dialog.delete.profileavatar":"<dialog>\n\t<width>450<\/width>\n\t<height>150<\/height>\n\t<selectors type=\"json\">\n\t{\n\t\t\"{deleteButton}\"  : \"[data-delete-button]\",\n\t\t\"{cancelButton}\"  : \"[data-cancel-button]\"\n\t}\n\t<\/selectors>\n\t<bindings type=\"javascript\">\n\t{\n\t\t\"{cancelButton} click\" : function()\n\t\t{\n\t\t\tthis.parent.close();\n\t\t}\n\t}\n\t<\/bindings>\n\t<title>\u522a\u9664\u8a2d\u5b9a\u6a94\u6848\u982d\u50cf<\/title>\n\t<content>\n\t\t<p>\u9019\u500b\u64cd\u4f5c\u662f irreversble.\u522a\u9664\u6b64\u8a2d\u5b9a\u6a94\u6848\u7684\u982d\u50cf\u55ce?<\/p>\n\n\t<\/content>\n\t<buttons>\n\t\t<button data-cancel-button type=\"button\" class=\"btn btn-es btn-sm\">\u53d6\u6d88<\/button>\n\t\t<button data-delete-button type=\"button\" class=\"btn btn-es-danger btn-sm\">\u522a\u9664<\/button>\n\t<\/buttons>\n<\/dialog>\n","easysocial\/site\/albums\/browser.list.item":"<li data-album-list-item class=\"\">\n\t<a href=\"javascript: void(0);\"><i data-album-list-item-cover><\/i> <span data-album-list-item-title>\u65b0\u76f8\u7c3f<\/span> <b data-album-list-item-count>0<\/b><\/a>\n<\/li>","easysocial\/site\/albums\/upload.item":"<div id=\"[%== file.id %]\" data-photo-upload-item class=\"es-photo-upload-item es-photo-item\">\n\t<div>\n\t\t<div>\n\t\t\t<table>\n\t\t\t\t<tr class=\"upload-status\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"upload-title\">\n\t\t\t\t\t\t\t<span class=\"upload-title-pending\">\u6709\u5f85<\/span>\n\t\t\t\t\t\t\t<span class=\"upload-title-preparing\">\u6e96\u5099\u4e0a\u50b3.<\/span>\n\t\t\t\t\t\t\t<span class=\"upload-title-uploading\">\u4e0a\u50b3.<\/span>\n\t\t\t\t\t\t\t<span class=\"upload-title-failed\">\u4e0a\u50b3\u5931\u6557. <span class=\"upload-details-button\" data-popbox data-popbox-type=\"upload\" data-popbox-toggle=\"click\" data-popbox-id=\"fd\" data-popbox-position=\"top\" data-popbox-component=\"es\">(\u67e5\u770b\u8a73\u7d30\u8cc7\u8a0a)<\/span><\/span>\n\t\t\t\t\t\t\t<span class=\"upload-title-done\">\u4e0a\u50b3\u5b8c\u6210.<\/span>\n\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t<div class=\"upload-filename\">[%= file.name %]<\/div>\n\n\t\t\t\t\t\t<div class=\"upload-progress progress progress-striped active\">\n\t\t\t\t\t\t\t<div class=\"upload-progress-bar bar progress-bar-info\" style=\"width: 0%\"><span class=\"upload-percentage\"><\/span><\/div>\n\t\t\t\t\t\t<\/div>\n\n\t\t\t\t\t\t<div class=\"upload-filesize\"><span class=\"upload-filesize-total\"><\/span> (<span class=\"upload-filesize-left\"><\/span> \u5de6)<\/div>\n\n\t\t\t\t\t\t<div class=\"upload-remove-button\"><i class=\"fa fa-remove\"><\/i><\/div>\n\t\t\t\t\t<\/td>\n\t\t\t\t<\/tr>\n\t\t\t<\/table>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n","easysocial\/fields\/user\/checkbox\/item":"<li data-checkbox>\n\t<label for=\"\" class=\"checkbox\">\n\t\t<input data-checkbox-input type=\"checkbox\" \/> <span data-checkbox-title><\/span>\n\t<\/label>\n<\/li>\n","easysocial\/site\/friends\/suggest.item":"[% if (item.avatar) { %]<img src=\"[%== item.avatar %]\" width=\"16\" height=\"16\" \/> [% } %][%== item.screenName %]\n<input type=\"hidden\" name=\"[%= name %]\" value=\"[%= item.id %]\" \/>\n","easysocial\/site\/friends\/suggest.hint.search":"<span class=\"mentions-autocomplete-search-hint\">\u8f38\u5165\u60a8\u670b\u53cb\u7684\u540d\u5b57.<\/span>\n","easysocial\/site\/friends\/suggest.hint.empty":"<span class=\"mentions-autocomplete-empty-text\">\u63a2\u7d22\u672a\u6709\u670b\u53cb.<\/span>\n","easysocial\/site\/hashtags\/suggest.item":"[%== item.title %]\n","easysocial\/site\/hashtags\/suggest.hint.search":"<span class=\"mentions-autocomplete-search-hint\">\u9375\u5165\u67d0\u500b\u6a19\u7c64\u641c\u5c0b.<\/span>\n","easysocial\/site\/hashtags\/suggest.hint.empty":"<span class=\"mentions-autocomplete-empty-text\">\u672a\u6709\u73fe\u6709\u7684\u6a19\u7c64\u7531\u8a72\u95dc\u9375\u5b57.<\/span>\n","easysocial\/site\/dialog\/default":"<div class=\"es modal es-dialog\" id=\"fd\">\n\t<div class=\"dialog-wrap\">\n\t\t<div class=\"in\">\n\t\t\t<div class=\"dialog-loader\"><div class=\"loader-img\"><\/div><\/div>\n\t\t\t<div class=\"dialog-head modal-header\">\n\t\t\t\t<button class=\"close dialog-closeButton\" type=\"button\">\n\t\t\t\t\t<i class=\"fa fa-remove\"><\/i>\n\t\t\t\t<\/button>\n\t\t\t\t<span class=\"dialog-title\"><\/span>\n\t\t\t<\/div>\n\n\t\t\t<div class=\"dialog-body dialog-content modal-body\">\n\t\t\t<\/div>\n\n\t\t\t<div class=\"dialog-footer modal-footer\">\n\t\t\t\t<div class=\"dialog-loading\"><\/div>\n\t\t\t\t<div class=\"dialog-buttons\"><\/div>\n\t\t\t<\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n","easysocial\/site\/photos\/popup":"<div id=\"fd\" class=\"es es-photo-popup es-responsive\" data-photo-popup>\n\t<div class=\"es-popup-viewport es-media-browser\" data-popup-viewport><\/div>\n\t<div class=\"fd-loading\"><span><\/span><\/div>\n<\/div>\n","easysocial\/site\/groups\/suggest.item":"[% if (item.avatar) { %]<img src=\"[%== item.avatar %]\" width=\"16\" height=\"16\" \/> [% } %][%== item.title %]\n<input type=\"hidden\" name=\"[%= name %]\" value=\"[%= item.id %]\" \/>\n","easysocial\/site\/location\/story.suggestion":"<div class=\"es-location-suggestion\" data-story-location-suggestion>\n    <span class=\"formatted_address\">\n        <div class=\"fd-small\">[%= location.name %]<\/div>\n    <\/span>\n<\/div>\n","easysocial\/site\/photos\/tags.item":"<div data-photo-tag-item\n     data-photo-tag-position\n     class=\"es-photo-tag-item layout-form\">\n\n\t<div class=\"es-photo-tag-title\"><span data-photo-tag-title><\/span><\/div>\n\n\t<div class=\"es-photo-tag-form\">\n\t\t<i><\/i>\n\t\t<div>\n\t\t\t<fieldset>\n\t\t\t\t<input data-photo-tag-input type=\"text\"\n\t\t\t\t       class=\"form-control input-sm es-photo-tag-input es-photo-tag-input\"\n\t\t\t\t       placeholder=\"\u9019\u662f? \u8acb\u8f38\u5165 + Enter \u5b8c\u6210\" \/>\n\t\t\t\t<span data-photo-tag-remove-button class=\"es-photo-tag-remove-button\"><i class=\"fa fa-remove\"><\/i><\/span>\n\t\t\t<\/fieldset>\n\t\t\t<div class=\"es-photo-tag-menu\" data-photo-tag-menu><\/div>\n\t\t<\/div>\n\t<\/div>\n<\/div>\n","easysocial\/site\/photos\/tags.menu.item":"<div class=\"es-photo-tag-menu-item\" data-photo-tag-menu-item>\n<div class=\"es-photo-tag-menu-name\">\n<img src=\"[%= item.avatar %]\" \/>[%= item.screenName %]\n<\/div>\n<\/div>\n","easysocial\/admin\/profiles\/form.privacy.custom.item":"<li>\n\t<span><a href=\"javascript:void(0);\" class=\"userDeleteButton\">delete<\/a> - <\/span>\n\t<span>[%= userName %]<\/span>\n\t<input type=\"hidden\" name=\"[%= eleName %][]\" value=\"[%= userId %]\"\/>\n<\/li>\n","easysocial\/site\/activities\/loadbutton":"<a class=\"btn btn-es-primary btn-stream-updates\" href=\"javascript:void(0);\"><i class=\"fa fa-repeat\"><\/i>\u8f09\u5165\u4ee5\u524d\u6d3b\u52d5<\/a>\n","easysocial\/site\/explorer\/popup":"<div id=\"fd\" class=\"es es-explorer-popup\" data-explorer-popup>\n\t<div class=\"es-popup-viewport\" data-popup-viewport><\/div>\n\t<div class=\"fd-loading\"><span><\/span><\/div>\n<\/div>\n","easysocial\/site\/friends\/default.empty":"<div class=\"empty center mt-20\" data-friends-items>\n\t<div>\n\t\tYou do not have any friends in this list.\t<\/div>\n\n\t<div class=\"mt-20\">\n\t\t<a href=\"javascript:void(0);\" class=\"btn btn-es btn-medium\" data-friends-add>\n\t\t\t<i class=\"icon-es-create\"><\/i> Add Friends\t\t<\/a>\n\t<\/div>\n<\/div>\n","easysocial\/site\/friends\/list.assign":"\n","easysocial\/site\/registration\/dialog.error":"<p>\n\t\u62b1\u6b49,\u67d0\u4e9b\u8cc7\u8a0a\u4e1f\u5931\u6216\u4e0d\u5b8c\u6574.\u8acb\u6aa2\u67e5\u518d\u8a66\u4e00\u6b21.<\/p>\n","easysocial\/site\/search\/loadbutton":"<a class=\"btn btn-es-primary btn-stream-updates\" href=\"javascript:void(0);\" data-search-loadmore-button><i class=\"fa fa-repeat\"><\/i>\u8f09\u5165\u66f4\u591a\u7684\u6b64\u9805<\/a>\n","easysocial\/site\/stream\/loadbutton":"<a class=\"btn btn-es-primary btn-stream-updates\" href=\"javascript:void(0);\"><i class=\"fa fa-repeat\"><\/i>\u8f09\u5165\u4ee5\u524d\u8cbc\u5857\u7246<\/a>\n","easysocial\/site\/notifications\/system.empty":"<li class=\"requestItem empty center\">\n\t<div class=\"mt-20 pl-10 pr-10 fd-small\">\n\t\t<i class=\"fa fa-exclamation-circle mr-5\"><\/i> \u672a\u672a\u8b80\u7684\u901a\u77e5\t<\/div>\n<\/li>\n","easysocial\/site\/users\/button.following":"<a href=\"javascript:void(0);\" class=\"btn btn-es-primary btn-sm\"><i class=\"fa fa-check mr-5\"><\/i> \u95dc\u6ce8<\/a>\n","easysocial\/apps\/user\/links\/story\/attachment.item":"","easysocial\/apps\/user\/files\/story\/attachment.item":"<div class=\"file-item\" data-files-item data-id=\"[%= id %]\">\n    <div class=\"file-icon\">\n        <i class=\"fa fa-archive\"><\/i>\n        <div class=\"file-name\">[%= file.name %]<\/div>\n    <\/div>\n    <div class=\"remove-button\" data-files-item-remove>\n        <i class=\"fa fa-trash\"><\/i> \u522a\u9664    <\/div>\n<\/div>","easysocial\/apps\/user\/files\/story\/progress":"<div id=\"[%== file.id %]\" data-files-upload-item class=\"es-story-files-progress\">\n    <table>\n        <tr class=\"upload-status\">\n            <td>\n                <div class=\"upload-progress progress progress-striped active\">\n                    <div class=\"upload-progress-bar bar progress-bar-info\" style=\"width: 0%\"><span class=\"upload-percentage\"><\/span><\/div>\n                <\/div>\n\n                <div class=\"upload-remove-button\"><i class=\"fa fa-remove\"><\/i><\/div>\n            <\/td>\n        <\/tr>\n    <\/table>\n<\/div>\n","easysocial\/site\/links\/story\/attachment.item":"<div class=\"es-story-link-item [% if (images.length > 0) { %]has-images[% } %]\"\n     data-story-link-item>\n\n\t<div class=\"es-story-link-images\"\n\t     data-story-link-images>\n\t\t[% $.each(images, function(i, image){ %]\n\t\t<div class=\"es-story-link-image-wrapper [% if (i==0) { %]active[% } %]\" data-story-link-image-wrapper>\n\t\t\t<img class=\"es-story-link-image\"\n\t\t\t\t data-story-link-image\n\t\t\t\t src=\"[%== image %]\"\/>\n\n\t\t\t<div class=\"es-story-image-dimension\" data-story-link-image-dimensions>\n\t\t\t\t<span data-image-width><\/span>\n\t\t\t\t<span>x<\/span>\n\t\t\t\t<span data-image-height><\/span>\n\t\t\t<\/div>\n\t\t<\/div>\n\t\t[% }); %]\n\t<\/div>\n\n\t<div class=\"es-story-link-col\">\n\t\t<h6 class=\"es-story-link-title\"\n\t\t    data-story-link-title\n\t\t    data-default=\"[%== title || url %]\"\n\t\t    >[%== title || url %]<\/h6>\n\n\t\t<div class=\"es-story-link-title-textbox\">\n\t\t\t<input type=\"text\"\n\t\t\t\t   class=\"es-story-link-title-textfield form-control input-sm\"\n\t\t\t\t   data-story-link-title-textfield\n\t\t\t\t   placeholder=\"\u8f38\u5165\u9023\u7d50\u6a19\u984c\"\n\t\t\t\t   value=\"[%== title || url %]\" \/>\n\t\t<\/div>\n\n\t\t<small class=\"es-story-link-url\"><a href=\"[%== url %]\" target=\"blank\">[%= url %]<\/a><\/small>\n\n\t\t<p class=\"es-story-link-description [% if (!desc) { %] no-description [% } %]\"\n\t\t   data-story-link-description>[%= desc || '\u8ac7\u8ac7\u6b64\u9023\u7d50.'%]<\/p>\n\n\t\t<div class=\"es-story-link-description-textbox\">\n\t\t\t<textarea class=\"es-story-link-description-textfield form-control input-sm\"\n\t\t\t          data-story-link-description-textfield\n\t\t\t          placeholder=\"\u8ac7\u8ac7\u6b64\u9023\u7d50.\"\n\t\t\t          >[%== desc %]<\/textarea>\n\t\t<\/div>\n\n\t\t[% if (images.length > 1) { %]\n\t\t\t<div class=\"es-story-link-nav\">\n\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-es btn-sm\" data-story-link-image-prev><i class=\"fa fa-caret-left\"><\/i><\/button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-es btn-sm\" data-story-link-image-next><i class=\"fa fa-caret-right\"><\/i><\/button>\n\t\t\t\t<\/div>\n\t\t\t\t<span class=\"es-story-link-image-count\">\n\t\t\t\t\t<span data-story-link-image-index>1<\/span><span>\/<\/span><span data-story-link-image-total>[%= images.length %]<\/span>\n\t\t\t\t<\/span>\n\t\t\t<\/div>\n\t\t[% } %]\n\n\t\t[% if (images.length > 0) { %]\n\t\t\t<div class=\"mt-5\">\n\t\t\t\t<label for=\"remove-thumbnail\" class=\"fd-small\">\n\t\t\t\t\t<input id=\"remove-thumbnail\" type=\"checkbox\" class=\"remove-thumbnail es-story-link-remove-image\" data-story-link-remove-image \/> \u4e0d\u986f\u793a\u7e2e\u5716\t\t\t\t<\/label>\n\t\t\t<\/div>\n\t\t[% } %]\n\n\t\t[% if( video ){ %]\n\t\t\t<input type=\"hidden\" name=\"videos_link\" value=\"[%= video %]\" data-story-link-video \/>\n\t\t[% } %]\n\t<\/div>\n\n\t<div class=\"es-story-link-remove-button\"\n\t\t data-story-link-remove-button>\n\t\t <i class=\"fa fa-remove\"><\/i>\n\t<\/div>\n<\/div>\n","easysocial\/apps\/group\/tasks\/story\/attachment.item":"<li>\n\t<div class=\"input-group\">\n\t\t<input type=\"text\" class=\"input-sm form-control\" data-story-tasks-input placeholder=\"Add a title for your task...\" \/>\n\t\t<span class=\"input-group-btn\">\n\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-danger btn-sm\" data-story-tasks-remove><i class=\"fa fa-remove\"><\/i><\/a>\n\t\t<\/span>\n\t<\/div>\n<\/li>\n","easysocial\/site\/likes\/item":"<div>\n\t<b>[%= likeCount %]<\/b> Likes.\n\t<span class=\"likeText\"><\/span>\n<\/div>\n","easysocial\/site\/uploader\/preview":"<img src=\"[%= uri %]\" alt=\"[%= title %]\" \/>\n"});
$.require.language.loader({"COM_EASYSOCIAL_SCAN_COMPLETED":"\u6383\u63cf\u5df2\u5b8c\u6210","JLIB_HTML_PLEASE_MAKE_A_SELECTION_FROM_THE_LIST":"\u8acb\u5148\u5f9e\u5217\u8868\u4e2d\u9078\u5b9a\u4e00\u500b","COM_EASYSOCIAL_INDEXER_REINDEX_PROCESSING":"\u8655\u7406...","COM_EASYSOCIAL_INDEXER_REINDEX_FINISHED":"\u7d22\u5f15\u7de8\u5236\u8655\u7406\u7a0b\u5e8f\u5b8c\u6210.","COM_EASYSOCIAL_INDEXER_REINDEX_RESTART":"\u91cd\u65b0\u958b\u6a5f\u7d22\u5f15","COM_EASYSOCIAL_CANCEL_BUTTON":"\u53d6\u6d88","COM_EASYSOCIAL_CLOSE_BUTTON":"\u95dc\u9589","COM_EASYSOCIAL_POLLS_VIEW_POLLS_DIALOG_TITLE":"COM_EASYSOCIAL_POLLS_VIEW_POLLS_DIALOG_TITLE","COM_EASYSOCIAL_POLLS_ACTIONS_DIALOG_TITLE":"COM_EASYSOCIAL_POLLS_ACTIONS_DIALOG_TITLE","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_ITEM_CONFIG_LOADING":"\u8f09\u5165\u914d\u7f6e","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_PAGE_DIALOG_TITLE":"\u522a\u9664\u9801\u9762","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_PAGE_DIALOG_CONFIRMATION":"\u662f\u5426\u522a\u9664\u6b64\u9801?\u8acb\u9644\u8a3b,\u4efb\u4f55\u672a\u5132\u5b58\u7684\u8a2d\u7f6e\u5c07\u6703\u88ab\u6467\u6bc0.","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_PAGE_DIALOG_CONFIRM":"\u522a\u9664","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_PAGE_DIALOG_CANCEL":"\u53d6\u6d88","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_PAGE_DIALOG_DELETING":"\u522a\u9664","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_ITEM_DIALOG_TITLE":"\u522a\u9664\u6b04\u4f4d","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_ITEM_DIALOG_CONFIRMATION":"\u522a\u9664\u6b64\u9805\u55ce?\u8acb\u9644\u8a3b,\u4efb\u4f55\u672a\u5132\u5b58\u7684\u8a2d\u7f6e\u5c07\u6703\u88ab\u6467\u6bc0.","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_ITEM_DIALOG_CONFIRM":"\u522a\u9664","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_ITEM_DIALOG_CANCEL":"\u53d6\u6d88","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_DELETE_ITEM_DIALOG_DELETING":"\u522a\u9664","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_PARAMS_CORE_UNIQUE_KEY_SAVE_FIRST":"\u8acb\u5132\u5b58\u8a72\u8868\u55ae\u9996\u5148\u7522\u751f\u7cfb\u7d71\u552f\u4e00\u9375.","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_CONFIGURE_PAGE":"\u9801\u9762\u914d\u7f6e","COM_EASYSOCIAL_PROFILES_FORM_FIELDS_CONFIGURE_FIELD":"\u6b04\u4f4d\u914d\u7f6e","COM_EASYSOCIAL_FIELDS_REQUIRE_MANDATORY_FIELDS":"\u6240\u6709\u5fc5\u8981\u6b04\u4f4d\u662f\u5fc5\u586b\u7684.\u8acb\u6aa2\u67e5,\u78ba\u4fdd\u6240\u6709\u5fc5\u8981\u6b04\u4f4d\u5df2\u88ab\u65b0\u589e\u5230\u8a2d\u5b9a\u6a94\u6848.","COM_EASYSOCIAL_FIELDS_UNSAVED_CHANGES":"\u90a3\u88e1\u672a\u5132\u5b58\u7684\u66f4\u6539\u81ea\u8a02\u6b04\u4f4d\u4e0a\u7684","COM_EASYSOCIAL_FIELDS_INVALID_VALUES":"\u6709\u4e00\u4e9b\u4e0d\u6b63\u78ba\u914d\u7f6e\u503c.\u8acb\u6aa2\u67e5\u4e26\u66f4\u6b63\u6b04\u4f4d\u914d\u7f6e\u503c.","COM_EASYSOCIAL_ASSIGN_BUTTON":"\u5206\u914d","COM_EASYSOCIAL_PROFILES_ASSIGN_USER_DIALOG_TITLE":"\u70ba\u7528\u6236\u5206\u914d","COM_EASYSOCIAL_PROFILES_FORM_CLEAR_AVATAR":"\u6e05\u9664","COM_EASYSOCIAL_REGIONS_FORM_INCOMPLETE":"\u8acb\u5b8c\u6210\u5132\u5b58\u524d\u7684\u8868\u55ae.","COM_EASYSOCIAL_REPORTS_VIEW_REPORTS_DIALOG_TITLE":"\u67e5\u770b\u5831\u544a","COM_EASYSOCIAL_REPORTS_ACTIONS_DIALOG_TITLE":"\u64cd\u4f5c","PLG_FIELDS_EVENT_DESCRIPTION_VALIDATION_INPUT_REQUIRED":"\u6d3b\u52d5\u63cf\u8ff0\u662f\u5fc5\u586b\u7684.\u8acb\u8f38\u5165\u6709\u6548\u7684\u63cf\u8ff0","FIELDS_EVENT_PERMALINK_EXCEEDED_MAX_LENGTH":"\u60a8\u56fa\u5b9a\u9023\u7d50\u662f\u592a\u9577.","FIELDS_EVENT_PERMALINK_REQUIRED":"\u60a8\u56fa\u5b9a\u9023\u7d50\u662f\u5fc5\u586b\u7684.","FIELDS_EVENT_STARTEND_VALIDATION_DATETIME_START_REQUIRED":"\u958b\u59cb\u65e5\u671f\u6642\u9593\u662f\u5fc5\u586b\u7684.","FIELDS_EVENT_STARTEND_VALIDATION_DATETIME_END_REQUIRED":"\u7d50\u675f\u65e5\u671f\u6642\u9593\u662f\u5fc5\u586b\u7684.","FIELDS_USER_DATETIME_LOCAL_TIMEZONE":"\u672c\u5730\u6642\u5340","FIELDS_USER_DATETIME_TIMEZONE_CHECKING":"\u6aa2\u67e5.","PLG_FIELDS_GROUP_PERMALINK_EXCEEDED_MAX_LENGTH":"\u60a8\u56fa\u5b9a\u9023\u7d50\u662f\u592a\u9577.","PLG_FIELDS_GROUP_PERMALINK_REQUIRED":"\u60a8\u56fa\u5b9a\u9023\u7d50\u662f\u5fc5\u586b\u7684.","PLG_FIELDS_ADDRESS_PLEASE_ENTER_ADDRESS1":"\u8acb\u586b\u5beb\u4f4d\u5740\u884c 1.","PLG_FIELDS_ADDRESS_PLEASE_ENTER_ADDRESS2":"\u8acb\u586b\u5beb\u4f4d\u5740\u884c 2.","PLG_FIELDS_ADDRESS_PLEASE_ENTER_CITY":"\u8acb\u586b\u5beb\u4f4d\u5740\u57ce\u5e02\u5e02.","PLG_FIELDS_ADDRESS_PLEASE_ENTER_STATE":"\u8acb\u586b\u5beb\u4f4d\u5740\u72c0\u614b.","PLG_FIELDS_ADDRESS_PLEASE_ENTER_ZIP":"\u8acb\u586b\u5beb\u4f4d\u5740\u90f5\u7de8.","PLG_FIELDS_ADDRESS_PLEASE_ENTER_COUNTRY":"\u8acb\u586b\u5beb\u4f4d\u5740\u570b\u5bb6\/\u5730\u5340.","COM_EASYSOCIAL_LOCATION_PERMISSION_ERROR":"\u7121\u6cd5\u78ba\u5b9a\u60a8\u7576\u524d\u7684\u4f4d\u7f6e.\u60a8\u8b93\u60a8\u7684\u700f\u89bd\u5668\u4f86\u5206\u4eab\u60a8\u7684\u4f4d\u7f6e\u55ce?","COM_EASYSOCIAL_LOCATION_TIMEOUT_ERROR":"\u9023\u63a5\u903e\u6642\u800c\u5617\u8a66\u78ba\u5b9a\u60a8\u7576\u524d\u7684\u4f4d\u7f6e.","COM_EASYSOCIAL_LOCATION_UNAVAILABLE_ERROR":"\u7121\u6cd5\u78ba\u5b9a\u60a8\u7576\u524d\u7684\u4f4d\u7f6e.","COM_EASYSOCIAL_STREAM_AT":"\u65bc","PLG_FIELDS_AVATAR_VALIDATION_EMPTY_PROFILE_PICTURE":"\u8acb\u4e0a\u50b3\u500b\u4eba\u8cc7\u6599\u5716\u7247\u6216\u5f9e\u6e05\u55ae\u4e2d\u9078\u53d6\u9810\u5b9a\u7fa9\u7684\u5316\u8eab.","PLG_FIELDS_CHECKBOX_CHECK_AT_LEAST_ONE_ITEM":"\u8acb\u6aa2\u67e5\u5f9e\u4e0a\u9762\u7684\u6e05\u55ae\u4e2d\u81f3\u5c11\u4e00\u500b\u6b64\u9805.","PLG_FIELDS_COUNTRY_VALIDATION_REQUIRED":"\u8acb\u9078\u53d6\u570b\u5bb6.","PLG_FIELDS_COUNTRY_VALIDATION_MINIMUM_ERROR":"\u8acb\u9078\u53d6\u4e00\u500b\u570b\u5bb6.","PLG_FIELDS_COUNTRY_VALIDATION_MAXIMUM_ERROR":"\u60a8\u5df2\u7d93\u8d85\u51fa\u5141\u8a31\u7684\u570b\u5bb6\u9078\u53d6\u7684\u7e3d\u91d1\u984d.","PLG_FIELDS_COVER_VALIDATION_REQUIRED":"\u8acb\u4e0a\u50b3\u8a2d\u5b9a\u6a94\u6848\u8986\u84cb","PLG_FIELDS_DATETIME_VALIDATION_INVALID_DATETIME_FORMAT":"PLG_FIELDS_DATETIME_VALIDATION_INVALID_DATETIME_FORMAT","PLG_FIELDS_DATETIME_VALIDATION_PLEASE_SELECT_DATETIME":"\u8acb\u8f38\u5165\u4e00\u500b\u65e5\u671f.","PLG_FIELDS_DATETIME_DAY":"\u65e5","PLG_FIELDS_DROPDOWN_VALIDATION_PLEASE_SELECT_A_VALUE":"\u8acb\u9078\u53d6\u4e00\u500b\u503c,\u5f9e\u4e0a\u9762\u7684\u4e0b\u62c9\u6e05\u55ae.","PLG_FIELDS_EMAIL_VALIDATION_REQUIRED":"\u60a8\u5fc5\u9808\u63d0\u4f9b\u96fb\u5b50\u90f5\u4ef6\u5730\u5740.","PLG_FIELDS_EMAIL_VALIDATION_INVALID_FORMAT":"\u4e0d\u6b63\u78ba\u96fb\u5b50\u90f5\u4ef6\u683c\u5f0f.","PLG_FIELDS_FILE_ERROR_UNKNOWN_ERROR_OCCURED":"\u767c\u751f\u672a\u77e5\u7684\u932f\u8aa4.","COM_EASYSOCIAL_WORKING":"\u5de5\u4f5c","PLG_FIELDS_GENDER_VALIDATION_GENDER_REQUIRED":"\u60a8\u9700\u8981\u9078\u53d6\u7684\u6027\u5225.","PLG_FIELDS_JOOMLA_EMAIL_VALIDATION_REQUIRED":"\u60a8\u5fc5\u9808\u63d0\u4f9b\u96fb\u5b50\u90f5\u4ef6\u5730\u5740.","PLG_FIELDS_JOOMLA_EMAIL_VALIDATION_RECONFIRM_REQUIRED":"\u60a8\u9700\u8981\u78ba\u8a8d\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6\u5730\u5740.","PLG_FIELDS_JOOMLA_EMAIL_VALIDATION_NOT_MATCHING":"\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u4e0d\u5339\u914d.\u8acb\u518d\u6b21\u78ba\u8a8d\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6\u5730\u5740.","PLG_FIELDS_JOOMLA_EMAIL_CHECKING":"\u6aa2\u67e5.","PLG_FIELDS_JOOMLA_EMAIL_VALIDATION_INVALID_FORMAT":"\u4e0d\u6b63\u78ba\u96fb\u5b50\u90f5\u4ef6\u5730\u5740\u683c\u5f0f.","PLG_FIELDS_JOOMLA_FULLNAME_VALIDATION_EMPTY_NAME":"\u8acb\u78ba\u5b9a\u81ea\u5df1\u900f\u904e\u8f38\u5165\u60a8\u7684\u540d\u5b57","PLG_FIELDS_JOOMLA_PASSWORD_EMPTY_PASSWORD":"\u5bc6\u78bc\u4e0d\u80fd\u70ba\u7a7a.","PLG_FIELDS_JOOMLA_PASSWORD_EMPTY_RECONFIRM_PASSWORD":"\u8acb\u78ba\u8a8d\u60a8\u7684\u5bc6\u78bc.","PLG_FIELDS_JOOMLA_PASSWORD_NOT_MATCHING":"\u5bc6\u78bc\u4e0d\u5339\u914d.","PLG_FIELDS_JOOMLA_PASSWORD_MINIMUM_CHAR":"\u6700\u4f4e %1$s \u7684\u5b57\u5143\u5fc5\u586b\u7684\u5bc6\u78bc.","PLG_FIELDS_JOOMLA_PASSWORD_MAXIMUM_CHAR":"\u6700\u5927\u503c %1$s \u7684\u5b57\u5143\u5141\u8a31.","PLG_FIELDS_JOOMLA_PASSWORD_MINIMUM_INTEGER":"\u5bc6\u78bc\u81f3\u5c11\u61c9\u5305\u542b %1$s \u7684\u6574\u6578.","PLG_FIELDS_JOOMLA_PASSWORD_MINIMUM_SYMBOLS":"\u5bc6\u78bc\u81f3\u5c11\u61c9\u5305\u542b %1$s \u7684\u7b26\u865f.","PLG_FIELDS_JOOMLA_PASSWORD_MINIMUM_UPPERCASE":"\u5bc6\u78bc\u81f3\u5c11\u61c9\u5305\u542b %1$s \u5927\u5beb\u5b57\u5143.","PLG_FIELDS_JOOMLA_PASSWORD_STRENGTH_VERY_WEAK":"\u5f88\u5f31\u5bc6\u78bc","PLG_FIELDS_JOOMLA_PASSWORD_STRENGTH_WEAK":"\u5f31\u5bc6\u78bc","PLG_FIELDS_JOOMLA_PASSWORD_STRENGTH_NORMAL":"\u6b63\u5e38\u5bc6\u78bc","PLG_FIELDS_JOOMLA_PASSWORD_STRENGTH_STRONG":"\u5f37\u5f0f\u5bc6\u78bc","PLG_FIELDS_JOOMLA_PASSWORD_STRENGTH_VERY_STRONG":"\u5f88\u5f37\u5f0f\u5bc6\u78bc","PLG_FIELDS_JOOMLA_PASSWORD_EMPTY_ORIGINAL_PASSWORD":"\u539f\u59cb\u5bc6\u78bc\u662f\u5fc5\u586b\u7684.","PLG_FIELDS_JOOMLA_PASSWORD_TOO_SHORT":"\u5bc6\u78bc\u592a\u77ed.","PLG_FIELDS_JOOMLA_PASSWORD_TOO_LONG":"\u5bc6\u78bc\u592a\u9577.","PLG_FIELDS_JOOMLA_TIMEZONE_VALIDATION_SELECT_TIMEZONE":"\u8acb\u9078\u53d6\u6709\u6548\u7684\u6642\u5340.","PLG_FIELDS_JOOMLA_USERNAME_CHECKING":"\u6aa2\u67e5.","PLG_FIELDS_JOOMLA_USERNAME_EMPTY_USERNAME":"\u8acb\u8f38\u5165\u60a8\u60f3\u8981\u4f7f\u7528\u7684\u5e33\u6236\u540d\u7a31.","PLG_FIELDS_MULTIDROPDOWN_VALIDATION_REQUIRED_FIELD":"\u60a8\u9700\u8981\u9078\u53d6\u4e00\u4e9b\u50f9\u503c.","PLG_FIELDS_MULTILIST_VALIDATION_PLEASE_SELECT_A_VALUE":"\u8acb\u9078\u53d6\u4e00\u500b\u503c,\u5f9e\u4e0a\u8ff0\u7684\u591a\u91cd\u8868\u9054\u6210.","PLG_FIELDS_MULTITEXTBOX_VALIDATION_REQUIRED_FIELD":"\u60a8\u9700\u8981\u8f38\u5165\u4e00\u4e9b\u503c.","PLG_FIELDS_PERMALINK_EXCEEDED_MAX_LENGTH":"\u60a8\u56fa\u5b9a\u9023\u7d50\u662f\u592a\u9577.","PLG_FIELDS_PERMALINK_REQUIRED":"\u60a8\u56fa\u5b9a\u9023\u7d50\u662f\u5fc5\u586b\u7684.","COM_EASYSOCIAL_FRIENDS_REQUEST_SENT":"\u7b49\u5f85\u670b\u53cb\u56de\u8986","PLG_FIELDS_RELATIONSHIP_APPROVE_CONFIRM":"\u6279\u51c6\u9019\u7a2e\u95dc\u6ce8\u5c07\u8986\u84cb\u60a8\u539f\u59cb\u7684\u95dc\u6ce8\u72c0\u614b.\u6279\u51c6\u9019\u4e00\u95dc\u6ce8\u72c0\u614b\u55ce?","PLG_FIELDS_RELATIONSHIP_ACTION_APPROVE":"\u6279\u51c6","PLG_FIELDS_TERMS_VALIDATION_REQUIRED":"\u60a8\u5fc5\u9808\u63a5\u53d7\u689d\u6b3e\u53ca\u689d\u4ef6.","PLG_FIELDS_TEXTAREA_VALIDATION_INPUT_REQUIRED":"\u8acb\u8f38\u5165\u4e00\u4e9b\u6587\u5b57\u5728\u9019\u88e1.","PLG_FIELDS_TEXTAREA_VALIDATION_INPUT_TOO_SHORT":"\u8f38\u5165\u592a\u77ed.","PLG_FIELDS_TEXTAREA_VALIDATION_INPUT_TOO_LONG":"\u8f38\u5165\u592a\u9577.","PLG_FIELDS_TEXTBOX_VALIDATION_INPUT_REQUIRED":"\u8acb\u8f38\u5165\u6b63\u78ba\u503c.","PLG_FIELDS_TEXTBOX_VALIDATION_INPUT_TOO_SHORT":"\u8f38\u5165\u592a\u77ed.","PLG_FIELDS_TEXTBOX_VALIDATION_INPUT_TOO_LONG":"\u8f38\u5165\u592a\u9577.","PLG_FIELDS_TEXTBOX_VALIDATION_INPUT_INVALID_FORMAT":"\u8f38\u5165\u683c\u5f0f\u4e0d\u6b63\u78ba.","PLG_FIELDS_URL_VALIDATION_EMPTY_URL":"\u8acb\u8f38\u5165\u4e00\u500b\u6709\u6548\u7684 \u7db2\u5740.","COM_EASYSOCIAL_CONVERSATIONS_ERROR_EMPTY_RECIPIENTS":"\u8acb\u65b0\u589e\u67d0\u4e9b\u6536\u4ef6\u8005\u8207\u60a8\u7684\u5c0d\u8a71.","COM_EASYSOCIAL_CONVERSATIONS_ERROR_EMPTY_MESSAGE":"\u65b0\u589e\u4e00\u7b46\u8a0a\u606f,\u958b\u59cb\u60a8\u5011\u7684\u8ac7\u8a71.","COM_EASYSOCIAL_PRIVACY_TOOLTIPS_SHARED_WITH_PUBLIC":"\u5206\u4eab:\u6bcf\u500b\u4eba","COM_EASYSOCIAL_PRIVACY_TOOLTIPS_SHARED_WITH_MEMBER":"\u5206\u4eab:\u8a3b\u518a\u7528\u6236","COM_EASYSOCIAL_PRIVACY_TOOLTIPS_SHARED_WITH_FRIENDS_OF_FRIEND":"\u5206\u4eab:\u6211\u670b\u53cb\u7684\u670b\u53cb","COM_EASYSOCIAL_PRIVACY_TOOLTIPS_SHARED_WITH_FRIEND":"\u5206\u4eab:\u6211\u7684\u670b\u53cb","COM_EASYSOCIAL_PRIVACY_TOOLTIPS_SHARED_WITH_ONLY_ME":"\u5206\u4eab:\u53ea\u6709\u6211","COM_EASYSOCIAL_PRIVACY_TOOLTIPS_SHARED_WITH_CUSTOM":"\u5206\u4eab:\u81ea\u8a02","COM_EASYSOCIAL_AT_LOCATION":"%s","COM_EASYSOCIAL_ACTIVITY_APPS_UNHIDE_SUCCESSFULLY":"\u7684\u8cbc\u6587,\u5f9e\u9019\u500b\u61c9\u7528\u7a0b\u5f0f\u6b64\u6642\u6703\u53ef\u898b\u4e0a\u60a8\u7246.","COM_EASYSOCIAL_ACTIVITY_USERS_UNHIDE_SUCCESSFULLY":"\u5f9e\u8a72\u7528\u6236\u7684\u8cbc\u6587\u6b64\u9805\u6b64\u6642\u5c07\u91cd\u65b0\u986f\u793a\u5728\u60a8\u7684\u6d3b\u52d5\u7246.","COM_EASYSOCIAL_ACTIVITY_LOG_LOAD_PREVIOUS_STREAM_ITEMS":"\u8f09\u5165\u4ee5\u524d\u6d3b\u52d5","COM_EASYSOCIAL_COMMENTS_STATUS_SAVE_ERROR":"\u5132\u5b58\u932f\u8aa4","COM_EASYSOCIAL_COMMENTS_STATUS_LOADING":"\u6b64\u6642\u8f09\u5165","COM_EASYSOCIAL_COMMENTS_STATUS_LOAD_ERROR":"\u8f09\u5165\u932f\u8aa4","COM_EASYSOCIAL_COMMENTS_STATUS_DELETING":"\u522a\u53bb","COM_EASYSOCIAL_COMMENTS_STATUS_DELETE_ERROR":"\u522a\u9664\u932f\u8aa4","COM_EASYSOCIAL_LIKES_LIKE":"\u559c\u6b61","COM_EASYSOCIAL_LIKES_UNLIKE":"\u4e0d\u559c\u6b61","COM_EASYSOCIAL_COMMENTS_LOADED_OF_TOTAL":"%1s \u7684 %2s","COM_EASYSOCIAL_COMMENTS_STATUS_SAVING":"\u5132\u5b58","COM_EASYSOCIAL_COMMENTS_STATUS_SAVED":"\u5132\u5b58","COM_EASYSOCIAL_NO_BUTTON":"\u5426","COM_EASYSOCIAL_CONVERSATION_REPLY_POSTED_SUCCESSFULLY":"\u60a8\u7684\u7b54\u8986\u5df2\u904e\u5e33\u5b8c\u6210","COM_EASYSOCIAL_CONVERSATION_REPLY_FORM_EMPTY":"\u8acb\u8f38\u5165\u4e00\u4e9b\u8cc7\u8a0a\u5728\u4e0b\u9762\u7684\u8868\u683c.","COM_EASYSOCIAL_STREAM_FILTER_WARNING_TITLE_EMPTY":"\u7be9\u9078\u540d\u7a31\u662f\u7a7a\u7684.\u8acb\u8f38\u5165\u7be9\u9078\u540d\u7a31\u7e7c\u7e8c.","COM_EASYSOCIAL_STREAM_FILTER_WARNING_HASHTAG_EMPTY":"\u6a19\u7c64\u662f\u7a7a\u7684.\u8acb\u8f38\u5165\u60a8\u7684\u6a19\u8a18\u7e7c\u7e8c.","COM_EASYSOCIAL_EVENTS_GUEST_PENDING":"\u6709\u5f85","COM_EASYSOCIAL_EVENTS_DETECTING_LOCATION":"\u6aa2\u6e2c\u4f4d\u7f6e","COM_EASYSOCIAL_EXPLORER_ENTER_FOLDER_NAME":"\u8f38\u5165\u8cc7\u6599\u593e\u540d\u7a31","COM_EASYSOCIAL_EXPLORER_INVALID_FOLDER_NAME":"\u4e0d\u6b63\u78ba\u8cc7\u6599\u593e\u540d\u7a31.","COM_EASYSOCIAL_FRIENDS_REQUEST_SENT_PENDING_APPROVAL":"\u9080\u8acb\u5df2\u767c\u9001\u5230 <strong> %1s <\/strong>","COM_EASYSOCIAL_FRIENDS_REQUEST_DIALOG_TITLE":"\u670b\u53cb\u9080\u8acb","COM_EASYSOCIAL_FRIENDS_CANCEL_REQUEST_DIALOG_CANCELLED":"\u60a8\u70ba %1s \u7684\u670b\u53cb\u9080\u8acb\u5df2\u88ab\u53d6\u6d88.","COM_EASYSOCIAL_FRIENDS_DIALOG_CANCEL_REQUEST":"\u53d6\u6d88\u670b\u53cb\u9080\u8acb","COM_EASYSOCIAL_YES_CANCEL_MY_REQUEST_BUTTON":"\u662f\u7684\u53d6\u6d88\u6211\u7684\u9080\u8acb","COM_EASYSOCIAL_REGISTRATION_ERROR_DIALOG_TITLE":"\u932f\u8aa4!","COM_EASYSOCIAL_ADVANCED_SEARCH_ADDRESS_DISTANCE_NOTICE":"<strong> \u901a\u77e5:<\/strong> \u8acb\u78ba\u4fdd\u70ba\u9130\u8fd1\u641c\u5c0b\u60a8\u8a2d\u5b9a\u6a94\u6848\u4f4d\u5740\u6b04\u4f4d\u4e2d\u8f38\u5165\u60a8\u7684\u5730\u7406\u4f4d\u7f6e.","COM_EASYSOCIAL_STREAM_LOAD_PREVIOUS_STREAM_ITEMS":"\u8f09\u5165\u4ee5\u524d\u8cbc\u5857\u7246","COM_EASYSOCIAL_SEARCH_LOAD_MORE_ITEMS":"\u8f09\u5165\u66f4\u591a\u7684\u6b64\u9805","COM_EASYSOCIAL_FRIENDS_REQUEST_SENT_NOTICE":"\u670b\u53cb\u9080\u8acb\u50b3\u9001.","COM_EASYSOCIAL_SUBSCRIPTION_INFO":"\u8cc7\u8a0a","COM_EASYSOCIAL_FRIENDS_REQUEST_REJECTED":"\u670b\u53cb\u9080\u8acb\u88ab\u62d2\u7d55.","COM_EASYSOCIAL_STREAM_META_JOINER":"","COM_EASYSOCIAL_STORY_SUBMIT_ERROR":"\u5f35\u8cbc\u60a8\u7684\u72c0\u614b\u6642\u767c\u751f\u932f\u8aa4.","COM_EASYSOCIAL_STORY_CONTENT_EMPTY":"\u60a8\u5fd8\u4e86\u586b\u5beb\u60a8\u7684\u72c0\u614b\u6587\u5b57\u5537?","COM_EASYSOCIAL_STORY_NOT_ON_STREAM_FILTER":"\u60a8\u525b\u525b\u767c\u4f48\u7684\u6545\u4e8b\u4e0d\u986f\u793a\u5728\u9019\u689d\u5c0f\u6eaa\u56e0\u70ba\u5b83\u4e0d\u5305\u542b\u6709\u95dc \u6a19\u7c64 \u5230\u6b64\u7246\u7684\u7be9\u9078.","COM_EASYSOCIAL_STORY_EVENT_INSUFFICIENT_DATA":"\u4e0d\u8db3\u8cc7\u6599\u65b0\u589e\u6d3b\u52d5.","COM_EASYSOCIAL_STORY_EVENT_INVALID_START_END_DATETIME":"\u4e0d\u6b63\u78ba\u958b\u59cb\u7d50\u675f\u65e5\u671f\u6642\u9593.","COM_EASYSOCIAL_STREAM_STORY_WITH":"\u8207","COM_EASYSOCIAL_STREAM_STORY_WITH_JOINER":"","COM_EASYSOCIAL_STREAM_STORY_WITH_LAST_JOINER":"\u548c","COM_EASYSOCIAL_AND":"\u548c","COM_EASYSOCIAL_MOOD_FEELING_CUSTOM":"\u611f\u89ba %1$s ","COM_EASYSOCIAL_VIDEOS_STORY_SELECT_CATEGORY":"\u8acb\u9078\u53d6\u60a8\u7684\u8996\u983b\u7684\u985e\u5225\u7b2c\u4e00\u6b21.","COM_EASYSOCIAL_VIDEOS_STORY_ENTER_VIDEO":"\u8acb\u9078\u53d6\u4e00\u500b\u8996\u983b\u7b2c\u4e00\u6b21.","COM_EASYSOCIAL_VIDEOS_STORY_PROCESSING_VIDEO":"\u6211\u5011\u6b64\u6642\u8655\u7406\u7684\u8996\u983b.\u8acb\u7b49\u5f85,\u76f4\u5230\u8996\u983b\u8655\u7406\u5b8c\u7562.","COM_EASYSOCIAL_VIDEOS_STORY_CLICK_INSERT_VIDEO":"\u8acb\u6309\u4e00\u4e0b\u63d2\u5165\u8996\u983b\u6309\u9215\u5c07\u5d4c\u5165\u5230\u60a8\u7684\u8996\u983b\u9023\u7d50.","COM_EASYSOCIAL_VIDEOS_STORY_NO_VIDEO_DETECTED":"\u672a\u8996\u983b\u6aa2\u6e2c.\u8acb\u4e0a\u50b3\u4e00\u6bb5\u8996\u983b\u6216\u5d4c\u5165\u8996\u983b\u7684\u9023\u7d50\u4ee5\u7e7c\u7e8c.","COM_EASYSOCIAL_SUBSCRIPTION_DIALOG_UNSUBSCRIBE":"\u53d6\u6d88\u8a02\u95b1","COM_EASYSOCIAL_SUBSCRIPTION_DIALOG_SUBSCRIBE":"\u8a02\u95b1","COM_EASYSOCIAL_SUBSCRIPTION_BUTTON_OK":"\u78ba\u8a8d","COM_EASYSOCIAL_SUBSCRIPTION_BUTTON_SUBMIT":"\u63d0\u4ea4","COM_EASYSOCIAL_SUBSCRIPTION_BUTTON_CANCEL":"\u53d6\u6d88","COM_EASYSOCIAL_SUBSCRIPTION_BUTTON_UNSUBSCRIBE":"\u53d6\u6d88\u8a02\u95b1","COM_EASYSOCIAL_SUBSCRIPTION_ARE_YOU_SURE_UNSUBSCRIBE":"\u60a8\u78ba\u5b9a\u8981\u53d6\u6d88\u8a02\u95b1\u5f9e\u9019\u500b\u9805\u76ee\u55ce?","COM_EASYSOCIAL_SUBSCRIPTION_BUTTON_SUBSCRIBE":"\u8a02\u95b1","COM_EASYSOCIAL_STREAM_DIALOG_FEED":"\u8cbc\u6587","COM_EASYSOCIAL_STREAM_BUTTON_CLOSE":"\u95dc\u9589"});
});