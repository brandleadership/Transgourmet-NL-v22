const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('abmelden')
    .withLabel('Abmelden')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))