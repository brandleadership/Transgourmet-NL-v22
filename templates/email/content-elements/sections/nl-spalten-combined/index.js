const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-spalten-combined')
    .withLabel('Produkt – 4 Stücke Combined. – 2 Sp.')
    .withIcon(Icon.TWO_COLUMNS)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('nl-spalten-left')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
                 require('../../elements/single-product-automated'),
              
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
                 require('../../elements/single-product-automated'),
               
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right-2')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
                 require('../../elements/single-product-automated'),
               
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right-2')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
                require('../../elements/single-product-automated'),
            ),
        cx.dropzone
            .withDropzone('nl-spalten-double-card-comb')
            .withAllowedElements(
              require('../../elements/double-card-auto'),
              require('../../elements/double-card')
        ),
          cx.dropzone
            .withDropzone('nl-spalten-double-card-comb-2')
            .withAllowedElements(
              require('../../elements/double-card-auto'),
              require('../../elements/double-card')
        ),
          cx.dropzone
            .withDropzone('nl-spalten-double-card-comb-3')
            .withAllowedElements(
              require('../../elements/double-card-auto'),
              require('../../elements/double-card')
            )
    );
