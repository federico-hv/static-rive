import React from "react";
import Rive, { useRive, useRiveNumber, AutoBind } from "rive-react-native";
import { View } from "app/design/view";
import { Pressable, Text } from "react-native";

export default function RiveComponent() {
  const [setRiveRef, riveRef] = useRive();

  const [position, setPosition] = useRiveNumber(riveRef, "position");
  const [color, setColor] = useRiveNumber(riveRef, "color");

  const handleSetPosition = (value: number) => {
    setPosition?.(value);
    riveRef?.play(); // Workaround to trigger animation
  };

  const handleSetColor = (value: number) => {
    setColor?.(value);
    riveRef?.play(); // Workaround to trigger animation
  };

  return (
    <View className="flex flex-col items-center bg-gray-900 p-8">
      <Rive
        ref={setRiveRef}
        url="https://federico-hv.github.io/static-rive/public/data-binding-ball-002.riv"
        artboardName="Artboard"
        stateMachineName="State Machine 1"
        dataBinding={AutoBind(true)}
        autoplay={true}
        style={{ width: 400, height: 400 }}
      />

      <View className="mt-8 flex flex-col gap-6">
        <View className="flex flex-col gap-2">
          <Text className="text-center text-lg font-semibold text-white">
            Position: {position ?? "N/A"}
          </Text>
          <View className="flex flex-row gap-3">
            <Pressable
              onPress={() => handleSetPosition(0)}
              className="rounded-lg bg-blue-600 px-6 py-3 shadow-lg active:opacity-80"
            >
              <Text className="text-xl font-medium text-white">⬅️ Left</Text>
            </Pressable>
            <Pressable
              onPress={() => handleSetPosition(1)}
              className="rounded-lg bg-blue-600 px-6 py-3 shadow-lg active:opacity-80"
            >
              <Text className="text-xl font-medium text-white">➡️ Right</Text>
            </Pressable>
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-center text-lg font-semibold text-white">
            Color: {color ?? "N/A"}
          </Text>
          <View className="flex flex-row gap-3">
            <Pressable
              onPress={() => handleSetColor(0)}
              className="rounded-lg bg-red-600 px-6 py-3 shadow-lg active:opacity-80"
            >
              <Text className="text-xl font-medium text-white">🔴 Red</Text>
            </Pressable>
            <Pressable
              onPress={() => handleSetColor(1)}
              className="rounded-lg bg-yellow-500 px-6 py-3 shadow-lg active:opacity-80"
            >
              <Text className="text-xl font-medium text-white">🟡 Yellow</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
