const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-trenner-linie')
    .withLabel('Trenner – Linie')
    .withDescription('Weiss')
    .withIcon(Icon.DIVIDER)
    .withFile(require('./template.twig'));
