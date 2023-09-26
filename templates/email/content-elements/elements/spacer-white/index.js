const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-trenner-linie')
    .withLabel('Trenner Leer')
    .withDescription('Grau')
    .withIcon(Icon.DIVIDER)
    .withFile(require('./template.twig'));
