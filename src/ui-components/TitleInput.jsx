/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function TitleInput(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="column"
      height="105px"
      position="relative"
      padding="10px 10px 10px 10px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        width="862px"
        height="78px"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="13px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(240.12499898672104,238.1239503622055,238.1239503622055,1)"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      ></View>
    </Flex>
  );
}
