import { StyleSheet } from "react-native"
import { Spacing } from "../../../styles/base"
import { Colors } from "../../../styles/colors"

export const contentWrapperStyles = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: Spacing.s,
    paddingTop: Spacing.l
  }
})
