package com.rn_statusbar;

import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rn_statusbar";
    }

    @Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    View decorView = getWindow().getDecorView();
    decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    if (Build.VERSION.SDK_INT >= 21) {
        getWindow().setStatusBarColor(Color.TRANSPARENT);
    }
}
}
