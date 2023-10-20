const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer')
    .withLabel('Footer - Container')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('footer-agh-links')
            .withAllowedElements(require('../../elements/footer-agh-links')),
        cx.dropzone
            .withDropzone('social')
            .withAllowedElements(
                require('../../elements/footer-social-follow')
            ),
        cx.dropzone
            .withDropzone('footerlegal')
            .withAllowedElements(require('../../elements/footer-text')),
        cx.dropzone
            .withDropzone('footeraddress')
            .withAllowedElements(require('../../elements/footer-address')),
        cx.dropzone
            .withDropzone('footerbottom')
            .withAllowedElements(require('../../elements/footer-links'))
    );
