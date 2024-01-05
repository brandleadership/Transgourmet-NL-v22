const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('datenschutz')
    .withLabel('Datenschutz')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))