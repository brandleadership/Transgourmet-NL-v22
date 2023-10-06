const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-footer-text-top')
    .withLabel('Text – Disclaimer')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/editor/formatted-text')
            ),
        cx.part.link.withLabel('Mein Markt'),
        cx.part.link.withLabel('Kontakt'),
        cx.part.formattedText
            .withLabel('Text')
            .withHtmlEditorConfig(
                require('../../../../../configs/editor/formatted-text')
            )
    );
