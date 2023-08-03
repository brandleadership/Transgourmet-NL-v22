// element.single-product.label=Produkt – 1 Stück Dyn.
// element.single-product.icon=text-with-image
// element.single-product.parts.product.label=Produkt
const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("single-product")
  .withLabel("Produkt – 1 Stück Dyn.")
  .withIcon(Icon.TEXT_WITH_IMAGE)
  .withFile(require("./template.twig"))
  .withParts(cx.part.raw("product").withLabel("Produkt"));
