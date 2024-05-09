import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={[styles.rectangleParent, styles.rectangleLayout]}>
      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <Text style={[styles.byTara, styles.taraTypo]}>{`By Tara
`}</Text>
      <Text style={[styles.byTara1, styles.taraTypo]}>{`By Tara
`}</Text>
      <Text
        style={[styles.auntieTaraRecently, styles.auntieTypo]}
      >{`Auntie Tara recently 
added to Christmas`}</Text>
      <Text
        style={[styles.auntieTinaRecently, styles.auntieTypo]}
      >{`Auntie Tina recently
added to Birthdays`}</Text>
      <Image
        style={[styles.groupChild, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-161.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 210,
    position: "absolute",
  },
  taraTypo: {
    height: 9,
    width: 34,
    textAlign: "left",
    color: Color.mainPrimary,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_7xs,
    top: 187,
    position: "absolute",
  },
  auntieTypo: {
    height: 26,
    width: 107,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    top: 158,
    textAlign: "left",
    color: Color.mainPrimary,
    position: "absolute",
  },
  groupPosition: {
    left: 12,
    position: "absolute",
  },
  rectangle: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 1.9976832866668701,
    },
    shadowRadius: 6.8,
    elevation: 6.8,
    shadowOpacity: 1,
    borderRadius: 12,
    backgroundColor: Color.white,
    width: 162,
  },
  byTara: {
    left: 52,
  },
  byTara1: {
    left: 234,
  },
  auntieTaraRecently: {
    left: 51,
  },
  auntieTinaRecently: {
    left: 233,
  },
  groupChild: {
    borderRadius: 71,
    width: 33,
    height: 34,
    top: 158,
    left: 12,
  },
  groupItem: {
    top: 13,
    borderRadius: Border.br_8xs,
    width: 138,
    height: 138,
  },
  rectangleParent: {
    top: 267,
    left: 16,
    width: 340,
  },
});

export default GroupComponent;
