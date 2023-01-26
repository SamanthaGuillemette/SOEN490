import {
  ScrollView,
  StyleProp,
  ViewStyle,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import { useState } from "react";
import { ShadowView } from "../ShadowView/ShadowView.component";
import { View } from "../View/View.component";
import _ from "lodash";
import { Incubator, ChipsInputChipProps } from "react-native-ui-lib";
import styles from "./Chips.styles";
import { useThemeColor } from "../../hooks";

interface ChipsProps {
  placeHolder: string;
  styleBox: StyleProp<ViewStyle>;
}

export const Chips = (props: ChipsProps) => {
  const background = useThemeColor("background");
  const generalGray = useThemeColor("generalGray");
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const { placeHolder, styleBox } = props;
  const [chips, setChips] = useState<ChipsInputChipProps[] | undefined>([]);

  return (
    <ScrollView>
      <ShadowView
        style={[
          styles.ShadowView,
          styleBox,
          { borderColor: backgroundSecondary },
        ]}
        isInnerShadow={true}
        backgroundColor={"primaryBackgroundOpaque"}
      >
        <View style={styles.alignText}>
          <Incubator.ChipsInput
            placeholder={placeHolder}
            chips={chips}
            defaultChipProps={{
              backgroundColor: background,
              containerStyle: {
                borderWidth: 1,
                borderColor: generalGray,
                height: 36,
                borderRadius: 8,
              },
            }}
            onChange={(newChips) => {
              _.flow(
                (newChips) => _.groupBy(newChips, "label"),
                (newChips) =>
                  _.forEach(newChips, (group) => {
                    if (group.length === 1) {
                      delete group[0].invalid;
                    } else {
                      group[group.length - 1].invalid = true;
                    }
                  }),
                _.values,
                _.flatten
              )(newChips);

              setChips(newChips);
              console.log(newChips);
            }}
          />
        </View>
      </ShadowView>
    </ScrollView>
  );
};
