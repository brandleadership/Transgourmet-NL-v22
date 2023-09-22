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
            .withAllowedElements(
                require('../../elements/single-product-automated'),
                require('../../elements/spacer-grey'),
                cx.dropzone
                    .withDropzone('double-card-auto-right')
                    .withAllowedElements(
                        require('../../elements/single-product-automated'),
                        require('../../elements/spacer-grey')
                    )
            )
    );
