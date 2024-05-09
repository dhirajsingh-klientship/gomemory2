import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Property1InterestProperty from "./Property1InterestProperty";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Interest = () => {
  return (
    <View style={styles.interest}>
      <Text style={styles.viewAll}>View all</Text>
      <View style={styles.interest1}>
        <Property1InterestProperty
          interest="️😀 Wedding"
          property1InterestPropertyPosition="absolute"
          property1InterestPropertyBorderStyle="unset"
          property1InterestPropertyBorderColor="unset"
          property1InterestPropertyMarginTop={-46}
          property1InterestPropertyMarginLeft={-171.5}
          property1InterestPropertyTop="50%"
          property1InterestPropertyLeft="50%"
          property1InterestPropertyElevation={6.8}
          property1InterestPropertyBackgroundColor="#fff"
          interestFontWeight="unset"
          interestFontFamily="Inter-Regular"
          interestColor="#4b164c"
        />
        <Property1InterestProperty
          interest="🎂 Birthday"
          property1InterestPropertyPosition="absolute"
          property1InterestPropertyBorderStyle="unset"
          property1InterestPropertyBorderColor="unset"
          property1InterestPropertyMarginTop={-46}
          property1InterestPropertyMarginLeft={-52}
          property1InterestPropertyTop="50%"
          property1InterestPropertyLeft="50%"
          property1InterestPropertyElevation={6.8}
          property1InterestPropertyBackgroundColor="#fff"
          interestFontWeight="unset"
          interestFontFamily="Inter-Regular"
          interestColor="#4b164c"
        />
        <Property1InterestProperty
          interest="📷 Photography"
          property1InterestPropertyPosition="absolute"
          property1InterestPropertyBorderStyle="unset"
          property1InterestPropertyBorderColor="unset"
          property1InterestPropertyMarginTop={5}
          property1InterestPropertyMarginLeft={-171.5}
          property1InterestPropertyTop="50%"
          property1InterestPropertyLeft="50%"
          property1InterestPropertyElevation={6.8}
          property1InterestPropertyBackgroundColor="#fff"
          interestFontWeight="unset"
          interestFontFamily="Inter-Regular"
          interestColor="#4b164c"
        />
        <Property1InterestProperty
          property1InterestPropertyPosition="absolute"
          property1InterestPropertyBorderStyle="unset"
          property1InterestPropertyBorderColor="unset"
          property1InterestPropertyMarginTop={6}
          property1InterestPropertyMarginLeft={-10.5}
          property1InterestPropertyTop="50%"
          property1InterestPropertyLeft="50%"
          property1InterestPropertyElevation={6.8}
          property1InterestPropertyBackgroundColor="transparent"
          interestFontWeight="unset"
          interestFontFamily="unset"
          interestColor="#fff"
        />
        <Property1InterestProperty
          interest="🗣 Holiday"
          property1InterestPropertyPosition="absolute"
          property1InterestPropertyBorderStyle="unset"
          property1InterestPropertyBorderColor="unset"
          property1InterestPropertyMarginTop={-46}
          property1InterestPropertyMarginLeft={69.5}
          property1InterestPropertyTop="50%"
          property1InterestPropertyLeft="50%"
          property1InterestPropertyElevation={6.8}
          property1InterestPropertyBackgroundColor="#fff"
          interestFontWeight="unset"
          interestFontFamily="Inter-Regular"
          interestColor="#4b164c"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewAll: {
    top: 0,
    left: 284,
    fontSize: FontSize.bodyMediumMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    color: Color.colorFuchsia_100,
    textAlign: "right",
    position: "absolute",
  },
  interest1: {
    marginTop: -26,
    marginLeft: -178.25,
    top: "50%",
    left: "50%",
    width: 343,
    height: 92,
    position: "absolute",
  },
  interest: {
    top: 108,
    left: 9,
    width: 357,
    height: 132,
    position: "absolute",
  },
});

export default Interest;
