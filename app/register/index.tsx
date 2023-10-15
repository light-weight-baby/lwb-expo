import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Linking } from "react-native";
import { ArrowLeft } from "@tamagui/lucide-icons";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { Button, H3, XStack, YStack } from "tamagui";
import { Text } from "tamagui";

import InputLabel from "../../components/InputLabel";
import { MyStack } from "../../components/MyStack";

export default function User() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);

  const link = "http://localhost:8000/oauth/google";
  const [hidePass, setHidePass] = useState(true);

  const handleOpenURL = ({ url }) => {
    if (url.indexOf("?id") !== -1) {
      if (url) setData(url);
    }
    console.log(url);
  };

  const _handlePressButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(link);
    setResult(result);
  };

  useEffect(() => {
    // Your code here
    Linking.addEventListener("url", handleOpenURL);
  }, []);

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

  // const handleGoogle = () => {
  //   fetch("http://localhost:8000/api/oauth/google", {
  //     method: "GET"
  //   });
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
        <Button
          theme="green"
          marginTop="$10"
          onPress={_handlePressButtonAsync}
        >
          Google
        </Button>
        <Text>{result && JSON.stringify(result)}</Text>
      </YStack>
    </MyStack>
  );
}
