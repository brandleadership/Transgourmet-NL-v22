const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer')
    .withLabel('Footer - Container')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withDropzones(
        cx.dropzone
            .withDropzone('footer-text-top-abholen')
            .withAllowedElements(
                require('../../elements/footer-text-top-abholen')
            ),
        cx.dropzone
            .withDropzone('social-abholen')
            .withAllowedElements(
                require('../../elements/footer-social-follow')
            ),
        cx.dropzone
            .withDropzone('footerlegal-abholen')
            .withAllowedElements(require('../../elements/footer-text')),
        cx.dropzone
            .withDropzone('footeraddress-abholen')
            .withAllowedElements(require('../../elements/footer-address')),
        cx.dropzone
            .withDropzone('footerbottom-abholen')
            .withAllowedElements(require('../../elements/footer-links'))
    );
