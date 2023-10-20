require('./styles/styles.scss');

const { cx, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withTitle('E-Mail Scaffold')
    .withAuthor('BSI Business Systems Integration AG')
    .withDate('20.05.2022')
    .withPreviewImage(require('./thumbnail.png'))
    .withDefaultLocale(Locale.EN)
    .withLocales(Locale.EN, Locale.DE)
    .withContentElementGroups(
        cx.contentElementGroup
            .withGroupId('header')
            .withLabel('Header')
            .withContentElements(
                require('./content-elements/sections/header-1'),
                require('./content-elements/sections/header-2'),
                require('./content-elements/sections/header-3'),
                require('./content-elements/elements/nl-header-logo'),
                require('./content-elements/elements/nl-header-logo-transgourmet'),
                require('./content-elements/elements/nl-header-logo-transgourmet_prodega'),
                require('./content-elements/elements/nl-preheader'),
                require('./content-elements/elements/preview')
            ),
        cx.contentElementGroup
            .withGroupId('texte-bilder')
            .withLabel('Texte & Bilder')
            .withContentElements(
                require('./content-elements/sections/lead'),
                require('./content-elements/sections/lead-black'),
                require('./content-elements/elements/single-product'),
                require('./content-elements/elements/single-product-automated'),
                require('./content-elements/elements/double-card'),
                require('./content-elements/elements/double-card-auto'),
                require('./content-elements/sections/intro'),
                require('./content-elements/sections/text-mit-bild'),
                require('./content-elements/elements/nl-bild'),
                require('./content-elements/elements/nl-button'),
                require('./content-elements/elements/nl-brochure-3-bild-row'),
                require('./content-elements/elements/nl-brochure-image'),
                require('./content-elements/elements/nl-crossteaser-item'),
                require('./content-elements/sections/text-mit-bild-two-links'),
                require('./content-elements/elements/formatted-text')
            ),
        cx.contentElementGroup
            .withGroupId('produkte-promotionen')
            .withLabel('Produkte und Promotionen')
            .withContentElements(
                require('./content-elements/sections/nl-spalten'),
                require('./content-elements/sections/nl-spalten-auto'),
                require('./content-elements/sections/brochure'),
                require('./content-elements/sections/crossteaser')
            ),
        cx.contentElementGroup
            .withGroupId('footer')
            .withLabel('Footer Elemente')
            .withContentElements(
                require('./content-elements/sections/footer-beliefern'),
                require('./content-elements/sections/footer-abholen'),
                require('./content-elements/elements/footer-address'),
                require('./content-elements/elements/footer-links'),
                require('./content-elements/elements/footer-social-follow'),
                require('./content-elements/elements/footer-text'),
                require('./content-elements/elements/footer-agh-links'),
                require('./content-elements/elements/footer-bgh-links')
                // require('./content-elements/elements/footer-text-top'),
                // require('./content-elements/elements/footer-text-top-abholen')
            ),
        cx.contentElementGroup
            .withGroupId('diverses')
            .withLabel('Diverses')
            .withContentElements(
                require('./content-elements/elements/spacer-grey'),
                require('./content-elements/elements/spacer-white')
            )
    )

    .withDropzones(
        cx.dropzone
            .withDropzone('header')
            .withAllowedElements(
                require('./content-elements/elements/preview'),
                require('./content-elements/sections/header-1'),
                require('./content-elements/sections/header-2'),
                require('./content-elements/sections/header-3')
            ),

        cx.dropzone.withDropzone('main').withAllowedElements(
            require('./content-elements/sections/lead'),
            require('./content-elements/sections/lead-black'),
            require('./content-elements/elements/spacer-grey'),
            require('./content-elements/elements/spacer-white'),
            require('./content-elements/sections/intro'),
            require('./content-elements/sections/nl-spalten'),
            require('./content-elements/sections/nl-spalten-auto'),
            // require('./content-elements/elements/single-product'),
            // require('./content-elements/elements/single-product-automated'),
            require('./content-elements/elements/nl-bild'),
            // require('./content-elements/elements/nl-button'),
            require('./content-elements/sections/text-mit-bild'),
            require('./content-elements/elements/nl-brochure-3-bild-row'),
            // require('./content-elements/elements/nl-brochure-image'),
            require('./content-elements/sections/brochure'),
            require('./content-elements/sections/crossteaser'),
            require('./content-elements/sections/text-mit-bild-two-links'),
            require('./content-elements/elements/formatted-text')
        ),

        cx.dropzone
            .withDropzone('footer')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('./content-elements/sections/footer-beliefern'),
                require('./content-elements/sections/footer-abholen')
            )
    );
