class SwipePage {
    public get findMessage() {
        return $('//android.widget.TextView[@text="You found me!!!"]');
    }
    public get nextBoxText() {
        return $('//android.widget.TextView[@text="WebdriverIO has a great community that supports all members."]');
    }

};

export default new SwipePage();
