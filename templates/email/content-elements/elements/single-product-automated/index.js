const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('single-product-automated')
    .withLabel('Produkt – 1 Stück Auto')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.image.withLabel('Product Image'),
        cx.part.plainText.withLabel('Quality'),
        cx.part.plainText.withLabel('Description'),
        cx.part.plainText.withLabel('Iso'),
        cx.part.plainText.withLabel('Price'),
        cx.part.plainText.withLabel('Currency')
    );
