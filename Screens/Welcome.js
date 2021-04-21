import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../Configs/colors";
import CustomTouchButton from "../Components/CutomTouchButton";

export default function Welcome({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Image source={require("../assets/Logo.png")} style={styles.appLogo} />
        <Text style={styles.welcomeMsg}>Welcome to Todoist</Text>
        <Image
          source={{
            uri:
              "https://cdn.dribbble.com/users/2066397/screenshots/11467178/media/782396ff46bf32ee524c9e9f1e3e2d53.png?compress=1",
          }}
          style={styles.drawingImg}
          resizeMode="contain"
        />
        <CustomTouchButton
          btnStyle={styles.emailButton}
          animationColor={"#fff"}
        >
          <Entypo name="mail" size={28} color="#fff" />
          <Text style={styles.emailText}>CONTINUE WITH EMAIL</Text>
        </CustomTouchButton>
        <CustomTouchButton
          btnStyle={styles.googleButton}
          animationColor={colors.primary}
        >
          <Image
            source={require("../assets/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>CONTINUE WITH GOOGLE</Text>
        </CustomTouchButton>
        <View style={styles.socialMediaBtnWrapper}>
          <CustomTouchButton
            btnStyle={styles.socialButton}
            animationColor={colors.primary}
          >
            <Image
              source={require("../assets/apple-logo.png")}
              style={styles.socialIcon}
            />
          </CustomTouchButton>
          <CustomTouchButton
            btnStyle={styles.socialButton}
            animationColor={colors.primary}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.socialIcon}
            />
          </CustomTouchButton>
        </View>
        <Text style={styles.termsAndConditionsText}>
          By continuing you agree to{" "}
          <Text style={styles.termsLink}>
            Todoist's Terms of Service and Privacy Policy
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appLogo: {
    width: 60,
    height: 60,
  },
  wrapper: { display: "flex", alignItems: "center", paddingTop: 20 },
  welcomeMsg: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#575757",
  },
  drawingImg: {
    width: "100%",
    height: 300,
    marginTop: 30,
  },
  emailIcon: {
    width: 25,
    height: 25,
  },
  googleIcon: { width: 25, height: 25 },
  emailWrapper: {
    width: "100%",
    marginTop: 20,
  },
  googleButton: {
    width: "90%",
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d3d3d3",
    borderWidth: 1,
  },
  emailButton: {
    width: "90%",
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: colors.primary,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleText: {
    color: "#575757",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  emailText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  termsAndConditionsText: {
    color: "#d3d3d3",
    textAlign: "center",
    marginTop: 20,
  },
  socialMediaBtnWrapper: {
    width: "90%",
    marginHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  socialButton: {
    borderColor: "#d3d3d3",
    borderWidth: 1,
    padding: 8,
    flex: 1,
    alignItems: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  termsLink: {
    textDecorationLine: "underline",
  },
});
