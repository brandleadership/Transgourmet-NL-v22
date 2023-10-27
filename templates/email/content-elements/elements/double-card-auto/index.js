const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('double-card-auto')
    .withLabel('Double Card Produkt Auto')
    .withDescription('For use in Product Auto')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('double-card-auto-left')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product-automated'),
               
            ),
        cx.dropzone
            .withDropzone('double-card-auto-right')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product-automated'),
                
            )
    );
