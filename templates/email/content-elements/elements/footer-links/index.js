const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('footer-links')
    .withLabel('Footer Links')
    .withIcon(Icon.TEXT)
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.link.withLabel('Impressum'),
        cx.part.link.withLabel('Datenschutz'),
        cx.part.link.withLabel('Einstellungen aktualisieren'),
        cx.part.link.withLabel('Abmelden')
)
       .withDropzones(
        cx.dropzone
            .withDropzone('impressum')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../links/impressum-link'),
              
            ),
        cx.dropzone
            .withDropzone('datenschutz')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../links/datenschutz-link'),
               
            ),
        cx.dropzone
            .withDropzone('einstellungen')
            .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../links/einstellungen-link'),
               
            ),
      
        cx.dropzone
            .withDropzone('abmelden')
             .withMaxAllowedElements(1)
            .withAllowedElements(
                require('../links/abmelden-link')
            )
    );
