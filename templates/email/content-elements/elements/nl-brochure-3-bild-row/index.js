const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("nl-brochure-sp-3")
  .withLabel("Brochure 3 Images")
  .withIcon(Icon.THREE_COLUMNS)
  .withFile(require("./template.twig"))
  .withDropzones(
    cx.dropzone
      .withDropzone("column1")
      .withAllowedElements(require("../../elements/nl-brochure-image")),
    cx.dropzone
      .withDropzone("column2")
      .withAllowedElements(require("../../elements/nl-brochure-image")),
    cx.dropzone
      .withDropzone("column3")
      .withAllowedElements(require("../../elements/nl-brochure-image"))
  );
