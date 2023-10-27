const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('double-card')
    .withLabel('Double Card Produkt')
    .withDescription('For use in Product Dynamic')
    .withIcon(Icon.TEXT_WITH_IMAGE)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('double-card-left')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
               
            ),
        cx.dropzone
            .withDropzone('double-card-right')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../../elements/single-product'),
              
            )
    );
