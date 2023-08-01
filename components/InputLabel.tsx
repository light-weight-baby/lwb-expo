import { Controller } from "react-hook-form";
import { Input, XStack, YStack } from "tamagui";

export default function InputLabel({
  label,
  control,
  max,
  min,
  ...props
}: any) {
  return (
    <YStack
      padding="$3"
      minWidth={300}
      space="$4"
    >
      <XStack
        //   alignItems="center"
        flexDirection="column"
        space="$2"
        position="relative"
      >
        <Controller
          name={label}
          control={control}
          rules={{
            required: { value: true, message: "Error" },
            maxLength: max,
            minLength: min
          }}
          render={({ field: { onChange, onBlur, value } }: any) => (
            <Input
              defaultValue=""
              id={label}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...props}
            />
          )}
        />
      </XStack>
    </YStack>
  );
}
