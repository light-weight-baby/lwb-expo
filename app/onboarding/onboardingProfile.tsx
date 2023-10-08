import React from "react";
import { Control, useController, useForm } from "react-hook-form";
import { ArrowRight } from "@tamagui/lucide-icons";
import { Button, Form, Input, Label, XStack, YStack } from "tamagui";

import OnboardingForm from "../../components/OnboardingForm";
import ToggleGroupComponent from "../../components/ToggleGroupComponent";

export default function OnboardingProfile() {
  const { control, handleSubmit } = useForm();
  const onSubmit = () => null; // TODO: Call profile Update API

  const FormInput = (props: { name: string; control: Control<any> }) => {
    const defaultValue = props.name == "Age" ? "21" : "";
    const { field } = useController({
      control: props.control,
      defaultValue,
      name: props.name
    });

    return (
      <Input
        value={field.value}
        onChangeText={field.onChange}
        width="$10"
      />
    );
  };

  const getForm = () => {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <YStack space>
          <XStack justifyContent="space-evenly">
            <Label>Age</Label>

            <Label>Weight</Label>

            <Label>Height</Label>
          </XStack>
          <XStack justifyContent="space-evenly">
            <FormInput
              control={control}
              name={"Age"}
            />
            <FormInput
              control={control}
              name={"Weight"}
            />
            <FormInput
              control={control}
              name={"Height"}
            />
          </XStack>
          <Label>Gender</Label>
          <XStack justifyContent="space-evenly">
            <ToggleGroupComponent
              size="$10"
              type="single"
              orientation="horizontal"
              topic="Gender"
              values={["Male", "Female", "Other"]}
              control={control}
            />
          </XStack>

          <Label>Workout Style</Label>
          <XStack justifyContent="space-evenly">
            <ToggleGroupComponent
              size="$10"
              type="single"
              orientation="horizontal"
              topic="Style"
              values={["Bodybuilding", "Powerlifting", "Other"]}
              control={control}
            />
          </XStack>

          <Label>Years of experience</Label>
          <XStack justifyContent="space-evenly">
            <ToggleGroupComponent
              size="$10"
              type="single"
              orientation="horizontal"
              topic="YOE"
              values={["0 ~ 3", "3 ~ 7", "7+"]}
              control={control}
            />
          </XStack>
        </YStack>
        <Form.Trigger asChild>
          <Button
            icon={ArrowRight}
            onPress={handleSubmit(onSubmit)}
          />
        </Form.Trigger>
      </Form>
    );
  };

  return (
    <OnboardingForm
      title={"Profile"}
      form={getForm()}
      navigateTo={"/onboarding/experience"}
      onSubmit={handleSubmit(onSubmit)} // TODO: Call profile update API
    />
  );
}
