import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfileSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.frameChildBorder]}>
      <View style={[styles.frameChild, styles.frameChildBorder]} />
      <View style={styles.iconTreeParent}>
        <Image
          style={styles.iconTree}
          resizeMode="cover"
          source={require("../assets/-icon-tree.png")}
        />
        <Text style={styles.tree}>Tree</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.imageAdd02Parent}>
          <Image
            style={styles.iconTree}
            resizeMode="cover"
            source={require("../assets/imageadd02.png")}
          />
          <Text style={[styles.addImage, styles.addTypo]}>Add Image</Text>
        </View>
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/line-2.png")}
        />
        <View style={styles.userAdd01Parent}>
          <Image
            style={styles.iconTree}
            resizeMode="cover"
            source={require("../assets/useradd01.png")}
          />
          <Text style={[styles.addMember, styles.addTypo]}>Add Member</Text>
        </View>
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/line-2.png")}
        />
        <View style={styles.userAdd01Parent}>
          <Image
            style={styles.iconTree}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
          <Text style={[styles.addMember, styles.addTypo]}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.white,
    position: "absolute",
  },
  addTypo: {
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 1,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  frameChild: {
    marginTop: -21.5,
    top: "50%",
    left: 7,
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    width: 69,
    height: 43,
  },
  iconTree: {
    width: 18,
    height: 18,
  },
  tree: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.primary,
    marginTop: 1,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  iconTreeParent: {
    top: 11,
    left: 31,
    alignItems: "center",
    position: "absolute",
  },
  addImage: {
    color: Color.colorGray_200,
  },
  imageAdd02Parent: {
    alignItems: "center",
  },
  frameItem: {
    width: 0,
    height: 36,
    opacity: 0.1,
    marginLeft: 20,
  },
  addMember: {
    color: Color.colorGray_100,
  },
  userAdd01Parent: {
    marginLeft: 20,
    alignItems: "center",
  },
  frameParent: {
    top: 12,
    right: 20,
    flexDirection: "row",
    backgroundColor: Color.white,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -174.5,
    top: 738,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderColor: Color.white,
    borderTopWidth: 1,
    width: 350,
    height: 57,
    overflow: "hidden",
  },
});

export default ProfileSection;
