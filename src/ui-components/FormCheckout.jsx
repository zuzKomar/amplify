/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { article, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      height="537px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Flex
        gap="0"
        direction="row"
        width="1165px"
        height="548px"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="1165px"
          height="970px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Divider
            width="1165px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[0]")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            height="941px"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Flex[0]")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              children="New Article"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
            <TextField
              label="Title"
              display="flex"
              shrink="0"
              alignSelf="stretch"
              size="large"
              variation="default"
              value={article?.title}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].TextField[0]"
              )}
            ></TextField>
            <TextField
              label="Teaser"
              display="flex"
              shrink="0"
              alignSelf="stretch"
              size="large"
              variation="default"
              value={article?.teaser}
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].TextField[1]"
              )}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Flex[0]"
              )}
            >
              <TextField
                label="Tags"
                width="1101px"
                display="flex"
                grow="1"
                basis="1101px"
                height="74px"
                size="large"
                variation="default"
                value={article?.tags}
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[0].TextField[0]"
                )}
              ></TextField>
            </Flex>
            <Flex
              gap="24px"
              direction="row"
              height="624px"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(
                overrides,
                "Flex.Flex[0].Flex[0].Flex[0].Flex[1]"
              )}
            >
              <TextField
                label="Content"
                width="1101px"
                display="flex"
                height="148px"
                grow="1"
                basis="1101px"
                size="large"
                variation="default"
                value={article?.content}
                {...getOverrideProps(
                  overrides,
                  "Flex.Flex[0].Flex[0].Flex[0].Flex[1].TextField[0]"
                )}
              ></TextField>
            </Flex>
          </Flex>
          <Divider
            width="1165px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Divider[1]")}
          ></Divider>
        </Flex>
      </Flex>
    </Flex>
  );
}
