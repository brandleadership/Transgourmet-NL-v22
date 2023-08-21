const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-spalten-auto')
    .withLabel('Produkt – 6 Stücke Auto. – 2 Sp.')
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
                    )
            )
    );
