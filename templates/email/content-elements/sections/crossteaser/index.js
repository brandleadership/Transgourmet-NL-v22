const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('crossteaser')
    .withLabel('Crossteaser')
    .withIcon(Icon.IMAGE)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('crossteaser-list')
            .withAllowedElements(require('../../elements/nl-crossteaser-item'))
    );
