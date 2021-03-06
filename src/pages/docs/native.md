---
id: 1
title: Native
category: introduction
scope: null
---

# Getting Started with Victory Native

In this guide, we’ll show you how to get started with Victory Native and the React Native SVG dependency running in your React Native app for iOS and Android.

#### 1. Adding Victory Native to your React Native app

Visit the [the guide on getting started](https://facebook.github.io/react-native/docs/getting-started.html) with React Native if you’re just getting started with React Native.

To add Victory Native to your React Native app install `victory-native` and `react-native-svg`. Victory Native is compatible with React Native 0.50 or higher.

```bash
$ yarn add victory-native react-native-svg # or
$ npm install --save victory-native react-native-svg
```

You will need to link the native dependencies of React Native SVG to the iOS and Android projects.

```bash
$ react-native link react-native-svg
```

**Note:** If you run the iOS app and see a linker error for `-lRNSVG-tvOS` you will need to remove `libRNSVG-tvOS.a` from the “Link Binary with Libraries” section within your iOS app’s target’s properties.

#### 2. Using Victory Native in your React Native app

Victory Native behaves and functions the same way for React Native as it does for the web. Just import components from `victory-native` to get started. To learn move about how to use Victory visit the [Getting Started Guide][].

The example below shows a how Victory Native easily integrates within your React Native app.

```jsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
```

#### 3. Testing Components that use Victory Native

You can test your components that render Victory Native using Jest and React Test Renderer which is included out–of–the box with React Native. The `jest` configuration section in `package.json` will need to be modified to ensure dependencies are transformed otherwise you will see an error when tests are run.

```json
"jest": {
  "preset": "react-native",
  "transformIgnorePatterns": [
    "node_modules/(?!victory|react-native-svg|react-native)"
  ],
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  }
}
```

To test the above `App` component you can simply do:

```jsx
import "react-native";
import React from "react";
import App from "../App.js";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
```

**Note:** `renderer` must be imported _after_ `react-native` for tests to work.

[getting started guide]: https://formidable.com/open-source/victory/docs/
