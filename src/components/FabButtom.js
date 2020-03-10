import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class components extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5
    }).start();

    this.open = !this.open;
  };

  render() {
    const cameraStyle = {
      transform: [
        {
          scale: this.animation
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -60]
          })
        }
      ]
    };

    const likeStyle = {
      transform: [
        {
          scale: this.animation
        },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120]
          })
        }
      ]
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]
    };

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback onPress={() => alert("Like")}>
          <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
            <AntDesign name="hearto" size={20} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert("Camera")}>
          <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
            <AntDesign name="camera" size={20} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, rotation]}>
            <AntDesign name="plus" size={24} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute"
  },

  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00213B",
    shadowRadius: 10,
    shadowColor: "#00213B",
    shadowOffset: 0.3,
    shadowOffset: {
      height: 10
    }
  },

  submenu: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  }
});
