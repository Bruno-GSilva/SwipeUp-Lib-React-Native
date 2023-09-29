# SwipeUp Lib React-Native

SwipeUp Lib is a React Native library that provides an easy and flexible solution for adding swipe-up gestures to your mobile applications. With this library, developers can quickly implement the swipe-up functionality to trigger actions, reveal menus, or display additional information, enhancing the user experience.


## Funcionalidades

- personalizável com tailwindcss
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Bruno-GSilva/SwipeUp-Lib-React-Native.git
```

Entre no diretório do projeto

```bash
  cd SwipeUp-Lib-React-Native
```

Instale as dependências

```bash
  npm install ou yarn
```

Inicie o servidor

```bash
  npm expo start --clear ou yarn expo --clear
```


## Uso/Exemplos

```javascript
import { Text, TouchableOpacity, View } from "react-native";
import SwipeUp from "../SwipeUp";
import { Card } from "../card";

export default function Example() {
    return (
        <View className="flex-1 p-4 bg-purple-500">
            <TouchableOpacity className="w-48 h-48 bg-emerald-500"/>
            {/* <!-- This is an example of a swipeable card component --> */}
            <SwipeUp
                borderColor="bg-white"
                backgroundColor="bg-black"
                touchIconColor="bg-black"
            >
                <Text className="text-white font-semibold text-center my-2 text-2xl">
                    example
                </Text>
                <Card color="bg-red-500" text="1" />
                <Card color="bg-sky-500" text="2" />
                <Card color="bg-purple-500" text="3" />
                <Card color="bg-amber-500" text="4" />
            </SwipeUp>
        </View>
    );
}
```


## Demonstração

Insira um gif ou um link de alguma demonstração


## Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc. Deixe uma issue!


## Suporte

Para suporte, mande um email para brunogomesdsilva7@gmail.com.

