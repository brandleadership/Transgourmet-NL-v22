const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-preheader')
    .withLabel('Browser Link')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(cx.part.link.withLabel('Browser Link'));
