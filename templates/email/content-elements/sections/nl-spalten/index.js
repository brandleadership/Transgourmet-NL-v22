const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-spalten')
    .withLabel('Produkt – 4 Stücke Man. – 2 Sp.')
    .withIcon(Icon.TWO_COLUMNS)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('nl-spalten-left')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
              
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
               
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right-2')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
               
            ),
        cx.dropzone
            .withDropzone('nl-spalten-right-2')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
               
            ),
        cx.dropzone
            .withDropzone('nl-spalten-double-card')
            .withAllowedElements(
             
                require('../../elements/double-card')
            ),
          cx.dropzone
            .withDropzone('nl-spalten-double-card-auto-4')
            .withAllowedElements(
              require('../../elements/double-card'),
          
        ),
          cx.dropzone
            .withDropzone('nl-spalten-double-card-auto-5')
            .withAllowedElements(
              require('../../elements/double-card'),
         
            )
    );
