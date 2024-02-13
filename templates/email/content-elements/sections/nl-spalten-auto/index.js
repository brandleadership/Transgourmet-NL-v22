const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-spalten-auto')
    .withLabel('Produkt – 4 Stücke Auto. – 2 Sp.')
    .withIcon(Icon.TWO_COLUMNS)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('nl-spalten-left-auto')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product-automated'),
             
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right-auto')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product-automated'),
               
            ),
        cx.dropzone
            .withDropzone('nl-spalten-left-auto-2')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product-automated'),
              
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right-auto-2')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product-automated'),
              
            ),
        cx.dropzone
            .withDropzone('nl-spalten-double-card-auto')
            .withAllowedElements(
              
                require('../../elements/double-card-auto')
            ),
          cx.dropzone
            .withDropzone('nl-spalten-double-card-auto-2')
            .withAllowedElements(
              require('../../elements/double-card-auto'),
          
        ),
          cx.dropzone
            .withDropzone('nl-spalten-double-card-auto-3')
            .withAllowedElements(
              require('../../elements/double-card-auto'),
         
            )
    );
