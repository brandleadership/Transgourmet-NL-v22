const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-links')
    .withLabel('Footer Links')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link.withLabel('Impressum'),
        cx.part.link.withLabel('Datenschutz'),
        cx.part.link.withLabel('Einstellungen aktualisieren'),
        cx.part.link.withLabel('Abmelden')
    );
