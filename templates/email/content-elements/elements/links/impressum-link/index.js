const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('impressum')
    .withLabel('Impressum')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))