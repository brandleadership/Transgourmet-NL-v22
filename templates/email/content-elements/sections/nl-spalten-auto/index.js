const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-spalten-auto')
    .withLabel('Produkt – 4 Stücke Auto. – 2 Sp.')
    .withIcon(Icon.TWO_COLUMNS)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('nl-spalten-left-auto')
            .withAllowedElements(
                require('../../elements/single-product-automated'),
                require('../../elements/spacer-grey'),
                cx.dropzone
                    .withDropzone('nl-spalten-right-auto')
                    .withAllowedElements(
                        require('../../elements/single-product-automated'),
                        require('../../elements/spacer-grey')
                    ),
                cx.dropzone
                    .withDropzone('nl-spalten-left-auto-2')
                    .withAllowedElements(
                        require('../../elements/single-product-automated'),
                        require('../../elements/spacer-grey')
                    ),
                cx.dropzone
                    .withDropzone('nl-spalten-right-auto-2')
                    .withAllowedElements(
                        require('../../elements/single-product-automated'),
                        require('../../elements/spacer-grey')
                    ),
                cx.dropzone
                    .withDropzone('nl-spalten-double-card')
                    .withAllowedElements(
                        require('../../elements/spacer-grey'),
                        require('../../elements/double-card-auto')
                    )
            )
    );
