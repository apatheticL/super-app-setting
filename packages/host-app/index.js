import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { ScriptManager, Federated } from "@callstack/repack/client";

ScriptManager.shared.addResolver(async (scriptId, caller) => {
    const resolveURL = Federated.createURLResolver({
      containers: {
        "MiniApp": "http://localhost:9000/[name][ext]",
      },
    });
  
    const url = resolveURL(scriptId, caller);
    __DEV__&& console.log("🚀 ~ file: index.js:14 ~ ScriptManager.shared.addResolver ~ scriptId:", scriptId)
    __DEV__&& console.log("🚀 ~ file: index.js:14 ~ ScriptManager.shared.addResolver ~ url:", url)
    if(!url){
        return undefined;
    }
      return {
        url,
        cache: !__DEV__,
        query: {
          platform: Platform.OS,
        },
        timeout: 500000,
        verifyScriptSignature: 'off',
      };
    
  });
AppRegistry.registerComponent(appName, () => App);
