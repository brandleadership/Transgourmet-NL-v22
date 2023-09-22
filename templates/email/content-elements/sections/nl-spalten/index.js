const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-spalten')
    .withLabel('Produkt – 4 Stücke Dyn. – 2 Sp.')
    .withIcon(Icon.TWO_COLUMNS)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('nl-spalten-left')
            .withAllowedElements(
                require('../../elements/single-product'),
                require('../../elements/spacer-grey'),
                cx.dropzone
                    .withDropzone('nl-spalten-right')
                    .withAllowedElements(
                        require('../../elements/single-product'),
                        require('../../elements/spacer-grey')
                    ),
                cx.dropzone
                    .withDropzone('nl-spalten-right-2')
                    .withAllowedElements(
                        require('../../elements/single-product'),
                        require('../../elements/spacer-grey')
                    ),
                cx.dropzone
                    .withDropzone('nl-spalten-right-2')
                    .withAllowedElements(
                        require('../../elements/single-product'),
                        require('../../elements/spacer-grey')
                    ),
                cx.dropzone
                    .withDropzone('nl-spalten-double-card-auto')
                    .withAllowedElements(
                        require('../../elements/spacer-grey'),
                        require('../../elements/double-card')
                    )
            )
    );
