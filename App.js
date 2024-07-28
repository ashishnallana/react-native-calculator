import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [exp, setExp] = useState("1+2");
  const [ans, setAns] = useState("");

  const calcExp = (e) => {
    try {
      let val = eval(e);
      return val;
    } catch (error) {
      return "invalid expression";
    }
  };

  useEffect(() => {
    setAns(calcExp(exp));
  }, [exp]);

  return (
    <View className="mt-7 p-3 flex-1 justify-end bg-black text-white">
      {/* <Text className="text-blue-500">Home</Text> */}
      <View className="px-2 mb-20">
        <Text className="text-white text-7xl text-right">{exp}</Text>
        <Text className="text-[#ffffff80] text-3xl text-right">{ans}</Text>
      </View>
      {/* buttons */}
      <View className="flex space-y-5">
        {/* row1 */}
        <View className="flex flex-row w-full justify-around">
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp("")}
          >
            <Text className="text-blue-500 text-2xl">AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp(exp.slice(0, -1))}
          >
            <Text className="text-blue-500 text-2xl">x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "(")}
          >
            <Text className="text-blue-500 text-2xl">(</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + ")")}
          >
            <Text className="text-blue-500 text-2xl">)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "/")}
          >
            <Text className="text-blue-500 text-2xl">/</Text>
          </TouchableOpacity>
        </View>
        {/* row2 */}
        <View className="flex flex-row w-full justify-around">
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "7")}
          >
            <Text className="text-white text-2xl">7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "8")}
          >
            <Text className="text-white text-2xl">8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "9")}
          >
            <Text className="text-white text-2xl">9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "*")}
          >
            <Text className="text-blue-500 text-2xl">*</Text>
          </TouchableOpacity>
        </View>
        {/* row3 */}
        <View className="flex flex-row w-full justify-around">
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "4")}
          >
            <Text className="text-white text-2xl">4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "5")}
          >
            <Text className="text-white text-2xl">5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "6")}
          >
            <Text className="text-white text-2xl">6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "-")}
          >
            <Text className="text-blue-500 text-2xl">-</Text>
          </TouchableOpacity>
        </View>
        {/* row4 */}
        <View className="flex flex-row w-full justify-around">
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "1")}
          >
            <Text className="text-white text-2xl">1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "2")}
          >
            <Text className="text-white text-2xl">2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "3")}
          >
            <Text className="text-white text-2xl">3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "+")}
          >
            <Text className="text-blue-500 text-2xl">+</Text>
          </TouchableOpacity>
        </View>
        {/* row5 */}
        <View className="flex flex-row w-full justify-around">
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "%")}
          >
            <Text className="text-white text-2xl">%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + "0")}
          >
            <Text className="text-white text-2xl">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#ffffff33] py-2 rounded-full w-16 items-center"
            onPress={() => setExp((e) => e + ".")}
          >
            <Text className="text-white text-2xl">.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#84b3f54d] py-2 rounded-full w-16 items-center"
            onPress={() => setExp(calcExp(exp))}
          >
            <Text className="text-blue-500 text-2xl">=</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* /buttons */}
    </View>
  );
}
