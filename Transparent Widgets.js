// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: clone;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: teal; icon-glyph: magic;

const { transparent } = importModule('no-background.js')

const widget = new ListWidget()
widget.backgroundImage = await transparent(args.widgetParameter)

if (config.runsInWidget) {
    Script.setWidget(widget)
} else {
    await widget.presentSmall()
}