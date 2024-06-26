const {
    EnterMode,
    Feature,
    Format,
    FontSizeUnit,
    cx,
} = require('@bsi-cx/design-build');

module.exports = cx.htmlEditorConfig
    .withIdentifier('extended')
    .withFeatures(
        Feature.BOLD,
        Feature.ITALIC,
        Feature.UNDERLINE,
        Feature.STRIKE_THROUGH,
        Feature.SUBSCRIPT,
        Feature.SUPERSCRIPT,
        Feature.FONT_SIZE,
        Feature.LINE_HEIGHT,
        Feature.TEXT_COLOR,
        Feature.ALIGN_LEFT,
        Feature.ALIGN_CENTER,
        Feature.ALIGN_RIGHT,
        Feature.ALIGN_JUSTIFY,
        Feature.FORMAT_OL,
        Feature.FORMAT_UL,
        Feature.OUTDENT,
        Feature.INDENT,
        Feature.PARAGRAPH_FORMAT,
        Feature.QUOTE,
        Feature.SPECIAL_CHARACTERS,
        Feature.INSERT_LINK
    )
    .withTextColors('#e20026', '#ffffff', '#000000')
    .withFormats(
        Format.P,
        Format.H1,
        Format.H2,
        Format.H3,
        Format.H4,
        Format.H5,
        Format.H6,
        Format.PRE
    )
    .withFontSizes(8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 32, 36, 48, 72)
    .withFontSizeUnit(FontSizeUnit.PX)
    .withFontSizeDefault(16)
    .withLineHeights(1, 1.15, 1.5, 2)
    .withEnterMode(EnterMode.P);
