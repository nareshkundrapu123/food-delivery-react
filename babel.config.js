//import {runtime} from "./jest.config";

module.exports = {
  presets: [
    ['@babel/preset-env',{targets:{node:"current"}}],
    ['@babel/preset-react',{runtime:"automatic"}],
],
};