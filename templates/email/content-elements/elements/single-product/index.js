const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('single-product')
    .withLabel('Produkt – 1 Stück Man.')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.raw('product').withLabel('Produkt')

    );
