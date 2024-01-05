const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('einstellungen')
    .withLabel('Einstellungen aktualisieren')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))