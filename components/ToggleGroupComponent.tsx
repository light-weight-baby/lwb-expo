import { Control, useController } from "react-hook-form";
import { Text } from "react-native";
import { SizeTokens, ToggleGroup, XStack } from "tamagui";

export default function ToggleGroupComponent(props: {
  size: SizeTokens;
  type: "single" | "multiple";
  orientation: "vertical" | "horizontal";
  topic: string;
  values: string[];
  control: Control<any>;
}) {
  const id = `switch-${props.size.toString().slice(1)}-${props.type}`;
  const toggleItems = [];
  const { field } = useController({
    control: props.control,
    name: props.topic
  });

  for (const value of props.values) {
    toggleItems.push(
      <ToggleGroup.Item
        value={value}
        aria-label={value}
      >
        <Text>{value}</Text>
      </ToggleGroup.Item>
    );
  }
  return (
    <XStack
      flexDirection={props.orientation === "horizontal" ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
    >
      <ToggleGroup
        orientation={props.orientation}
        id={id}
        type={props.type}
        size={props.size}
        disableDeactivation={props.type === "single" ? true : undefined}
        onValueChange={field.onChange}
      >
        {toggleItems}
      </ToggleGroup>
    </XStack>
  );
}
