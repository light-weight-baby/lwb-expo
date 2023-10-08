import { ReactElement } from "react";
import { ArrowLeft, ArrowRight } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack } from "tamagui";

import { MyStack } from "./MyStack";

interface OnboardingFormProps {
  title: string;
  form: ReactElement;
  navigateTo: string;
  onSubmit: () => void;
}
export default function OnboardingForm({
  title,
  form,
  navigateTo,
  onSubmit
}: OnboardingFormProps) {
  const router = useRouter();

  return (
    <MyStack justifyContent="flex-start">
      <H3>{title}</H3>
      {form}
      <XStack justifyContent="space-between">
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <Button
          icon={ArrowRight}
          onPress={() => {
            onSubmit();
            router.push(navigateTo);
          }}
        />
      </XStack>
    </MyStack>
  );
}
