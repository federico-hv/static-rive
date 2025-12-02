import React from "react";
import {
  useRive,
  useViewModel,
  useViewModelInstance,
} from "@rive-app/react-canvas";
import { View } from "app/design/view";

export default function App() {
  const { rive, RiveComponent } = useRive({
    src: "https://federico-hv.github.io/static-rive/public/data-binding-ball-002.riv",
    artboard: "Artboard",
    stateMachines: ["State Machine 1"],
    autoplay: true,
  });

  const viewModel = useViewModel(rive, { useDefault: true });
  const viewModelInstance = useViewModelInstance(viewModel, { rive });

  // Get both properties
  const positionProperty = React.useMemo(() => {
    if (!viewModelInstance) return null;
    return viewModelInstance.number("position");
  }, [viewModelInstance]);

  const colorProperty = React.useMemo(() => {
    if (!viewModelInstance) return null;
    return viewModelInstance.number("color");
  }, [viewModelInstance]);

  // Button handlers
  const setPositionZero = () =>
    positionProperty && (positionProperty.value = 0);
  const setPositionOne = () => positionProperty && (positionProperty.value = 1);
  const setColorZero = () => colorProperty && (colorProperty.value = 0);
  const setColorOne = () => colorProperty && (colorProperty.value = 1);

  return (
    <View className="flex flex-col items-center bg-gray-900 p-8">
      <RiveComponent style={{ width: 300, height: 300 }} />

      <View className="mt-8 flex flex-col gap-6">
        <View className="flex flex-col gap-2">
          <View className="text-center text-lg font-semibold text-white">
            Position
          </View>
          <View className="flex flex-row gap-3">
            <button
              onClick={setPositionZero}
              className="rounded-lg bg-blue-600 px-6 py-3 text-xl font-medium text-white shadow-lg transition-all hover:bg-blue-700 active:scale-95"
            >
              ⬅️ Left
            </button>
            <button
              onClick={setPositionOne}
              className="rounded-lg bg-blue-600 px-6 py-3 text-xl font-medium text-white shadow-lg transition-all hover:bg-blue-700 active:scale-95"
            >
              ➡️ Right
            </button>
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <View className="text-center text-lg font-semibold text-white">
            Color
          </View>
          <View className="flex flex-row gap-3">
            <button
              onClick={setColorZero}
              className="rounded-lg bg-red-600 px-6 py-3 text-xl font-medium text-white shadow-lg transition-all hover:bg-red-700 active:scale-95"
            >
              🔴 Red
            </button>
            <button
              onClick={setColorOne}
              className="rounded-lg bg-yellow-500 px-6 py-3 text-xl font-medium text-white shadow-lg transition-all hover:bg-yellow-600 active:scale-95"
            >
              🟡 Yellow
            </button>
          </View>
        </View>
      </View>
    </View>
  );
}
