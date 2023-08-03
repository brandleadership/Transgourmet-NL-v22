const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-footer-address')
    .withLabel('Text – Adresse')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(cx.part.plainText.withLabel('Text Adresse'));
