import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { Button, H3, XStack, YStack } from "tamagui";
import { Text } from "tamagui";

import InputLabel from "../../components/InputLabel";
import { MyStack } from "../../components/MyStack";

export default function User() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [hidePass, setHidePass] = useState(true);

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<any>();
  // const onSubmit = () => {
  //   if (name && email && pass) {
  //     console.log(name, email, pass);
  //   } else {
  //     console.log("Fill out all fields");
  //   }
  // };

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <MyStack justifyContent="flex-start">
      <XStack
        alignItems="center"
        space="$6"
      >
        <Button
          icon={ArrowLeft}
          onPress={router.back}
        />
        <H3>Create an account</H3>
      </XStack>

      <YStack marginTop="$8">
        <InputLabel
          label="Name"
          control={control}
          max={10}
          min={3}
          returnKeyType="next"
          autoCapitalize
          placeholder="Name"
        />
        {errors.Name && (
          <Text
            ml="$4"
            fontSize="$1"
            color={"red"}
          >
            Name must be more than 3 characters and less than 10.
          </Text>
        )}
        <InputLabel
          label="Email"
          max={20}
          min={3}
          control={control}
          inputMode="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          returnKeyType="next"
          placeholder="Email"
        />
        {errors.Email && (
          <Text
            ml="$4"
            fontSize="$1"
            color={"red"}
          >
            Email must be more than 3 characters, less than 20, and include an
            @.
          </Text>
        )}
        <InputLabel
          label="Password"
          max={20}
          min={8}
          control={control}
          textContentType="newPassword"
          secureTextEntry={hidePass ? true : false}
          placeholder="Password"
        />
        {errors.Name && (
          <Text
            ml="$4"
            fontSize="$1"
            color={"red"}
          >
            Password must be more than 8 characters and less than 20.
          </Text>
        )}
        <Button
          theme="blue"
          marginTop="$10"
          onPress={handleSubmit(onSubmit)}
        >
          Sign up
        </Button>
      </YStack>
    </MyStack>
  );
}
