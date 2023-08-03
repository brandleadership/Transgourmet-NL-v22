const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('nl-social-follow')
    .withLabel('Social Media')
    .withIcon(Icon.SOCIAL_SHARE)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.socialFollow.withLabel('Social Media Verlinkungen'),
        cx.part.image.withLabel('Apple Store Bild'),
        cx.part.link.withLabel('Apple Store Link'),
        cx.part.image.withLabel('Google Play Store Bild'),
        cx.part.link.withLabel('Google Play Store')
    );
