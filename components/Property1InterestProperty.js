import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1InterestProperty = ({
  interest,
  property1InterestPropertyPosition,
  property1InterestPropertyBorderStyle,
  property1InterestPropertyBorderColor,
  property1InterestPropertyBorderWidth,
  property1InterestPropertyMarginTop,
  property1InterestPropertyMarginLeft,
  property1InterestPropertyTop,
  property1InterestPropertyLeft,
  property1InterestPropertyElevation,
  property1InterestPropertyBackgroundColor,
  interestFontWeight,
  interestFontFamily,
  interestColor,
}) => {
  const property1InterestPropertyStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1InterestPropertyPosition),
      ...getStyleValue("borderStyle", property1InterestPropertyBorderStyle),
      ...getStyleValue("borderColor", property1InterestPropertyBorderColor),
      ...getStyleValue("borderWidth", property1InterestPropertyBorderWidth),
      ...getStyleValue("marginTop", property1InterestPropertyMarginTop),
      ...getStyleValue("marginLeft", property1InterestPropertyMarginLeft),
      ...getStyleValue("top", property1InterestPropertyTop),
      ...getStyleValue("left", property1InterestPropertyLeft),
      ...getStyleValue("elevation", property1InterestPropertyElevation),
      ...getStyleValue(
        "backgroundColor",
        property1InterestPropertyBackgroundColor
      ),
    };
  }, [
    property1InterestPropertyPosition,
    property1InterestPropertyBorderStyle,
    property1InterestPropertyBorderColor,
    property1InterestPropertyBorderWidth,
    property1InterestPropertyMarginTop,
    property1InterestPropertyMarginLeft,
    property1InterestPropertyTop,
    property1InterestPropertyLeft,
    property1InterestPropertyElevation,
    property1InterestPropertyBackgroundColor,
  ]);

  const interestStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", interestFontWeight),
      ...getStyleValue("fontFamily", interestFontFamily),
      ...getStyleValue("color", interestColor),
    };
  }, [interestFontWeight, interestFontFamily, interestColor]);

  return (
    <View
      style={[styles.property1interestProperty, property1InterestPropertyStyle]}
    >
      <Text style={[styles.interest, interestStyle]}>{interest}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  interest: {
    fontSize: FontSize.bodyMediumMedium_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.bodyMediumMedium,
    color: Color.mainPrimary,
    textAlign: "left",
  },
  property1interestProperty: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorDarkslateblue_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
  },
});

export default Property1InterestProperty;
