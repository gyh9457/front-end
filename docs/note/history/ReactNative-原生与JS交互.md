---
title: ReactNative 原生与JS交互
date: 2017-12-12 19:22:08
tags:
---
ReactNative中原生与JS的交互大致可以有两种形式，一种是原生主动发送事件给JS，一种是JS主动调用原生暴露的方法。要实现这两种交互需要编写一个原生模块，该模块继承了`ReactContextBaseJavaModule` 。

以下是原生模块代码示例:
``` java

package com.bundletest.modules;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by gyh on 2017/12/12.
 */

public class IdModule extends ReactContextBaseJavaModule{

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public IdModule(final ReactApplicationContext reactContext) {
        super(reactContext);
        new Handler(Looper.getMainLooper()).postDelayed(
                new Runnable() {
                    @Override
                    public void run() {
                        gotoMainPage();
                    }
                }, 3000
        );
    }

    /*
    *  ReactContextBaseJavaModule要求派生类实现
    *  getName 方法。这个函数用于返回一个字符串名字
    *  这个名字在JS端标记这个模块
    */
    @Override
    public String getName() {
        return "ModuleId";
    }

    /*
    *  通过 RCTDeviceEventEmitter 来发送事件
    */

    public void gotoMainPage() {
        WritableMap params = Arguments.createMap();
        params.putInt("name", 666);
        reactApplicationContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("test", params);
    }

    /*
    *  一个可选的方法 getContants 返回了需要导出给
    *  JS使用的常量。不一定需要实现，但在定义一些可以
    *  被JS使用的预定义的值时非常有用
    */
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        return constants;
    }

    /*
    *  使用注解ReactMethod导出一个方法给JS使用
    *  方法的返回类型必须为 void 
    */
    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
```
模块代码写完后还需要注册模块:
``` java
package com.bundletest.modules;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by gyh on 2017/12/12.
 */

public class IdModulePackage implements ReactPackage {

    /*
    *  需要在应用的Package类的createNativeModules
    *  方法中添加这个模块
    */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new IdModule(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
```
然后在`MainApplication` 中添加这个 `Package`
``` java
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new IdModulePackage()
      );
    }
```
经过上面几个步骤，原生模块添加完成，可以在JS端使用。
``` js
import { NativeModules, DeviceEventEmitter } from 'react-native';

// 通过NativeModules调用ReactMethod暴露的方法
NativeModules.ToastExample.show('Awesome', ToastExample.SHORT);

// 通过 DeviceEventEmitter 监听事件
DeviceEventEmitter.addListener('test', function(result) {
    // handle event.
});
```