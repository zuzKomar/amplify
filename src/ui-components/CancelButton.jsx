/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function CancelButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="154px"
      height="38px"
      position="relative"
      borderRadius="13px"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="13px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(193.37499797344208,16.11458569765091,16.11458569765091,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="23.684210526315788%"
        bottom="26.31578947368421%"
        left="24.675324675324674%"
        right="7.142857142857142%"
        padding="0px 0px 0px 0px"
        children="Cancel"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
