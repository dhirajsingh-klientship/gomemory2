import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Interest from "../components/Interest";
import GroupComponent from "../components/GroupComponent";
import ProfileSection from "../components/ProfileSection";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <Interest />
      <View style={styles.rectangleParent}>
        <View style={styles.rectangle} />
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-16.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/rectangle-5.png")}
        />
      </View>
      <GroupComponent />
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={styles.rectangleShadowBox} />
        <Text style={[styles.byLynalBlond, styles.yearAgoOnFlexBox]}>
          By Lynal Blond
        </Text>
        <Text
          style={[styles.yearAgoOn, styles.yearAgoOnFlexBox]}
        >{`1 year ago on this
date`}</Text>
        <Image
          style={[styles.groupInner, styles.groupInnerPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-162.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={styles.rectangleShadowBox} />
        <Text style={[styles.byLynalBlond, styles.yearAgoOnFlexBox]}>
          By Lynal Blond
        </Text>
        <Text
          style={[styles.yearAgoOn, styles.yearAgoOnFlexBox]}
        >{`4 year ago on this
date`}</Text>
        <Image
          style={[styles.rectangleIcon, styles.groupInnerPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-163.png")}
        />
      </View>
      <Image
        style={[styles.child, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <Image
        style={[styles.item, styles.itemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <Text style={[styles.welcomeTheodore, styles.welcomeTheodorePosition]}>
        Welcome, Josh
      </Text>
      <Text style={[styles.discoverTheWorld, styles.welcomeTheodorePosition]}>
        Your Digital Family Heirloom
      </Text>
      <Image
        style={styles.inner}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <ProfileSection />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 142,
    left: 10,
  },
  rectanglePosition: {
    top: 494,
    height: 210,
    width: 162,
    position: "absolute",
  },
  yearAgoOnFlexBox: {
    textAlign: "left",
    color: Color.mainPrimary,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 12,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  itemLayout: {
    top: 655,
    height: 33,
    width: 33,
    borderRadius: 71,
    position: "absolute",
  },
  welcomeTheodorePosition: {
    letterSpacing: 1,
    left: "5.07%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 12,
    shadowOpacity: 1,
    elevation: 6.8,
    shadowRadius: 6.8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 210,
    width: 162,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    top: 13,
    height: 138,
    borderRadius: Border.br_8xs,
    width: 142,
    left: 10,
    position: "absolute",
  },
  groupItem: {
    height: 33,
    width: 33,
    borderRadius: 71,
    top: 159,
    left: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 267,
    height: 210,
    width: 162,
    left: 197,
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 12,
    shadowOpacity: 1,
    elevation: 6.8,
    shadowRadius: 6.8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    left: 0,
    top: 0,
    height: 210,
    width: 162,
    position: "absolute",
    backgroundColor: Color.white,
  },
  byLynalBlond: {
    top: 187,
    left: 55,
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.poppinsRegular,
    width: 66,
    height: 10,
  },
  yearAgoOn: {
    left: 54,
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 107,
    height: 26,
    top: 159,
    textAlign: "left",
  },
  groupInner: {
    left: 12,
    width: 138,
    height: 140,
  },
  rectangleGroup: {
    left: 16,
  },
  rectangleIcon: {
    height: 142,
    width: 142,
    left: 10,
    top: 12,
  },
  rectangleContainer: {
    left: 197,
    top: 494,
  },
  child: {
    left: 28,
  },
  item: {
    left: 207,
  },
  welcomeTheodore: {
    marginTop: -361,
    width: "57.6%",
    fontSize: 19,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    height: 29,
  },
  discoverTheWorld: {
    marginTop: -332,
    width: "61.25%",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    height: 28,
    opacity: 0.88,
    color: Color.mainPrimary,
    letterSpacing: 1,
    left: "5.07%",
    top: "50%",
  },
  inner: {
    top: 38,
    left: 306,
    borderRadius: 100,
    width: 50,
    height: 50,
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Frame;
