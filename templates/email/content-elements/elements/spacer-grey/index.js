const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-trenner')
    .withLabel('Trenner Linie')
    .withDescription('Grau')
    .withIcon(Icon.DIVIDER)
    .withFile(require('./template.twig'));
