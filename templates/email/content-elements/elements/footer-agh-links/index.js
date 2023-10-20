const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-footer-agh-links')
    .withLabel('AGH Links')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link.withLabel('Mein Markt'),
        cx.part.link.withLabel('Kontakt')
    );
