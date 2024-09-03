class Navigation {

    public get homeButton() {
        return $('//android.widget.TextView[@text="󰚡"]');
    }

    public get loginButton() {
        return $('//android.widget.TextView[@text="󰍂"]');
    }

    public get swipeButton() {
        return $('//android.widget.TextView[@text="󰤼"]');
    }
};

export default new Navigation();
