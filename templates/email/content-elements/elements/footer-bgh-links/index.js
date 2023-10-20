const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-footer-bgh-links')
    .withLabel('BGH Links')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link.withLabel('Aktionen'),
        cx.part.link.withLabel('Verkaufsberater')
    );
