import React, { useState } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CustomTouchButton(props) {
  const navigation = useNavigation();
  const [btnAnimate, setBtnAnimate] = useState(false);
  return (
    <TouchableOpacity
      style={[props.btnStyle, styles.basic]}
      activeOpacity={0.8}
      onPress={() => {
        Vibration.vibrate();
        setBtnAnimate(!btnAnimate);
        setTimeout(() => {
          setBtnAnimate(false);
          navigation.navigate("Todo");
        }, 1000);
      }}
    >
      <>
        {btnAnimate ? (
          <ActivityIndicator
            size="small"
            color={props.animationColor || "#0000ff"}
          />
        ) : (
          props.children
        )}
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  basic: {
    marginHorizontal: 2,
    borderRadius: 5,
    padding: 8,
    height: 40,
  },
});
