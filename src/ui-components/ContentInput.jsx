/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function ContentInput(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="862px"
      height="751px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Icon
        width="862px"
        height="751px"
        pathData="M0 13C0 5.8203 5.8203 0 13 0L849 0C856.18 0 862 5.8203 862 13L862 738C862 745.18 856.18 751 849 751L13 751C5.82032 751 0 745.18 0 738L0 13Z"
        viewBox={{ minX: 0, minY: 0, width: 862, height: 751 }}
        color="rgba(196.00000351667404,196.00000351667404,196.00000351667404,1)"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "View.Icon[0]")}
      ></Icon>
    </View>
  );
}
