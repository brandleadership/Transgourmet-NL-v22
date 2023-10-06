const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-crossteaser-item')
    .withLabel('Crossteaser Bild')
    .withIcon(Icon.IMAGE)
    .withFile(require('./template.twig'))
    .withParts(cx.part.image.withLabel('Bild'));
