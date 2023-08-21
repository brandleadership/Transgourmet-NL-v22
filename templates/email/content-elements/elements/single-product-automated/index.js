const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('single-product-automated')
    .withLabel('Produkt – 1 Stück Auto')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withFile(require('./template.twig'))
    .withParts(cx.part.raw('product').withLabel('Produkt'));
