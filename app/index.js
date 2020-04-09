import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

const { Value, event, block, cond, eq, set } = Animated;

class Donate extends Component {
  constructor() {
    super();
    this.buttonOpacity = new Value(1);
    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([cond(eq(state, State.END), set(this.buttonOpacity, 0))])
      }
    ]);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end"
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require("../assets/hug2.png")}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 3 }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{ ...styles.button, opacity: this.buttonOpacity }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          <View style={{ ...styles.button, backgroundColor: "#4285F4" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              SIGN IN WITH GOOGLE
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Donate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5
  }
});
