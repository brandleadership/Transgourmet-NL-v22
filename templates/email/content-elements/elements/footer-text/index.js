const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-footer-text')
    .withLabel('Text – Disclaimer')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/editor/formatted-text')
            )
    );
